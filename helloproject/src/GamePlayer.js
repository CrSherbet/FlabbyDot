var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 25, 180, 125, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.Player = new Player ();
        this.Player.setPosition( new cc.Point(240,360));
        this.addChild (this.Player);
        this.Player.scheduleUpdate();
	return true;
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