function initMap() {
    var myLatlng = {lat: 40.641368, lng: -73.570557};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatlng
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'What Was Once Home...'
    });

    map.addListener('center_changed', function() {
        window.setTimeout(function() {
        map.panTo(marker.getPosition());
        }, 3000);
    });

    marker.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
    });
}