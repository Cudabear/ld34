MainState = function(){ }

MainState.prototype = {
    currentLevel: null,
    backButton: null,
    RcoolDown: 100,

    effects: [],
    backdrop: null,
    preload: function(){
        console.log('preload main state');
    },

    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 750;
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


        this.currentLevel = new Level(Config.currentLevel, this);

        this.backbutton = game.add.sprite(10, game.height - 64, 'back');
        this.backbutton.inputEnabled = true;
        this.backbutton.events.onInputDown.add(function(){ game.state.start('SelectState');})
    },

    update: function(){
        this.currentLevel.update(this);

        if(this.RcoolDown > 0){
            this.RcoolDown--;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.R) && this.RcoolDown == 0){
            this.restartLevel();
            this.RcoolDown = 100;
        }

        this.effects.forEach(function(effect){
            effect.x -= effect.velocity;

            if(effect.x < -200){
                effect.y = Math.random()*game.height/2;
                effect.velocity = Math.random()*2;
                effect.x = game.width + 200;
            }
        }, this);

        if(this.backButton){
            this.backButton.bringToTop();
        }else{
            this.backbutton = game.add.sprite(10, game.height - 64, 'back');
            this.backbutton.inputEnabled = true;
            this.backbutton.events.onInputDown.add(function(){ game.state.start('SelectState');})
        }
    },

    render: function(){
        this.currentLevel.render();
    },

    gameOver: function(){
        this.restartLevel();
    },

    nextLevel: function(){
        var grabNext = false;
        var tileMapKey = Config.currentLevel;
        var index = 0;
        for(var key in game.cache._tilemaps){
            if(grabNext){
                tileMapKey = key;
                break;
            }
            if(Config.currentLevel == key){
                grabNext = true;
            }
            index++;
        }

        if(tileMapKey != Config.currentLevel){
            this.currentLevel.destroy();
            EventTracking.logEvent('beat-level', 'Level: '+currentLevelId);
            this.currentLevel = new Level(tileMapKey, this);
            Config.currentLevel = tileMapKey;
            this.currentLevelIndex++;
            Config.unlockedLevels[index].unlocked = true;
        }else{
            game.state.start('SelectState');
            EventTracking.logEvent('beat-game', 'retries: '+Config.retries);
        }
    },

    restartLevel: function(){
        this.currentLevel.destroy();
        this.currentLevel = new Level(this.currentLevel.tileMapId, this);
        Config.retries++;
        EventTracking.logEvent('restart-level', 'Level: '+currentLevelId);
    }
}