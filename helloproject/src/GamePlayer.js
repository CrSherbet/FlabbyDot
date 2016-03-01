var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 25, 180, 125, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.Player = new Player ();
        this.Player.setPosition( new cc.Point(240,360));
        this.addChild (this.Player);
        this.Player.scheduleUpdate();
        
        this.addKeyboardHandlers();
        
        
	return true;
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
        this.Player.jump();
    },
 
    onKeyUp: function( keyCode, event ) {
    }
});
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});