$(document).ready(function(){
	
	
	/*유저 정보 불러오기*/
	$.getJSON(
			qbank.contextRoot + 
				'/join/detail.ajax',
			function(jsonObj) {
				var result = jsonObj.ajaxResult;
				var data = result.data;
				if (result.status == "ok") {
					$('#detailUid').val(data.uid);
					$('#detailClass').val(data.uclass);
					$('#detailName').val(data.uname);
					$('#detailPassword').val(data.upass);
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
		
		if($('#detailPassword').val() != $('#detailPassword2').val()){
			alert("비밀번호를 확인해주세요");
		}else{
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
		}
	});
	
	/* 업데이트 폼 체크 */
	
	var array = [
		         {id : 'detailPassword', id2: 'detailPassMsg', dataId: 'textChk', type : 'password' , length : 6 ,text : '6~10글자 사이입력', text2: '사용가능 비밀번호', maxlength : 10},
		         {id : 'detailPassword2',id2: 'detailPassCheckMsg', type : 'passwordCheck', dataId: 'textChk' , length : 6 ,text : '동일하지 않은 비밀번호',text2 : '동일한 비밀번호', maxlength : 10},
		         {id : 'detailEmail',id2: 'detailEmailMsg', type : 'email', dataId: 'textChk',text : '잘못된 이메일 형식',text2 : '등록가능한 이메일',text3: '중복된 이메일'},
		         {id : 'detailTel',id2: 'detailTelMsg', type : 'tel', dataId: 'textChk', length : 9 , text : '잘못된 번호', text2 : '등록가능한 번호', maxlength : 13},
		         {id : 'detailCell', id2: 'detailCellMsg', type : 'tel', dataId: 'textChk', length : 9 ,text : '잘못된 번호', text2 : '등록가능한 번호', maxlength : 13},
	        	];
	
	$('input').keyup(function(){	
		var thisId = $(this).attr("id");
		var thisVal = $(this).val();	
		var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/; // 전화번호체크
		var regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; // 이메일체크

		$.each(array,function(key,item){
		  if(thisId == item.id){
			  var msgBox = $('#'+item.id2);
			  
			  switch(item.type){
			  case 'password' :
				  if(thisVal.length < item.length || thisVal.length > item.maxlength){
					 $('#' + item.id2).css({'color':'red'});
					 msgBox.text(item.text);
					 $("#detailPassword2").attr("disabled",true);
				}else{
					msgBox.empty();
					$('#' + item.id2).css({'color':'black'});
					msgBox.text(item.text2);
					$("#detailPassword2").attr("disabled",false);
				}
				  break;
			  
			  case 'passwordCheck' :
				  if (($("#detailPassword").val()) != ($("#detailPassword2").val())) {
					  $('#' + item.id2).css({'color':'red'});
					  msgBox.text(item.text);
				   }else{
					   msgBox.empty();
					   $('#' + item.id2).css({'color':'black'});
					   msgBox.text(item.text2);
				   }
		          break;
			  case 'email' :
				   if (!regex.test(thisVal) ) {
					   $('#' + item.id2).css({'color':'red'});
						  msgBox.text(item.text);
				  }else{
					  msgBox.empty();
					   $('#' + item.id2).css({'color':'black'});
					   msgBox.text(item.text2);
				  }
		         break;
		         
			  case 'tel' :
				  if (!regExp.test(thisVal)) {
					  $('#' + item.id2).css({'color':'red'});
					  msgBox.text(item.text);
					 }else if(regExp.test(thisVal)){
						 $('#' + item.id2).css({'color':'black'});
						   msgBox.text(item.text2);
					 }
				break;
			  }
		  }
		  
		});
		
	});
	
	
	// 패스워드확인창 새로고침
	$('#detailPassword').keyup(function(){
		$('#detailPassword2').val("");
	});
	// 패스워드확인창 새로고침
	
});
