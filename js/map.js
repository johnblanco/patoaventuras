Map = function(mapData){
  this.mapData = mapData;

  this.draw= function(cameraPosition){
    sWidth=32;
    sHeight=32;
    dx=0;
    dy=0;
    dWidth=32;
    dHeight=32;

    background = this.background(cameraPosition, 0);
    objects = this.background(cameraPosition, 1);

    this.drawLayer(objects);//TODO: por que no esta dibujando una cosa sobre la otra?
    this.drawLayer(background);//TODO: por que el layer de los objetos tiene lineas blancas?

  };

  this.drawLayer = function(tiles){
    for(i=0;i<15;i++){
      for(j=0;j<20;j++){
        sourcePosition = this.tilePositionFromIndex(tiles[i][j]);
        ctx.drawImage(tileset,sourcePosition.x,sourcePosition.y,sWidth,sHeight,dx,dy,dWidth,dHeight);
        dx=dx+32;
      }
      dx=0;
      dy=dy+32;
    }
  };

  this.background = function(cameraPosition, layer){
    //obtengo los cuadrados del mapa que corresponden a la posicion de la camara
    //y los coloco en una matriz de 20x15
    background = [[]];
    tileIndex= 0;

    background[layer]=[];
    for(i=0;i<15;i++){
      background[i]=[];
      for(j=0;j<20;j++){
        tileData = this.mapData["layers"][layer]["data"][tileIndex];
        background[i][j] = tileData;
        tileIndex++;
      }
    }
    return background;
  };

  this.tilePositionFromIndex = function(index){
    sourcePosition = new Vector(0,0);
    row = Math.floor(index/30);
    column = (index % 30) -1;

    sourcePosition.x = column * 32;
    sourcePosition.y = row * 32;

    return sourcePosition;
  };

};