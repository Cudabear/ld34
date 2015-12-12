Cat = function(x, y){

	this._create(x, y);
}

Cat.prototype = {
	sprite: null,
	maxSpeed: 200,
	friction: 20, //maxspeed/10
	seeds: [],

	_create: function(x, y){
		this.sprite = game.add.sprite(x, y, 'cat');
		this.sprite.anchor.setTo(0.5);
		game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	},

	update: function(currentLevel){
		game.physics.arcade.collide(this.sprite, currentLevel.collisionLayer);

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
			game.physics.arcade.collide(this.sprite, bug.sprite, this._bugCollisionHandler);
		}, this);

		currentLevel.seeds.forEach(function(seed){
			game.physics.arcade.collide(this.sprite, seed, this._seedCollisionHandler, null, this);
		}, this);

		var mapTile = Utils.getMapTileAtPixel(this.sprite.x + this.sprite.width/2*-this.sprite.scale.x, this.sprite.y + this.sprite.height/2, currentLevel);
		if(mapTile && mapTile.index == 2 && this.seeds.length > 0 && !mapTile.hasSeed){
			var seed = this.seeds.splice(0, 1)[0];
			this._drawSeeds();
			mapTile.hasSeed = seed.key;
			seed.destroy();
			currentLevel._createPlant(mapTile);
		}
	},

	_bugCollisionHandler: function(cat, bug){
		console.log('game over!');
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
	}
}