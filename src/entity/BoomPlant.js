BoomPlant = function(tile, level){
	this._create(tile, level);
}

BoomPlant.prototype = {
	sprite: null,
	isAlive: true,

	_create: function(tile, level){
		this.sprite = game.add.sprite(tile.x*level.tileMap.tileWidth, tile.y*level.tileMap.tileHeight-level.tileMap.tileHeight, 'risegrowth');
		this.sprite.animations.add('grow', [0, 1, 2, 3]).onComplete.add(function(){this.explode(level)}, this);
		this.sprite.animations.add('shrink', [3, 2, 1, 0]);
		game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
		this.sprite.body.immovable = true;
		this.sprite.body.allowGravity = false;
		this.doGrow();
	},

	doGrow: function(){
		this.sprite.animations.play('grow', 2, false);
	},

	explode: function(level){
		var xLeft = this.sprite.x - this.sprite.width/2 - 5;
		var xRight = this.sprite.x + this.sprite.width + 5;
		var y = this.sprite.y + this.sprite.height + 5;
		var left = Utils.getMapTileAtPixel(xLeft, y, level);
		var right = Utils.getMapTileAtPixel(xRight, y, level);
		var below = Utils.getMapTileAtPixel(this.sprite.x + 5, y, level);

		if(left){
			level.tileMap.removeTile(left.x, left.y, level.mapLayer);
			level.tileMap.removeTile(left.x, left.y, level.collisionLayer);
		}

		if(right){
			level.tileMap.removeTile(right.x, right.y, level.mapLayer);
			level.tileMap.removeTile(right.x, right.y, level.collisionLayer);
		}

		if(below){
			level.tileMap.removeTile(below.x, below.y, level.mapLayer);
			level.tileMap.removeTile(below.x, below.y, level.collisionLayer);
		}

		this.isAlive = false;
		this.sprite.destroy();
	},

	update: function(cat, level){

	},

	_grow: function(x, y, level){

	}
}