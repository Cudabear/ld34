RisePlant = function(tile, level){
	this._create(tile, level);
}

RisePlant.prototype = {
	sprite: null,

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

	update: function(cat){
		if(game.physics.arcade.intersects(this.sprite.body, cat.sprite.body)){
			this.doGrow();
			cat.sprite.body.velocity.y = -150;
		}
	}
}