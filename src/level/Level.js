Level = function(tileMapId){
	this.tileMapId = tileMapId;

	this._create();
}

Level.prototype = {
	tileSetID: 'tileSet',
	tileMapId: null,
	tileMap: null,
	collisionLayer: null,
	mapLayer: null,
	spawnsLayer: null,

	plants: [],
	seeds: [],
	bugs: [],


	_create: function(){
		this.tileMap = game.add.tilemap(this.tileMapId);
		this.tileMap.addTilesetImage('tileset','tileset');
		
		this.collisionLayer = this.tileMap.createLayer('collision');
		this.tileMap.setCollisionBetween(1, 500, true, this.collisionLayer);
		this.collisionLayer.alpha = 0;
		this.spawnsLayer = this.tileMap.createLayer('spawns');
		this.spawnsLayer.alpha = 0;
		this.tileMap.createLayer('detail');
		this.mapLayer = this.tileMap.createLayer('level');

		this._parseSpawnLayer();
	},

	update: function(cat){
		for(var i = this.bugs.length - 1; i >= 0; i--){
			var bug = this.bugs[i];
			bug.update(this);

			if(!bug.alive){
				this.bugs.splice(i, 1);
			}
		}

		this.seeds.forEach(function(seed){
			game.physics.arcade.collide(seed, this.collisionLayer);
		}, this);

		for(var i = this.plants.length - 1; i >= 0; i--){
			var plant = this.plants[i];
			plant.update(cat, this);

			if(!plant.isAlive){
				this.plants.splice(i, 1);
			}
		}
	},

	_parseSpawnLayer: function(){
		var tiles = this.spawnsLayer.layer.data;
		var seedSpawnTiles = [];
		var bugSpawnTiles = [];

		for(var row = 0; row < tiles.length; row++){
			for(var col = 0; col < tiles[row].length; col++){
				var tile = tiles[row][col];

				if(tile.index >= 395 && tile.index <= 399){
					seedSpawnTiles.push(tile);
				}

				if(tile.index == 394){
					bugSpawnTiles.push(tile);;
				}
			}
		}

		bugSpawnTiles.forEach(function(tile){
			this.bugs.push(new Bug(tile.x*this.tileMap.tileWidth, tile.y*this.tileMap.tileHeight));
		}, this);

		seedSpawnTiles.forEach(function(tile){
			var index = "";
			switch(tile.index){
				case 395:
					index = "riseplant";
				break;
				case 396:
					index = 'burnplant';
				break;
				case 397:
					index = 'eatplant';
				break;
				case 398:
					index = 'boomplant';
				break;
				case 399:
					index = 'bridgeplant';
				break;
			}
			var sprite = game.add.sprite(tile.x*this.tileMap.tileWidth, tile.y*this.tileMap.tileHeight, index);
			game.physics.enable(sprite, Phaser.Physics.ARCADE);
			this.seeds.push(sprite);
		}, this);
		
	},

	_createPlant: function(tile){
		console.log("I want to plant " + tile.hasSeed);

		var plant;
		switch(tile.hasSeed){
			case "riseplant":
				plant = new RisePlant(tile, this);
			break;
			case "burnplant":
				plant = new BurnPlant(tile, this);
			break;
			case "eatplant":
				plant = new EatPlant(tile, this);
			break;
			case "boomplant":
				plant = new BoomPlant(tile, this);
			break;
			case "bridgeplant":
				plant = new BridgePlant(tile, this);
			break;
		}

		this.plants.push(plant);
	}
}