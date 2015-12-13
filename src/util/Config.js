Config = {
    name: "ReplaceWithGameName",
    version: "0.0.0",
    retries: 0,
    sprites: [
        //{key: "SpriteKey", imagePath: "path/to/image"}
        {key: "cat", imagePath: "res/img/cat.png"},
        {key: "bug", imagePath: "res/img/bug.png"},
        {key: "cloud1", imagePath: "res/img/cloud.png"},
        {key: "cloud2", imagePath: "res/img/cloud2.png"},
        {key: "cloud3", imagePath: "res/img/cloud3.png"},
        {key: "cloud4", imagePath: "res/img/cloud4.png"},
        {key: "cloud5", imagePath: "res/img/cloud5.png"},
        {key: "level", imagePath: "res/img/level.png"},
        {key: "back", imagePath: "res/img/backarrow.png"},
        {key: "backdrop", imagePath: "res/img/background.png"},
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
        {key: "animcat", imagePath: "res/img/blackandwhite.png", jsonPath: "res/img/blackandwhite.json"},
        {key: "flutter", imagePath: "res/img/flutter.png", jsonPath: "res/img/flutter.json"},
        {key: "hornets", imagePath: "res/img/hornets.png", jsonPath: "res/img/hornets.json"},
        {key: "trapgrowth", imagePath: "res/img/venusflytrap.png", jsonPath: "res/img/venusflytrap.json"},
        {key: "firegrowth", imagePath: "res/img/fireplant.png", jsonPath: "res/img/fireplant.json"},
        {key: "bombgrowth", imagePath: "res/img/bombplant.png", jsonPath: "res/img/bombplant.json"}
    ],
    //tilemaps are assumed to be Tiled JSON.
    tileMaps: [
        //{key: "MapKey", jsonPath: "path/to/json"}
        {key: "test", jsonPath: "res/level/test.json"},
        {key: "Fall", jsonPath: "res/level/beginning.json"},
        {key: "Rise", jsonPath: "res/level/2.json"},
        {key: "Jump", jsonPath: "res/level/3.json"},
        {key: "Hop", jsonPath: "res/level/4.json"},
        {key: "Avoid", jsonPath: "res/level/5.json"},
        {key: "Eat", jsonPath: "res/level/6.json"},
        {key: "Order", jsonPath: "res/level/7.json"},
        {key: "Burn", jsonPath: "res/level/8.json"},
        {key: "Doors", jsonPath: "res/level/9.json"},
        // {key: "10", jsonPath: "res/level/10.json"},
        // {key: "11", jsonPath: "res/level/11.json"},
    ],
    fonts: [
        //{key: "FontKey", imagePath: "path/to/image", xmlPath: "path/to/XML"}
        {key: "font", imagePath: "res/font/font.png", xmlPath: "res/font/font.xml"}
    ],
    sfx: [
        //{key: "SfxKey", filePath: "path/to/audiofile"}
        {key: "jump", filePath: "res/audio/jump.wav"},
        {key: "hurt", filePath: "res/audio/hurt.wav"},
        {key: "advance", filePath: "res/audio/advance.wav"},
        {key: "fire", filePath: "res/audio/fire.wav"},
        {key: "spawn", filePath: "res/audio/spawn.wav"},
        {key: "step", filePath: "res/audio/step.wav"},
        {key: "eat", filePath: "res/audio/eat.wav"},
        {key: "bridge", filePath: "res/audio/bridge.wav"},
        {key: "explode", filePath: "res/audio/explosion.wav"},
    ],
    //music loops by default
    music: [
        //{key: "MusicKey", filePath: "path/to/audiofile"}
        {key: "bgm", filePath: "res/audio/bgm.ogg"}
    ]
}