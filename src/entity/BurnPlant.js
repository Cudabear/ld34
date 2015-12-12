BurnPlant = function(tile, level){
	this._create(tile, level);
}

BurnPlant.prototype = {
	sprite: null,
	isAlive: true,

	_create: function(tile, level){
		this.sprite = game.add.sprite(tile.x*level.tileMap.tileWidth, tile.y*level.tileMap.tileHeight-level.tileMap.tileHeight, 'risegrowth');
		this.sprite.animations.add('grow', [0, 1, 2, 3]).onComplete.add(function(){this.doShrink()}, this);
		this.sprite.animations.add('shrink', [3, 2, 1, 0]);
		game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
		this.sprite.body.immovable = true;
		this.sprite.body.allowGravity = false;
	},

	doGrow: function(){
		this.sprite.animations.play('grow', 8, false);
	},

	doShrink: function(){
		this.sprite.animations.play('shrink', 4, false);
	},

	update: function(cat, level){
		var left = Utils.getMapTileAtPixel(this.sprite.x - this.sprite.width/2 - 5, this.sprite.y - this.sprite.height/2, level);
		var right = Utils.getMapTileAtPixel(this.sprite.x + this.sprite.width*1.5 + 5, this.sprite.y - this.sprite.height/2, level);

		if(left && left.index == 3){
			this._burn(left, level);
		}

		if(right && right.index == 3){
			this._burn(right, level);
		}
	},

	_burn: function(tile, level){
		//WHY DON'T THESE ACCEPT REFERENCES TO THE LAYER???
		var left = level.tileMap.getTileLeft(0, tile.x, tile.y);
		var right = level.tileMap.getTileRight(0, tile.x, tile.y);
		var above = level.tileMap.getTileAbove(0, tile.x, tile.y);
		var below = level.tileMap.getTileBelow(0, tile.x, tile.y);

		level.tileMap.removeTile(tile.x, tile.y, level.mapLayer);
		this.doGrow();

		if(left && left.index == 3){
			this._burn(left, level);
		}

		if(right && right.index == 3){
			this._burn(right, level);
		}

		if(above && above.index == 3){
			this._burn(above, level);
		}

		if(below && below.index == 3){
			this._burn(below, level);
		}
	}
}