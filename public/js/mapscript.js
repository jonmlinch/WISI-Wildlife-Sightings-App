var marker;

function initMap(){
  var myLatlng = new google.maps.LatLng(48.4779,-120.1862);

  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatlng,
    zoom: 10
  });

  marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    draggable:true,
    title:"Drag me!"
  });
}
