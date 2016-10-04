const $ = require('jquery');
const initMap = require('./map.js');

var search = function(userInput, location) {
    let searchValue = userInput || 'javascript';
    let locationVal = location || '';
 
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
      success: function(data) {
        console.log(data);
        initMap(data.data, locationVal);
      },
      error: function(error) {
        console.log(error);
      }
    });
  };

module.exports = search;