$(document).ready(function() {
    let checkedAmenities = {};
  
    function updateAPIStatus() {
      $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
        if (data.status === 'OK') {
          $('#api_status').addClass('available');
        } else {
          $('#api_status').removeClass('available');
        }
      });
    }
  
    updateAPIStatus();
  
    $('.amenities input[type="checkbox"]').change(function() {
      const amenityId = $(this).data('id');
      const amenityName = $(this).data('name');
  
      if ($(this).is(':checked')) {
        checkedAmenities[amenityId] = amenityName;
      } else {
        delete checkedAmenities[amenityId];
      }
  
      const amenitiesList = Object.values(checkedAmenities).join(', ');
      $('.amenities h4').text(amenitiesList);
    });
  });
  