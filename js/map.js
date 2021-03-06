Map = function(mapData){
  this.mapData = mapData;
  this.mapSize = new Vector(40,100);
  this.viewSize = new Vector(20,15);
  this.tileSize = 32;
  this.tilesPerRow=4; //cantidad de cuadrados por fila en el tileset

  this.draw= function(cameraPosition){
    background = this.layerTiles(cameraPosition, 0);
    objects = this.layerTiles(cameraPosition, 1);

    //TODO: por que no esta dibujando una cosa sobre la otra?

    this.drawLayer(background);
    this.drawLayer(objects);
  };

  this.drawLayer = function(tiles){
    dx=0;
    dy=0;
    for(i=0;i<this.viewSize.y;i++){
      for(j=0;j<this.viewSize.x;j++){
        sourcePosition = this.tilePositionFromIndex(tiles[i][j]);
        if(tiles[i][j] != 0){
          ctx.drawImage(tileset,sourcePosition.x,sourcePosition.y,this.tileSize,this.tileSize,dx,dy,this.tileSize,this.tileSize);
        }
        dx=dx+this.tileSize;
      }
      dx=0;
      dy=dy+this.tileSize;
    }
  };

  this.layerTiles = function(cameraPosition, layer){
    tiles = [[]];

    tileIndex= this.indexFromTilePosition(cameraPosition);

    for(i=0;i<this.viewSize.y;i++){
      tiles[i]=[];
      for(j=0;j<this.viewSize.x;j++){
        tiles[i][j] = this.mapData["layers"][layer]["data"][tileIndex];
        tileIndex++;
      }
      tileIndex+=this.viewSize.x;
    }
    return tiles;
  };
  
  this.indexFromTilePosition = function(position){
    return position.y * this.mapSize.x + position.x ;
  };

  this.tilePositionFromIndex = function(index){
    sourcePosition = new Vector(0,0);
    row = Math.floor((index-1)/this.tilesPerRow);
    column = ((index-1) % this.tilesPerRow); // puede ser 0,1,2,3

    sourcePosition.x = column * this.tileSize;
    sourcePosition.y = row * this.tileSize;

    return sourcePosition;
  };

};
