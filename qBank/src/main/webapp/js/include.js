function qbank() {}

qbank.getContextRootPath = function() {
	var currPath = location.pathname;
	console.log(currPath);

	var end = currPath.indexOf('/', 1);
	return currPath.substring(0, end);
}
qbank.contextRoot = qbank.getContextRootPath();

$(document).ready(function(){
	$('#btop').load(qbank.contextRoot + '/header.html');
	$('#bfooter').load(qbank.contextRoot + '/footer.html');


	$.getJSON(
			 '/qBank/getLoginUser.ajax',
			function(jsonObj) {
				var result = jsonObj.ajaxResult;
				if (result.status == "ok") {
					var user = result.data;
				  if(user != null){
					
			  $('#logoutTable').hide();
			  $('#loginTable').show();
			   $('#idSpan').text(user.uid + "님이 로그인하셨습니다");
				  }
				} else {
				//	alert("로그인 하지 않았습니다.");
					$('#loginTable').hide();
					$('#logoutTable').show();
				}
			});
	

});