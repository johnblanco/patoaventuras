var Map = function(mapData){
  this.mapData = mapData;

  this.render = function(cameraPosition){
    var sWidth=32;
    var sHeight=32;
    var dx=0;
    var dy=0;
    var dWidth=32;
    var dHeight=32;
    var sourcePosition;

    var cameraTiles = this.cameraTiles(cameraPosition);

    for(var layerIndex=0;layerIndex<3;layerIndex++){
      dx=0;
      dy=0;
      for(var i=0;i<15;i++){
        for(var j=0;j<20;j++){
          sourcePosition = this.tilePositionFromIndex(cameraTiles[layerIndex][i][j]);
          ctx.drawImage(tileset,sourcePosition.x,sourcePosition.y,sWidth,sHeight,dx,dy,dWidth,dHeight);
          dx=dx+32;
        }
        dx=0;
        dy=dy+32;
      }
    }
  };

  this.cameraTiles = function(cameraPosition){
    //obtengo los cuadrados del mapa que corresponden a la posicion de la camara
    //y los coloco en una matriz de 20x15
    var cameraTiles = [[[]]];
    var tileIndex= 0;
    var tileData;

    for(var layerIndex=0;layerIndex<3;layerIndex++){
      cameraTiles[layerIndex]=[];
      for(var i=0;i<15;i++){
        cameraTiles[layerIndex][i]=[];
        for(var j=0;j<20;j++){
          tileData = this.mapData["layers"][layerIndex]["data"][tileIndex];
          cameraTiles[layerIndex][i][j] = tileData;
          tileIndex++;
        }
      }
    }
    return cameraTiles;
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