var view = new ol.View2D({
  center: [0, 0],
  zoom: 2
});

var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  tileOptions: {crossOriginKeyword: null},
  target: 'map',
  view: view
});