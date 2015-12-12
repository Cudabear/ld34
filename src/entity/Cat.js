Cat = function(x, y){

	this._create(x, y);
}

Cat.prototype = {
	sprite: null,
	maxSpeed: 400,
	friction: 40, //maxspeed/10
	seeds: null,
	isAlive: true,

	_create: function(x, y){
		this.sprite = game.add.sprite(x, y, 'cat');
		this.sprite.anchor.setTo(0.5);
		game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
		this.sprite.body.collideWorldBounds = true;
		this.seeds = [];
	},

	update: function(currentLevel){
		game.physics.arcade.collide(this.sprite, currentLevel.collisionLayer, this._levelCollisionHandler, null, this);

		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			this.sprite.scale.x = -1;
			if(this.sprite.body.velocity.x > -this.maxSpeed){
				this.sprite.body.velocity.x -= this.friction;
			}
		}else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			this.sprite.scale.x = 1;
			if(this.sprite.body.velocity.x < this.maxSpeed){
				this.sprite.body.velocity.x += this.friction;
			}
		}else{
			if(this.sprite.body.velocity.x > 0){
				this.sprite.body.velocity.x -= this.friction;
			}else if(this.sprite.body.velocity.x < 0){
				this.sprite.body.velocity.x += this.friction;
			}
		}

		currentLevel.bugs.forEach(function(bug){
			game.physics.arcade.collide(this.sprite, bug.sprite, this._bugCollisionHandler, null, this);
		}, this);

		currentLevel.seeds.forEach(function(seed){
			game.physics.arcade.collide(this.sprite, seed, this._seedCollisionHandler, null, this);
		}, this);

		this._tryToPlantSeeds(currentLevel);
	},

	_tryToPlantSeeds: function(currentLevel){
		var mapTile = Utils.getMapTileAtPixel(this.sprite.x + this.sprite.width/2, this.sprite.y + this.sprite.height/2, currentLevel);
		if(mapTile && mapTile.index == 2 && this.seeds.length > 0 && !mapTile.hasSeed){
			var seed = this.seeds.splice(0, 1)[0];
			this._drawSeeds();
			mapTile.hasSeed = seed.key;
			seed.destroy();
			currentLevel._createPlant(mapTile);
		}
	},

	_levelCollisionHandler: function(cat, tile){
		if(tile && tile.index == 380){
			this.isAlive = false;
		}
	},

	_bugCollisionHandler: function(cat, bug){
		this.isAlive = false;
	},

	_seedCollisionHandler: function(cat, seed){
		this.seeds.push(game.add.sprite(20 + (seed.width + 20) * this.seeds.length, game.height - seed.height - 20, seed.key));
		seed.destroy();
	},

	_drawSeeds: function(){
		this.seeds.forEach(function(seed, index){
			seed.x = 20 + (seed.width + 20) * index;
			seed.y = game.height - seed.height - 20;
		}, this);
	},

	destroy: function(){
		this.seeds.forEach(function(seed){
			seed.destroy();
		}, this);

		this.seeds = [];

		this.sprite.destroy();
	}
}