function qbank() {}
qbank.getContextRootPath = function() {
	var currPath = location.pathname;
	console.log(currPath);

	var end = currPath.indexOf('/', 1);
	return currPath.substring(0, end);
}
qbank.contextRoot = qbank.getContextRootPath();

$(document).ready(function(){
	
	$("#content1").css({display:""});
	$("#content2").css({display:"none"});
	$("#content3").css({display:"none"});
	
	$('.nextBtn1').on('click',function(){
		$("#content1").css({display:"none"});
		$("#content2").css({display:""});
		$("#content3").css({display:"none"});
		
	});
	
	$('.nextBtn2').on('click',function(){
		$("#content1").css({display:"none"});
		$("#content2").css({display:"none"});
		$("#content3").css({display:""});
		
	});
	
	$('#nextBtn3').on('click',function(){
		$("#content1").css({display:""});
		$("#content2").css({display:"none"});
		$("#content3").css({display:"none"});
	});
});



