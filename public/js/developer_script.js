$(function() {

    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });
  
    $('form.login:first').on('submit', function(e){
      e.preventDefault(); 
  
      var $this = $(this);
  
      $.ajax({
          type: $this.attr('method'),
          url: $this.attr('action'),
          data: $this.serializeArray(),
          dataType: $this.data('type'),
          success: function (response) {
             if(response.success) {
               location.reload();
             }
          },
          error: function (jqXHR) {
            var response = $.parseJSON(jqXHR.responseText);
            if(response.message) {
              alert(response.message);
            }
          }
      });
    });
  
  });