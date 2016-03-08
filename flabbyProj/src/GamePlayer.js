var GameLayer = cc.LayerColor.extend({
    init: function() {
        this.bg = new BG();
        this.addChild( this.bg ,2 );
        this.bg.setPosition( new cc.Point( screenWidth / 2, screenHeight / 2) );
        this.bg.scheduleUpdate();
        
        this.player = new Player();
        this.addChild( this.player, 3 );
        this.player.setPosition( new cc.Point( screenWidth / 2, screenHeight / 2 ) );
        this.player.scheduleUpdate();
        
        this.pillarPair = null ;
            
        this.addKeyboardHandlers();
        this.state = GameLayer.STATES.FRONT;
        this.scheduleUpdate();
        
	return true;
    },
    
    update: function( dt ) {
        if ( this.state == GameLayer.STATES.STARTED ) {
            this.checkHit(); 
        }
    },
    
    checkHit: function (){
        if(this.pillarPair.hit(this.player)){
             this.endGame();
        }
    },
    
    startGame: function(){
        this.state = GameLayer.STATES.STARTED;
        this.createPillarPair();
        this.player.start();
        this.player.jump();  
    },
    
    endGame: function(){
        this.player.stop();
        this.pillarPair.unscheduleUpdate();
        this.state = GameLayer.STATES.DEAD;
    },
    
    createPillarPair: function() {
        this.pillarPair = new PillarPair();
        this.pillarPair.setPosition( new cc.Point( screenWidth , screenHeight / 2  ) );
        this.addChild( this.pillarPair,2);
        this.pillarPair.scheduleUpdate();
    },
    
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    },
 
    onKeyDown: function( keyCode, event ) {
        if ( this.state == GameLayer.STATES.FRONT ) {
            this.startGame();
        }
        else if ( this.state == GameLayer.STATES.STARTED ) {
            this.player.jump();
        }
    },
 
    onKeyUp: function( keyCode, event ) {
    }
    
});

GameLayer.STATES = {
    FRONT: 1,
    STARTED: 2,
    DEAD : 3
};

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});