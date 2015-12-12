Utils = {
	getCollidingTileAtPixel: function(x, y, level){
		return level.tileMap.getTile(Math.round(x/level.tileMap.tileWidth), Math.round(y/level.tileMap.tileHeight), level.collisionLayer);
	},

	getMapTileAtPixel: function(x, y, level){
		return level.tileMap.getTile(Math.round(x/level.tileMap.tileWidth), Math.round(y/level.tileMap.tileHeight), level.mapLayer);
	}
}