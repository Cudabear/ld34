Bug = function(x, y){

	this._create(x, y);
}

Bug.prototype = {
	sprite: null,
	direction: 0,
	maxSpeed: 80,
	friction: 8,

	_create: function(x, y){
		this.sprite = game.add.sprite(x, y, 'bug');
		this.sprite.anchor.setTo(0.5);
		this.direction = (Math.random()*2 -1) >= 0 ? 1 : -1;
		game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
		this.sprite.body.bounce.setTo(1);
	},

	update: function(currentLevel){
		game.physics.arcade.collide(this.sprite, currentLevel.collisionLayer, this._levelCollisionHandler, null, this);

		this.sprite.scale.x = this.direction;
		if(this.direction == -1){
			if(this.sprite.body.velocity.x > -this.maxSpeed){
				this.sprite.body.velocity.x -= this.friction;
			}

			if(!Utils.getCollidingTileAtPixel(this.sprite.x - currentLevel.tileMap.tileWidth, this.sprite.y + this.sprite.height/2, currentLevel)){
				this.direction = 1;
			}
		}else{
			if(this.sprite.body.velocity.x < this.maxSpeed){
				this.sprite.body.velocity.x += this.friction;
			}

			if(!Utils.getCollidingTileAtPixel(this.sprite.x + currentLevel.tileMap.tileWidth, this.sprite.y + this.sprite.height/2, currentLevel)){
				this.direction = -1;
			}
		}

	},

	_levelCollisionHandler: function(me, level){
		if(me.body.onWall()){
			this.direction *= -1;
		}
	}
}
