function bit() {}

bit.getContextRootPath = function() {
	var currPath = location.pathname;
	var end = currPath.indexOf('/', 1);
	return currPath.substring(0, end);
}

bit.contextRoot = bit.getContextRootPath();


/*
** 폼
**
** <input type="text" numberonly="true" /> // 숫자만 입력 가능한 텍스트박스
**
** <input type="text" datetimeonly="true" /> // 숫자, 콜론(:), 하이픈(-)만 입력 가능한 텍스트박스
*/
$(function(){
	$(document).on("keyup", "input:text[numberOnly]", function() {$(this).val( $(this).val().replace(/[^0-9]/gi,"") );});
	$(document).on("keyup", "input:text[datetimeOnly]", function() {$(this).val( $(this).val().replace(/[^0-9:\-]/gi,"") );});
	$(document).on("keyup", "input:text[textOnly]",function() {$(this).val( $(this).val().replace( /[^ㄱ-ㅎㅏ-ㅣ가-힣A-za-z\s]/gi,"") );});
});


		$.getJSON(
		 '/qBank/getLoginUser.ajax',
		function(jsonObj) {
			var result = jsonObj.ajaxResult;
			if (result.status == "ok") {
			var user = result.data;
				
		   $('#logoutTable').hide();
		   $('#loginTable').show();
		   $('#idSpan').text(user.uid + "님이 로그인하셨습니다");
			  
			} else {
			//	alert("로그인 하지 않았습니다.");
				$('#loginTable').hide();
				$('#logoutTable').show();
			//	location.href = "/qBank/main2.html";
			}
		});



$('#logoutBtn').on('click', function(e){
	e.preventDefault();
 	console.log('uuuuu');
 	$.ajax({
			url: '/qBank/logout.ajax',
			success: location.href= '/qBank/main2.html'
				
 	});
	
 });
