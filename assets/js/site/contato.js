function initialize() {
    var styles = [{
    /*stylers: [
      {saturation: -100}
    ]*/
    }];
    var styledMap = new google.maps.StyledMapType(styles,
    {
        name: "Arte Casas"
    });
    var myLatlng = new google.maps.LatLng(-29.908243, -51.036470);
    var mapOptions = {
        center: myLatlng,
        zoom: 17,
        disableDefaultUI: false,
        draggable: false,
        disableDoubleClickZoom: false,
        scrollwheel: false,
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false
    };
    var map = new google.maps.Map(document.getElementById("mapa"),mapOptions);
    window.haveMarker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: ROOT+'assets/img/site/common/img/icon_map.png'
    });
}

$(function(){
    initialize();
});