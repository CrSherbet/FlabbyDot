var PillarPair = cc.Node.extend({
    ctor: function() {
	this._super();
	this.topPillar = cc.Sprite.create( 'res/images/pillar-top.png' );
	this.topPillar.setAnchorPoint( new cc.Point( 0.5, 0 ) );
	this.topPillar.setPosition( new cc.Point( 0, 110 ) );
	this.addChild( this.topPillar );
 
	this.bottomPillar = cc.Sprite.create( 'res/images/pillar-bottom.png' );
	this.bottomPillar.setAnchorPoint( new cc.Point( 0.5, 1 ) );
	this.bottomPillar.setPosition( new cc.Point( 0, -110 ) );
	this.addChild( this.bottomPillar );
  
    },
    
    update: function( dt ) {
        var pos = this.getPosition();
        this.setPositionX( this.getPositionX() - 5 );
        
        if (pos.x <= -25){
             this.setPosition( new cc.Point( 480 , this.randomPositionY()) );
        }
        
    },
    
    hit: function(player){
        var playerPos = player.getPosition();
        var myPos = this.getPosition();
        return checkPlayerPillarCollision( playerPos.x , playerPos.y , myPos.x , myPos.y );
    },
    stop: function(){
        this.start =false;
    },
    randomPositionY: function(){
        return 110+ (Math.random()*650) ;
    }
    
});