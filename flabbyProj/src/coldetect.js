var checkPlayerPillarCollision = function( playerX, playerY, pillarX, pillarY ) {
    if ( playerX+22 >= pillarX -25 &&  playerX-22 <= pillarX + 25 ){
        if( playerY+22 > pillarY + 110 || playerY-22 < pillarY - 110){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};