$(document).ready(function(){
  var search = function(userInput, location) {
    var searchValue = userInput || 'javascript';
    var locationVal = location || '';
 
    $.ajax({
      url: 'https://api.meetup.com/find/groups',
      data: {
        key: '106175216e3c4ad233449412e3542b',
        location: locationVal,
        text: searchValue,
        upcoming_events: true,
        radius: 20
      },
      dataType: 'jsonp',
      type: 'GET',
      success: function(data){
        console.log(data);
        initMap(data.data, locationVal);
      },
      error: function(error){
        console.log(error);
      }
    });
  }

    function initMap(data, location) {
      var geocoder = new google.maps.Geocoder();
      var meetups = [
        {name: 'Red', lat: 40.7608, lng: -111.8910},
        {name: 'Green', lat: 40.9608, lng: -111.8910},
        {name: 'Blue', lat: 40.5608, lng: -111.8910},
      ]
      meetups = data;
      // console.log(meetups[0].lat);
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7608, lng: -111.8910},
        zoom: 9
      });
      var address = location;
      geocoder.geocode({
        'address': address
      }, function(results, status) {
        if(status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
      } else {
        console.log('Error reason: ' + status);
      }
      })
       
   for (var i in meetups) {
    var marker = new google.maps.Marker({
        position: {lat: meetups[i].lat, lng: meetups[i].lon},
        map: map,
        title: meetups[i].name,
        clickable: true
      }
    );
      marker.info = new google.maps.InfoWindow({
        content: '<h3>' + meetups[i].name + '</h3>' +
        '<p>' + meetups[i].description + '</p>' +
        '<div><a href="' + meetups[i].link + '">' + meetups[i].link + '</div>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        var marker_map = this.getMap();
        this.info.open(map, this);
      });
     };
    }

  $('form').submit(function(event) {
    event.preventDefault();
    console.log('Submitted')
    var input = $('#search-term').val();
    var location = $('#location').val();
    search(input, location);
  });
  search();
});