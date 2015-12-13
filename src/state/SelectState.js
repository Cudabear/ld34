SelectState = function(){ }

var bgm = null;
var jmpFx = null;
var hurtFx = null;
var fireFx = null;
var advanceFx = null;
var spawnFx = null;
var stepFx = null;
var eatFx = null;
var bridgeFx = null;
var explodeFx = null;
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

        backdrop = game.add.sprite(0, 0, 'backdrop');
        //game.stage.backgroundColor = '#96fffc'

        for(var i = 0; i < 10; i++){
            var yPos = Math.random()*game.height/2.2 - 100;
            var xPos = Math.random()*(game.width + 200);
            var velocity = Math.random()*1;
            var effect = game.add.sprite(xPos, yPos, 'cloud'+(Math.round(Math.random()*4)+1));
            effect.velocity = velocity;
            effect.scale.setTo(0.5);
            this.effects.push(effect);
        }

        //remove this line if not using lighting effects
        game.plugins.add(Phaser.Plugin.PhaserIlluminated);

        if(!bgm){
            bgm = game.add.audio('bgm');
        }
        if(!bgm.isPlaying){
            bgm.play('', 0, 1, true);
        }

        if(!jmpFx){
            jmpFx = game.add.audio('jump', 0.5);
        }

        if(!hurtFx){
            hurtFx = game.add.audio('hurt');
        }

        if(!fireFx){
            fireFx = game.add.audio('fire', 0.5);
        }

        if(!advanceFx){
            advanceFx = game.add.audio('advance', 0.2);
        }

        if(!spawnFx){
            spawnFx = game.add.audio('spawn', 0.2);
        }

        if(!stepFx){
            stepFx = game.add.audio('step');
        }

        if(!eatFx){
            eatFx = game.add.audio('eat');
        }

        if(!bridgeFx){
            bridgeFx = game.add.audio('bridge');
        }

        if(!explodeFx){
            explodeFx = game.add.audio('explode');
        }

        text.titleText = game.add.bitmapText(game.world.centerX, 50, 'font', 'Flutter', 38);
        text.titleText.anchor.setTo(0.5);
        text.infoText = game.add.bitmapText(game.world.centerX, 100, 'font', 'A game created in 72 hours for Ludum Dare 34.', 24);
        text.infoText.anchor.setTo(0.5);
        text.creatorText = game.add.bitmapText(game.world.centerX, 130, 'font', 'Code and Sound by Cudabear. Art by Melda Silas.', 20);
        text.creatorText.anchor.setTo(0.5);

        this.instructionLink = game.add.sprite(this.game.width - 128 - 20, 175 + 2*128, 'level');
        this.instructionText = game.add.bitmapText(this.instructionLink.x + this.instructionLink.width/2,
         this.instructionLink.y + this.instructionLink.height/2, 'font', 'Help', 14);
        this.instructionText.anchor.setTo(0.5);
        this.instructionLink.inputEnabled = true;
        this.instructionLink.events.onInputDown.add(function(){
            game.state.start('InstructionState');
        }, this);

        if(!Config.unlockedLevels){
            Config.unlockedLevels = [];
            for(var key in game.cache._tilemaps){
                Config.unlockedLevels.push({'key': key, 'unlocked': false});
            }
        }

        Config.unlockedLevels[0].unlocked = true;

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
            var level = game.add.sprite(160+(this.levels.length%5)*128, 175 + Math.floor(this.levels.length/5)*128, 'level');
            level.titleText = game.add.bitmapText(level.x + level.width/2, level.y + level.height/2, 'font', key, 14);
            level.titleText.anchor.setTo(0.5);
            level.inputEnabled = true;
            level.levelKey = key;
            var unlocked = this.isLevelUnlocked(key);

            if(unlocked){
                level.events.onInputDown.add(function(){
                    Config.currentLevel = this.levelKey;
                    game.state.start('MainState');
                }, level)
            }else{
                level.titleText.alpha = 0.2;
                level.titleText.setText("???");
            }
            
            this.levels.push(level);


        }
    },

    isLevelUnlocked: function(key){
        var retVal = false;
        Config.unlockedLevels.forEach(function(level){
            if(level.key == key && level.unlocked == true){
                retVal = true;
            }
        }, this);

        return retVal;
    }
}