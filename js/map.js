// kakao map    
var mapContainer = document.getElementById('map'), 
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), 
    level: 3 
  };  
  
var map = new kakao.maps.Map(mapContainer, mapOption); 
var geocoder = new kakao.maps.services.Geocoder();

geocoder.addressSearch('인천광역시 연수구 송도미래로 30', function(result, status) {
  if (status === kakao.maps.services.Status.OK) {

    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    var marker = new kakao.maps.Marker({
      map: map,
      position: coords
    });

    map.setCenter(coords);
  } 
}); 