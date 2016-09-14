    $.ajax({
      url: 'https://api.meetup.com/find/groups',
      data: {
        key: '106175216e3c4ad233449412e3542b',
        location: '',
        text: 'javascript',
        upcoming_events: true,
        radius: 20
      },
      dataType: 'jsonp',
      type: 'GET',
      success: function(data){
        console.log(data);
      },
      error: function(error){
        console.log(error);
      }
    });

 //  var locations = [
 //    {name: 'Red', lat: 40.7608, lng: -111.8910},
 //    {name: 'Green', lat: 40.9608, lng: -111.8910},
 //    {name: 'Blue', lat: 40.5608, lng: -111.8910},
 //  ]



 // var map;
 //  function initMap() {
 //    map = new google.maps.Map(document.getElementById('map'), {
 //      center: {lat: 41.7608, lng: -111.8910},
 //      zoom: 8
 //    });
 //    console.log(map);
 //     var marker = new google.maps.Marker({
 //      position: {lat: 40.7608, lng: -112.0910},
 //      map: map,
 //      title: 'Salt Lake'
 //    });
 //     // if (navigator.geolocation) {
 //     //      navigator.geolocation.getCurrentPosition(function(position) {
 //     //        var pos = {
 //     //          lat: position.coords.latitude,
 //     //          lng: position.coords.longitude
 //     //        };

 //     //        infoWindow.setPosition(pos);
 //     //        infoWindow.setContent('Location found.');
 //     //        map.setCenter(pos);
 //     //      }, function() {
 //     //        handleLocationError(true, infoWindow, map.getCenter());
 //     //      });
 //     //    } else {
 //     //      // Browser doesn't support Geolocation
 //     //      handleLocationError(false, infoWindow, map.getCenter());
 //     //    }
 //     for(var i in locations){
 //      var marker = new google.maps.Marker(
 //        {
 //          position: {lat: locations[i].lat, lng: locations[i].lng},
 //          map: map,
 //          title: locations[i].name,
 //          clickable: true
 //        }
 //      );
 //      marker.info = new google.maps.InfoWindow({
 //        content: locations[i].name
 //      });
 //      google.maps.event.addListener(marker, 'click', function() {
 //        var marker_map = this.getMap();
 //        this.info.open(map, this);
 //      });
 //     };
 //  }
 //  google.maps.event.addDomListener(window, 'load', initMap);
 //  function centerMap(){
    
 //  }
 //  $('button').click(function(){
 //    console.log(map);
 //    map.setCenter({lat: 40.7608, lng: -112.0910})
 //  })

 var map;
function initialize(){
  var centerButton = document.getElementById('center')
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(41.7608,-111.8910),//Setting Initial Position
    zoom: 10
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  $('#center').click(function(){
    console.log(map);
    map.setCenter({lat: 48.1293954, lng: -112.0910})
  })

  if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }

function newLocation(newLat,newLng){
    console.log('clicked')
    map.setCenter({
      lat : newLat,
      lng : newLng
    });
  }


  