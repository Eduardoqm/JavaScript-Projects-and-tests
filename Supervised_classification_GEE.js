\\Classificação supervisionada

var geometry: point (-55.67, -9.67)
var imageCollection: ImageCollection "USGS Landsat 8 Collection 1 Tier 1 and Real - Time data TOA Reflectance"
var filtro = imageCollection.filterBounds(geometry);
	.filterMetadata('CLOUD_COVER','LESS_THAN', 0.03);
var img = ee.Image('LANDSAT/LC08/C01/T1_RT_TOA/LC08_227067_20170904");

Map.addLayer(filtro, {bands:'B6, B5, B4'});