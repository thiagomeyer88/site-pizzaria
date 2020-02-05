function initMap(){
    let local = {lat:-19.918,lng:-43.939};
    let mapa = new google.maps.Map(document.querySelector('#mapa'),{zoom: 15, center: local});
}

let marcador = new google.maps.Marker({
    position: local,
    map: mapa
});