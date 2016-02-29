var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 25, 100, 125, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
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