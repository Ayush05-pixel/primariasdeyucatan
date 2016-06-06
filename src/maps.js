function dataLoader(map){
    return function loadJsonData(){
        var data = this.responseText;
        data = JSON.parse(data);
        for (var d of data){
            let marker = new google.maps.Marker({
                position: d.coords,
                map: map,
                title: d.id
            });
        }
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
