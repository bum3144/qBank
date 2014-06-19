$(document).ready(function(){
	
	
	/*유저 정보 불러오기*/
	$.getJSON(
			qbank.contextRoot + 
				'/join/detail.ajax',
			function(jsonObj) {
				console.log(jsonObj);
				var result = jsonObj.ajaxResult;
				var data = result.data;
				console.log(data.usex);
				if (result.status == "ok") {
					$('#detailUid').val(data.uid);
					$('#detailClass').val(data.uclass);
					$('#detailName').val(data.uname);
					$('#detailEmail').val(data.uemail);
					$('#detailTel').val(data.utel);
					$('#detailCell').val(data.ucell);
					var birth = data.ubirth.split('-');
					$('#detailYear').val(birth[0]);
					$('#detailMonth').val(birth[1]);
					$('#detailDay').val(birth[2]);
				

				  if(data.usex == "W"){
					  $('#detailSexW').attr('checked', true);
				  }else{
					  $('#detailSexM').attr('checked', true);
				  }
					
					
				} else {
					console.log('해당 시험지가 없습니다.');
				}
			});
	
	
	/*유저 정보 변경 */
	$('#updateBtn').click(function(){
		$.post(
				qbank.contextRoot + '/join/update.ajax'
				,{
					uid: $('#detailUid').val(),
					upass: $('#detailPassword').val(),
					uemail: $('#detailEmail').val(),
					utel: $('#detailTel').val(),
					ucell: $('#detailCell').val(),
					ubirth: $('#detailYear').val() + "-" + $('#detailMonth').val() + "-" + $('#detailDay').val()
					
				}
				,function(jsonObj) {
				   console.log(jsonObj);
				}
				,'json');
	});
	
	
	
	
	});
