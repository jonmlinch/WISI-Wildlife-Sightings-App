var marker;
var location;

function initMap(){
  var myLatlng = new google.maps.LatLng(48.4779,-120.1862);

  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatlng,
    zoom: 10
  });

  function loadMarkers(){
        console.log( 'HERE IS LOCATION DATA:', location)
        for(var i = 0; i < location.length; i++){
          var coordinate = location[i];
          var position = new google.maps.LatLng(coordinate[0], coordinate[1]);

          //Some code here to extend bounds if needed

          var marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            map: map,
            position: position
          }) // end marker creation

        } //end for loop
      } //end loadMarkers

    loadMarkers(); 
}
