var Map = function(mapData){
  this.mapData = mapData;

  this.render = function(cameraPosition){
    var sx=0;
    var sy=0;
    var sWidth=32;
    var sHeight=32;
    var dx=0;
    var dy=0;
    var dWidth=32;
    var dHeight=32;
    var sourcePosition;

    for(var i=0;i<15;i++){
      for(var j=0;j<20;j++){
        sourcePosition = this.tilePositionFromIndex(349);
        ctx.drawImage(tileset,sourcePosition.x,sourcePosition.y,sWidth,sHeight,dx,dy,dWidth,dHeight);
        dx=dx+32;
      }
      dx=0;
      dy=dy+32;
    }

  };

  this.cameraTiles = function(cameraPosition){
    //obtengo los cuadrados del mapa que corresponden a la posicion de la camara
    //y los coloco en una matriz de 20x15
  };

  this.tilePositionFromIndex = function(index){
    var sourcePosition = new Vector(0,0);
    var row = Math.floor(index/30);
    var column = (index % 30) -1;

    sourcePosition.x = column * 32;
    sourcePosition.y = row * 32;

    return sourcePosition;
  };

};