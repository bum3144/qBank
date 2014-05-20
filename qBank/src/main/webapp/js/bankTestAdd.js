
  $(function() {
    $( "ul.droptrue" ).sortable({
      connectWith: "ul"
    });
 
    $( "ul.dropfalse" ).sortable({
      connectWith: "ul",
      dropOnEmpty: false
    });
 
    $( "#sortable1, #sortable2, #sortable3" ).disableSelection();
  });


  $(function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  });
  $(function() {
    $( "#datepicker2" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  });
  
  $(".test1").mouseover(function(){
	  $( this ).css("background", "#EEE");
  });  
  $(".test1").mouseout(function(){
	  $( this ).css("background", "#FFF");
  }); 

