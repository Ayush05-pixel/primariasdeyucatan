function dataLoader(map){
    return function loadJsonData(){
        var data = this.responseText;
        data = JSON.parse(data);
        var heatPoints = [];
        for (var d of data){
            let point = new google.maps.LatLng(d.coords);
            heatPoints.push(point);
        }


        var pointArray = new google.maps.MVCArray(heatPoints);

        var heatMap = new google.maps.visualization.HeatmapLayer({
            data: pointArray,
            radius: 50
        });

        heatMap.setMap(map);
    };
}

function loadSchools(map){
    var loader = dataLoader(map);
    var req = new XMLHttpRequest();
    req.addEventListener('load', loader);
    req.open('GET', 'data/schools_coords.json');
    req.send();
}

function initMap(){
    var initCoords = {lat:21.047400,  lng:-89.644600};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: initCoords
    });

    loadSchools(map);
}

global.initMap = initMap;
