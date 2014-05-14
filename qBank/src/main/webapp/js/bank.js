$(document).click(function(){
	if ($("#check_all").is(":checked")) {	
		$("input[name=mycheck]:checkbox").attr("checked", true);
	}else{
        $("input[name=mycheck]:checkbox").attr("checked", false);
		
	}
});
