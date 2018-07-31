$(document).ready(function(){

    $('form').on('submit', function(){
  
        var massagetype = $('form input[name=massagetype]');
        var price = $('form input[name=price]');
        var time = $('form input[name=time]');

        var todo = { massagetype: massagetype.val(), price: price.val(), time: time.val()};
console.log(todo);
        $.ajax({
          type: 'POST',
          url: '/adminController',
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
  