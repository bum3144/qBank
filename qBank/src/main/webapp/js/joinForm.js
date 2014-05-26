function qbank() {}
qbank.getContextRootPath = function() {
	var currPath = location.pathname;
	console.log(currPath);

	var end = currPath.indexOf('/', 1);
	return currPath.substring(0, end);
}
qbank.contextRoot = qbank.getContextRootPath();

$(document).ready(function(){
	
	$('#joinForm').load(qbank.contextRoot + '/joinForm.html');
	$("#popup_content1").css({display:"none"});
	$("#popup_content2").css({display:"none"});
	$("#popup_content3").css({display:""});
	$('#selectBtn').on('click',function(){
		$("#popup_content3").css({display:""});
		
	});
//	
//	$.ajax('insert.ajax', {
//		type: 'POST',
//		dataType: 'json', /*서버에서 보내는 데이터의 형식 지정 */
//		data: { /* 서버쪽으로 보내는 데이터 */
//			uclass: $('#uclass').val(),
//			uid: $('#uid').val(),
//			password: $('#password').val(),
//			name: $('#name').val(),
//			sex: $('#sex').val(),
//			birth: $('#birth').val(),
//			tel: $('#tel').val(),
//			cell: $('#cell').val(),
//			email: $('#email').val(),
//			zipcode: $('#zipcode').val(),
//			addr1: $('#addr1').val(),
//			addr2: $('#addr2').val(),
//			
//			
//		},
//		success: function(jsonObj){
//			console.log(jsonObj);
//			var result = jsonObj.ajaxResult;
//			if (result.status == "ok" && result.data == "success") {
//				location.href="../main2.html";
//			} else {
//				alert('result status data 안맞아~~~');
//			}
//		},
//		error: function(xhr, status, errorThrown){
//			alert('회원가입 실행 중 오류 발생!');
//			console.log(status);
//			console.log(errorThrown);
//		}
//		
//	});
	
});



