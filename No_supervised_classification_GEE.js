//Classificação não supervisionada
//Por: Eduardo Q Marques (eduardobio2009@gmail.com)
//Ecrito em JavaScript para Google Engine

//Escolher a imagem de satelite que vai ser utilizada
var img = ee.Image('LANDSAT/LC08/C01/T1_RT_TOA/LC08_227067_20170904');

//antes de rodar o script é preciso criar um vetor da area de interesse
var regiao = ee.Geometry.Polygon(geometry);

var treinamento = img.sample({
	region: geometry,
	scale:30,
	numPixels: 100,
	});

//O numero representa a quantidade de classes
var agrupamento = ee.Clusterer.wekaKMeans(15).train(treinamento);

var resultado = img.cluster(agrupamento);

Map.addLayer(img, {max:0.453, min: 0.050, bands: 'B6,B5,B4'}, 'OLI');
Map.addLayer(resultado.randomVisualizer(), {}, 'Agrupamento');