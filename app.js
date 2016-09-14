// $(document).ready(function(){
//     $.ajax({
//       url: 'http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02',
//       // data: {
//       // },
//       dataType: 'jsonp',
//       type: 'GET',
//       success: function(data){
//         console.log(data);
//       },
//       error: function(error){
//         console.log(error);
//       }
//     });
//     $.getJSON('http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02',
//      function( response ) {
//       console.log(response);
//      })
// });

var locations = [
  {name: 'Red', lat: 40.7608, lng: -111.8910},
  {name: 'Green', lat: 40.9608, lng: -111.8910},
  {name: 'Blue', lat: 40.5608, lng: -111.8910},
]

 var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7608, lng: -111.8910},
          zoom: 8
        });
         var marker = new google.maps.Marker({
          position: {lat: 40.7608, lng: -112.0910},
          map: map,
          title: 'Salt Lake'
        });
         for(var i in locations){
          var marker = new google.maps.Marker(
            {
              position: {lat: locations[i].lat, lng: locations[i].lng},
              map: map,
              title: locations[i].name,
              clickable: true
            }
          );
          marker.info = new google.maps.InfoWindow({
            content: locations[i].name
          });
          google.maps.event.addListener(marker, 'click', function() {
            var marker_map = this.getMap();
            this.info.open(map, this);
          });
         };
      }