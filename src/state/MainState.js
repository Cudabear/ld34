MainState = function(){ }

MainState.prototype = {
    cat: null,
    currentLevel: null,

    preload: function(){
        console.log('preload main state');
    },

    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 350;


        //remove this line if not using lighting effects
        game.plugins.add(Phaser.Plugin.PhaserIlluminated);

        this.cat = new Cat(0, 0);
        this.currentLevel = new Level('test');

    },

    update: function(){
        this.cat.update(this.currentLevel);
        this.currentLevel.update(this.cat);
    },

    render: function(){

    }
}