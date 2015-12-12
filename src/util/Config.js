Config = {
    name: "ReplaceWithGameName",
    version: "0.0.0",
    sprites: [
        //{key: "SpriteKey", imagePath: "path/to/image"}
        {key: "cat", imagePath: "res/img/cat.png"},
        {key: "bug", imagePath: "res/img/bug.png"},
        {key: "cloud", imagePath: "res/img/cloud.png"},
        {key: "level", imagePath: "res/img/level.png"},
        {key: "backdrop", imagePath: "res/img/backdrop.png"},
        {key: "burnplant", imagePath: "res/img/burnplant.png"},
        {key: "boomplant", imagePath: "res/img/boomplant.png"},
        {key: "bridgeplant", imagePath: "res/img/bridgeplant.png"},
        {key: "eatplant", imagePath: "res/img/eatplant.png"},
        {key: "riseplant", imagePath: "res/img/riseplant.png"},
        {key: "tileset", imagePath: "res/img/tileset.png"}
    ],
    animSprites: [
        //{key: "SpriteKey", imagePath: "path/to/image", jsonPath: "path/to/json"}
        {key: "risegrowth", imagePath: "res/img/risegrowth.png", jsonPath: "res/img/risegrowth.json"},
        {key: "flutter", imagePath: "res/img/flutter.png", jsonPath: "res/img/flutter.json"}
    ],
    //tilemaps are assumed to be Tiled JSON.
    tileMaps: [
        //{key: "MapKey", jsonPath: "path/to/json"}
        {key: "test", jsonPath: "res/level/test.json"},
        {key: "Fall", jsonPath: "res/level/beginning.json"},
        {key: "Rise", jsonPath: "res/level/2.json"},
        {key: "Jump", jsonPath: "res/level/3.json"},
    ],
    fonts: [
        //{key: "FontKey", imagePath: "path/to/image", xmlPath: "path/to/XML"}
        {key: "font", imagePath: "res/font/font.png", xmlPath: "res/font/font.xml"}
    ],
    sfx: [
        //{key: "SfxKey", filePath: "path/to/audiofile"}
    ],
    //music loops by default
    music: [
        //{key: "MusicKey", filePath: "path/to/audiofile"}
    ]
}