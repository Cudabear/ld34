SelectState = function(){ }

SelectState.prototype = {
    effects: null,
    text: null,
    levels: null,

    preload: function(){

    },

    create: function(){
        game.stage.backgroundColor = '#96fffc'
        this.effects = [];
        this.text = {};
        this.levels = [];

        for(var i = 0; i < 10; i++){
            var yPos = Math.random()*game.height/2.2 - 100;
            var xPos = Math.random()*(game.width + 200);
            var velocity = Math.random()*1;
            var scale = Math.random()*0.4 + 0.8;
            var effect = game.add.sprite(xPos, yPos, 'cloud');
            effect.velocity = velocity;
            effect.scale.setTo(scale);

            this.effects.push(effect);
        }

        backdrop = game.add.sprite(0, 0, 'backdrop');

        text.titleText = game.add.bitmapText(game.world.centerX, 50, 'font', 'Game Name Goes Here', 38);
        text.titleText.anchor.setTo(0.5);
        text.infoText = game.add.bitmapText(game.world.centerX, 100, 'font', 'A game created in 72 hours for Ludum Dare 34.', 18);
        text.infoText.anchor.setTo(0.5);
        text.creatorText = game.add.bitmapText(game.world.centerX, 130, 'font', 'Code and Sound by Cudabear. Art by Melda Silas.', 18);
        text.creatorText.anchor.setTo(0.5);

        this.createLevelLinks();
    },

    update: function(){
        this.effects.forEach(function(effect){
            effect.x -= effect.velocity;

            if(effect.x < -200){
                effect.y = Math.random()*game.height/2;
                effect.velocity = Math.random()*2;
                effect.x = game.width + 200;
            }
        }, this);
    },

    render: function(){

    },

    createLevelLinks: function(){
        for(var key in game.cache._tilemaps){
            var level = game.add.sprite(20+(this.levels.length%5)*128, 150, 'level');
            level.titleText = game.add.bitmapText(level.x + level.width/2, level.y + level.height/2, 'font', key, 10);
            level.titleText.anchor.setTo(0.5);
            level.inputEnabled = true;
            level.levelKey = key;
            level.events.onInputDown.add(function(){
                Config.currentLevel = this.levelKey;
                game.state.start('MainState');
            }, level)
            this.levels.push(level);
        }
    }
}