// Bookmarklet to fill out form fields from url query parameters
//
// Based on https://lightignite.com/help-your-customers-fill-out-web-forms-with-url-query-strings/
//
// Author: Gavin Carr <gavin@openfusion.com.au>

(function () {

  // Check that jQuery is available
  if (typeof jQuery=='undefined') {
    script = document.createElement('script');
    script.src = '/ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js';
    script.onload=fill_form_from_url;
    document.body.appendChild(script);
  } 
  else {
    fill_form_from_url();
  }
  
  // Grab the entire query string
  function fill_form_from_url() {
    var query = document.location.search.replace('?','');
    
//  console.log(query);

    // Extract field/value pairs
    query = query.split('&');
    
    // Process each parameter
    for (var i = 0; i < query.length; i++) {
    
      // Split the field/value pair into an array
      var field = query[i].split("=");
      
      // Set the input field with name field[0] with value field[1]
      jQuery("input[name='" + field[0] + "'], select[name='" + field[0] + "']").val(field[1]);
    }
  }
})();
