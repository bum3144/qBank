
/*function checkAll(){
	alert($("#check_all").is(":checked"));
	if ($("#check_all").is(":checked")) {	
		$("input[name=mycheck]:checkbox").attr("checked", true);
	}else{
        $("input[name=mycheck]:checkbox").attr("checked", false);		
	}
}*/

$("#check_all").click(function(){
	if ($("#check_all").is(":checked")) {	
		$("input[name=mycheck]:checkbox").attr("checked", true);
	}else{
        $("input[name=mycheck]:checkbox").attr("checked", false);		
	}
});
