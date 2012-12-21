var features = []
 for (var i = 0; i < geoJSONData.features.length; i++) {
    var entry =  geoJSONData.features[i] 
    var color = ""
    switch(entry.properties.building_use) {
		case "recreationalfacilities":
		      color = "rgb(177,32,15)";
		      break;
		case "underconstruction":
		      color = "rgba(20,20,20,0.3)";
		      break;
		case "serviceactivity":
		      color = "rgb(229,219,130)";
		      break;
		case "officeuse":
		      color = "rgb(52,46,58)";
		      break;
		case "manufacturingandprocessingactivity":
		      color = "rgb(26,19,52";
		      break;
		case "openspace":
		      color = "rgb(177,32,15)";
		      break;
		case "miscellaneous":
		      color = "rgba(20,20,20,0.3)";
		      break;
		case "commercialactivity":
		      color = "rgb(52,46,58)";
		      break;
		case "noinformation":
		      color = "rgba(20,20,20,0.3)";
		      break;
		case "transport&communication":
		      color = "rgb(187,102,34)";
		      break;
		case "governmentalservices":
		      color = "rgb(229,219,130)";
		      break;
		case "residential":
		      color = "rgba(187,153,68,.7)";
		      break;
		case "mixeduse":
		      color = "rgba(20,20,20,0.3)";
		      break;
		case "uc":
		      color = "rgba(20,20,20,0.3)";
		      break;
		case "noinfo":
		      color = "rgba(20,20,20,0.3)";
		      break;
		case "communityservice":
		      color = "rgb(177,32,15)";
		      break;
		case "nongovernmentservices":
		      color = "rgb(229,219,130)";
		      break;
		case "restrictedarea":
		      color = "rgb(255,0,0)";
		      break;
		case "education&research":
		      color = "rgb(21,37,45)";
		case "agriculture":
		      color = "rgb(118,135,102)";
		      break;
		}
		var feature = {
			"type": "Feature", 
			"geometry": {
				type: 'Polygon',
				coordinates: entry.geometry.coordinates
			},
			"properties": {
				"color": color,
				"height": entry.properties.height,
			}
		};
	features.push(feature)
		}
	var Buildings = 	{
		"type": "FeatureCollection",

		"features": [features]
	};
var map = new L.Map('map').setView([23.87666, 90.40297], 18);
new L.TileLayer(
   'http://{s}.tiles.mapbox.com/v3/gfdrr.map-znaz7pyk/{z}/{x}/{y}.png',
   { attribution: 'Map tiles &copy; <a href="http://mapbox.com">MapBox</a>', maxZoom: 20 }
).addTo(map);
 var hash = new L.Hash(map);
new L.BuildingsLayer().addTo(map).geoJSON(Buildings);
