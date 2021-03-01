$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function(){
     $('#result').html('');
     $('#state').val('');
     var searchField = $('#search').val();
     var expression = new RegExp(searchField, "i");
     $.getJSON('aa.json', function(data) {
      $.each(data, function(key, value){
       if (value.name.search(expression) != -1 || value.link.search(expression) != -1)
       {
        $('#result').append('<a href="'+value.link+'"> <li class="list-group-item link-class">  <span class="text-muted">'+value.name+'</span></li> </a>');
       }
      });   
     });
    });
    
    $('#result').on('click', 'li', function() {
     var click_text = $(this).text().split('|');
     $('#search').val($.trim(click_text[0]));
     $("#result").html('');
    });
   });