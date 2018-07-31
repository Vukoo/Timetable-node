$(document).ready(function(){

    $('form').on('submit', function(){
  
        var item = $('form input');
        var userz = $('form input[name=users]');
       // console.log(item.val());
        var todo = {item: item.val(), users: userz.val()};

  
        $.ajax({
          type: 'POST',
          url: '/login',
          data: todo,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
  
        return false;
  
    });
  
  });
  