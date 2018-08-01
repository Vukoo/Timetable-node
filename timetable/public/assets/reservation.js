$(document).ready(function(){

    $('form').on('submit', function(){
  
        var firstName = $('form input[name=firstName]');
        var lastName = $('form input[name=lastName]');
        var phone = $('form input[name=phone]');

        var todo = { firstName: firstName.val(), lastName: lastName.val(), phone: phone.val()};
console.log(todo);
        $.ajax({
          type: 'POST',
          url: '/reservationController',
          data: todo,
          success: function(data){
            //do something with the data via front-end framework
            //console.log(time.val());

            location.reload();
          }
        });
  
        return false;
  
    });
  
  });
  