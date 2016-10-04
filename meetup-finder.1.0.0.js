var $ = require('jquery');
var search = require('./search');

$(document).ready(function(){
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });


  $('form').submit(function(event) {
    event.preventDefault();
    $('#content').html('<h1 class="content">List of Meetups</h1>');
    console.log('Submitted')
    var input = $('#search-term').val();
    var location = $('#location').val();
    search(input, location);
  });
  search();
});

