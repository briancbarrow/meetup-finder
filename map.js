const $ = require('jquery');

  function initMap(data, location) {
    const geocoder = new google.maps.Geocoder();
    let meetups = [
      {name: 'Red', lat: 40.7608, lng: -111.8910},
      {name: 'Green', lat: 40.9608, lng: -111.8910},
      {name: 'Blue', lat: 40.5608, lng: -111.8910},
    ]
    meetups = data;
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7608, lng: -111.8910},
      zoom: 9
    });
    let address = location;
    geocoder.geocode({
      'address': address
    }, function(results, status) {
      if(status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
    } else {
      console.log('Error reason: ' + status);
    }
    })
    const infowindow = new google.maps.InfoWindow();
    for (let i in meetups) {
      let marker = new google.maps.Marker({
        position: {lat: meetups[i].lat, lng: meetups[i].lon},
        map: map,
        title: meetups[i].name,
        clickable: true,
        info: ''
      });
      marker.info = '<div style="font-family: Play, sans-serif"><h3 style="font-family: Play, sans-serif">' + meetups[i].name + '</h3>' +
        '<p style="font-family: Play, sans-serif">' + meetups[i].description + '</p>' +
        '<div><a href="' + meetups[i].link + '">' + meetups[i].link + '</div></div>';
      google.maps.event.addListener(marker, 'click', function() {
        let marker_map = this.getMap();
        infowindow.setContent(this.info)
        infowindow.open(map, this);
      });        
      $('#content').append(
        '<div class="meetup"><h3>' + meetups[i].name + '</h3>' +
        '<p>' + meetups[i].description + '</p>' +
        '<div><a href="' + meetups[i].link + '">' + meetups[i].link + '</div></div>'
      );
    };
  };

module.exports = initMap;