$(document).ready(function(){
	// 화면 로딩이 완료되면, 로그인 버튼의 리스너를 등록한다.
	$('#btnLogin').on('click', function(event){
		event.preventDefault();
		if ($('#uid').val().length == 0 ||
				$('#password').val().length == 0) {
			$('#loginMassege')
			.text('아이디와 암호는 필수 항목입니다')
			.css('color','red');
			
			setTimeout(function() {
				$('#loginMassege')
				.text('로그인을 하시면 많은 정보를 제공 받으실 수 있습니다.')
				.css('color','white');
		      }, 3000 );
	      		
			return;			
		}
		
		$.ajax('header.ajax', {
			type: 'POST',
			dataType: 'json', /*서버에서 보내는 데이터의 형식 지정 */
			data: { /* 서버쪽으로 보내는 데이터 */
				uid: $('#uid').val(),
				password: $('#password').val(),
				saveUid: ($('#saveUid:checked').length > 0) ? 
						'true':'false'
			},
			success: function(jsonObj){
				var result = jsonObj.ajaxResult;
				var user = result.data;
				if (result.status == "ok" && result.data == "success") {
					location.href="/qBank/main2.html";
				} else {
					$('#loginMassege')
					.text(' 아이디와 암호를 확인해 주세요! ')
						.css({
							'color':'red'
							});
					
					setTimeout(function() {
						$('#loginMassege')
						.text('로그인을 하시면 많은 정보를 제공 받으실 수 있습니다.')
						.css({
							'color':'white'
							});
				      }, 3000 );
			      	
					/*alert('아이디 또는 암호가 맞지 않습니다.');*/
				}
			},
			error: function(xhr, status, errorThrown){
				alert('로그인 실행 중 오류 발생!');
				console.log(status);
				console.log(errorThrown);
			}
			
		});
		
		// 로그인 성공 후에 해야할 작업을 여기에 기술한다면,당신은 바보!
		//location.href="../subject/list.bit";
	});
});


















