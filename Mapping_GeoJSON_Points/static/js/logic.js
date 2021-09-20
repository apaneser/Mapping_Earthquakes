// Add console.log to see if the code is working
console.log("working");

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([37.5, -122.5], 10)

// We create the tile layer that will be in the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//add our "greymap" tile layer tot he map
streets.addTo(map);

// Add GeoJSON data
let sanFranAirport =
{
    "type":"FeatureCollection", "features":[{
        "type":"Feature",
        "properties":{
            "id":"3469",
            "name":"San Francisco International Airport",
            "city": "San Francisco",
            "country": "United States",
            "faa":"SFO",
            "icao": "KSFO",
            "alt":"13",
            "tz-offset":"-8",
            "dst":"A",
            "tz": "America/Los_Angeles"},
        "geometry":{
            "type": "Point",
            "coordinates":[-122.375,37.61899948120117]
        }
    }]
};

//grabbing geoJSON data via pointToLayer
// L.geoJSON(sanFranAirport, {
//     // turn each feature into a marker on the map
//     pointToLayer: function(feature, latlng){
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h1>" + feature.properties.name + "</h1>" + "<h2>" + feature.properties.city + ", " + feature.properties.country + "</h2>");
//     }
// }).addTo(map);

//grabbing geoJSON data using onEachFeature
L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer){
        console.log(layer);
        layer.bindPopup("<h1>Airport Code: " + feature.properties.faa + "</h1><h2>Airport Name: " + feature.properties.name + "</h2>" );
    }
}).addTo(map);
