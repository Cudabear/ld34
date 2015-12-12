Config = {
    name: "ReplaceWithGameName",
    version: "0.0.0",
    sprites: [
        //{key: "SpriteKey", imagePath: "path/to/image"}
        {key: "cat", imagePath: "res/img/cat.png"},
        {key: "bug", imagePath: "res/img/bug.png"},
        {key: "burnplant", imagePath: "res/img/burnplant.png"},
        {key: "boomplant", imagePath: "res/img/boomplant.png"},
        {key: "bridgeplant", imagePath: "res/img/bridgeplant.png"},
        {key: "eatplant", imagePath: "res/img/eatplant.png"},
        {key: "riseplant", imagePath: "res/img/riseplant.png"},
        {key: "tileset", imagePath: "res/img/tileset.png"}
    ],
    animSprites: [
        //{key: "SpriteKey", imagePath: "path/to/image", jsonPath: "path/to/json"}
        {key: "risegrowth", imagePath: "res/img/risegrowth.png", jsonPath: "res/img/risegrowth.json"}
    ],
    //tilemaps are assumed to be Tiled JSON.
    tileMaps: [
        //{key: "MapKey", jsonPath: "path/to/json"}
        {key: "test", jsonPath: "res/level/test.json"}
    ],
    fonts: [
        //{key: "FontKey", imagePath: "path/to/image", xmlPath: "path/to/XML"}
    ],
    sfx: [
        //{key: "SfxKey", filePath: "path/to/audiofile"}
    ],
    //music loops by default
    music: [
        //{key: "MusicKey", filePath: "path/to/audiofile"}
    ]
}