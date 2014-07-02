$(document).ready(function(){

	var regExpImg = /([^\s]+(?=\.(jpg|gif|png|JPG|GIF|PNG))\.\2)/; // jpg|gif|png 이미지만 사용
	var regExpMp3 = /([^\s]+(?=\.(mp3|MP3))\.\2)/; // mp3만 사용
	
	$('.col-sm-2').css('font-size','12px');
	if(!$('#select1, #select11').val()){
		$('#select2, #select3, #select22, #select33').hide();
	}
	/* 카테고리 선택박스 (수정/생성) 관련 시작 */
	$.ajax({
		type: "GET",
		url: qbank.contextRoot + '/selectcate/frist.ajax',
		dataType: 'json', 
		success: function (result) {
			var result = result.ajaxResult;
			if (result.status == 'ok') {
				//console.log('okokok');
				$.each(result.data, function(index, obj) {
					//console.log(result.data);
					$.each(obj, function(index, test) {
						$('#select1, #select11').append('<option value="' +test.parent+ '">' 
								+ test.name + '</option>');
					});
				});
			}	
		},
		error: function(errorThrown){
			console.log('1카테고리 박스 에러 : ' + errorThrown);
		}
	});
	
	$('#select1').change(function () {	
		optionRemove1();
		optionRemove2();
		($('#select1').val()) ? $('#select2').show() : $('#select2').hide()
		$('#select3').hide();
		$.ajax({
			type: "GET",
			url: qbank.contextRoot + '/selectcate/second.ajax?parent='+$('#select1').val(),
			dataType: 'json', 
			success: function (result) {
				var result = result.ajaxResult;
				if (result.status == 'ok') {
					$.each(result.data, function(index, obj) {
						$('#select2').append('<option value="">- 2차 선 택 -</option>');
						$.each(obj, function(index, test) {
							$('#select2').append('<option value="' +test.seq+ '">' 
									+ test.name + '</option>');
						});
					});
				}	
			},
			error: function(errorThrown){
				console.log('2카테고리 박스 에러 : ' + errorThrown);
			}
		});	
	});	
	$('#select2').change(function () {	
		optionRemove2();
		$('#select3').show();
		$.ajax({
			type: "GET",
			url: qbank.contextRoot + '/selectcate/third.ajax?parent=' 
					+ $('#select1').val() + '&seq=' + $('#select2').val(),
			dataType: 'json', 
			success: function (result) {
				var result = result.ajaxResult;
				if (result.status == 'ok') {
					$.each(result.data, function(index, obj) {
						$('#select3').append('<option value="">- 3차 선 택 -</option>');
						$.each(obj, function(index, test) {
							$('#select3').append('<option value="' +test.depth+ '">' 
									+ test.name + '</option>');
						});
					});
				}	
			},
			error: function(errorThrown){
				console.log('3카테고리 박스 에러 : ' + errorThrown);
			}
		});	
	});	
	$('#select11').change(function () {	
		optionRemove11();
		optionRemove22();
		($('#select11').val()) ? $('#select22').show() : $('#select22').hide()
		$('#select33').hide();
		$.ajax({
			type: "GET",
			url: qbank.contextRoot + '/selectcate/second.ajax?parent='+$('#select11').val(),
			dataType: 'json', 
			success: function (result) {
				var result = result.ajaxResult;
				if (result.status == 'ok') {
					$.each(result.data, function(index, obj) {
						$('#select22').append('<option value="">- 2차 선 택 -</option>');
						$.each(obj, function(index, test) {
							$('#select22').append('<option value="' +test.seq+ '">' 
									+ test.name + '</option>');
						});
					});
				}	
			},
			error: function(errorThrown){
				console.log('2카테고리 박스 에러 : ' + errorThrown);
			}
		});	
	});	
	
	$('#select22').change(function () {	
		optionRemove22();
		$('#select33').show();
		$.ajax({
			type: "GET",
			url: qbank.contextRoot + '/selectcate/third.ajax?parent=' 
					+ $('#select11').val() + '&seq=' + $('#select22').val(),
			dataType: 'json', 
			success: function (result) {
				var result = result.ajaxResult;
				if (result.status == 'ok') {
					$.each(result.data, function(index, obj) {
						$('#select33').append('<option value="">- 3차 선 택 -</option>');
						$.each(obj, function(index, test) {
							$('#select33').append('<option value="' +test.depth+ '">' 
									+ test.name + '</option>');
						});
					});
				}	
			},
			error: function(errorThrown){
				console.log('3카테고리 박스 에러 : ' + errorThrown);
			}
		});	
	});	

	function optionRemove1(){
		$("select[id='select2']").find('option').each(function() {
			$(this).remove();
		 });
	}
	function optionRemove2(){
		$("select[id='select3']").find('option').each(function() {
			$(this).remove();
		 });
	}	
	function optionRemove11(){
		$("select[id='select22']").find('option').each(function() {
			$(this).remove();
		 });
	}
	function optionRemove22(){
		$("select[id='select33']").find('option').each(function() {
			$(this).remove();
		 });
	}
	/* 카테고리 선택박스 (수정/생성) 관련 끝 */	
	
	
	
	
	// 카테고리 수정 입력창 보이기
	$('#choiceModify').on('click', function() {
		if(!$('#classCode').val()){
			dial();
			return false;
		}
		$('#choiceBox3, #finishBox2').hide('blind', 500);	
		$('#choiceBox2, #finishBox1').show('blind', 500);	
	});
	
	// 삭제 전 경고창 띄우기
	$('#choiceDelete').on('click', function() {
		if(!$('#classCode').val()){
			dial();
			return false;
		}
	    $( "#delete-confirm" ).dialog({
	      resizable: false,
	      height:200,
	      modal: true,
	      buttons: {
	        "삭제합니다": function() {
	          $( this ).dialog( "close" );
	          
	          var classData = $('#classCode').val().split("-");
	          var params = '?cname=' + $('#className').val();
	      //    if(classData[0]){ params += '&cparent=' + classData[0]; }
	      //    else if(classData[1]){ params += '&cseq=' + classData[1]; }
	      //    else if(classData[2]){ params += '&cseq=' + classData[2]; }
	          
      		$.getJSON(qbank.contextRoot + '/category/delete.ajax' + params,
			function(jsonObj) {
				var result = jsonObj.ajaxResult;
				if (result.status == "ok") {
					console.log('카테고리 삭제 ok');
					document.location.reload(true);	
					// 페이지 다시 로딩 -> 추후 비동기로 변경 예정!
				}
			});  
	        },
	        "취소": function() {
	          $( this ).dialog( "close" );
	        }
	      }
	    });
	});

	
	// 수정 전 경고창 띄우기
	$('#finishModify').on('click', function() {
	    $( "#modify-confirm" ).dialog({
	      resizable: false,
	      height:200,
	      modal: true,
	      buttons: {
	        "수정합니다": function() {
	          $( this ).dialog( "close" );
	          
	    		$.ajax(qbank.contextRoot + '/category/modify.ajax', {
	    			type: 'POST',
	    			dataType: 'json', /* 리턴 형식 */
	    			data: { /* 보내는 데이터 */
	    				code:		$('#cCode').val(),
	    				name:		$('#className1').val(),
	    				parent:		$('#select1').val(),
	    				seq:		$('#select2').val(),
	    				depth:		$('#select3').val(),
	    				useyn:		$('#classUse1').val(),
	    				classCode: 	$('#classCode').val()
	    			},
	    			success: function(jsonObj){
	    				var result = jsonObj.ajaxResult;
	    				if (result.status == "ok") {
	    					//console.log('카테고리 생성 완료!' + result);
	    					document.location.reload(true);
	    					// 페이지 다시 로딩 -> 추후 비동기로 변경 예정!
	    				} else {
	    					alert('카테고리 수정 실패!');
	    				}
	    			},
	    			error: function(xhr, status, errorThrown){
	    				alert('카테고리 수정 오류 발생!');
	    				console.log(status);
	    				console.log(errorThrown);
	    			}
	    		});	           
      		
      		
	        },
	        "취소": function() {
	          $( this ).dialog( "close" );
	        }
	      }
	    });
	});
	
	
	
	// 카테고리 생성 입력 창 보이기
	$('#choiceCreate').on('click', function() {
		$('#choiceBox2, #finishBox1').hide('blind', 500);	
		$('#choiceBox3, #finishBox2').show('blind', 500);	
	});	 
	
  // 수정/삭제 경고창
  function dial() {
    $( "#modify-message" ).dialog({
      modal: true,
      buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  }	

  // 카테고리 생성버튼 클릭
  $('#createBtn').on('click',function(){
	  if(!$('#className11').val()){
		  setTimeout(function() {
			 $('#createErr11')
			 	.text(' 이름을 입력해야 합니다.')
			 	.css({'font-size':'10pt','color':'red'});
				 $('#className11').css({
						'border-color':'#C40F33',
						'-webkit-box-shadow':'inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(228, 37, 76, 0.6)',
						'box-shadow':'inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(228, 37, 76, 0.6)'
				 });
			 
		  }, 500 );
	 }else{

	    $( "#create-confirm" ).dialog({
	      resizable: false,
	      height:200,
	      modal: true,
	      buttons: {
	        "생성합니다": function() {

	        	
	    		$.ajax(qbank.contextRoot + '/category/create.ajax', {
	    			type: 'POST',
	    			dataType: 'json', /* 리턴 형식 */
	    			data: { /* 보내는 데이터 */
	    				name:		$('#className11').val(),
	    			//	url:		$('#classUrl11').val(),
	    				parent:		$('#select11').val(),
	    				seq:		$('#select22').val(),
	    				depth:		$('#select33').val(),
	    				useyn:		$('#classUse11').val(),
	    				classCode: 	$('#classCode').val()
	    			},
	    			success: function(jsonObj){
	    				var result = jsonObj.ajaxResult;
	    				if (result.status == "ok") {
	    					//console.log('카테고리 생성 완료!' + result);
	    					document.location.reload(true);
	    					// 페이지 다시 로딩 -> 추후 비동기로 변경 예정!
	    				} else {
	    					alert('카테고리 생성 실패!');
	    				}
	    			},
	    			error: function(xhr, status, errorThrown){
	    				alert('카테고리 생성 오류 발생!');
	    				console.log(status);
	    				console.log(errorThrown);
	    			}
	    		});	        	
	        	
	          $( this ).dialog( "close" );
	        },
	        "취소": function() {
	          $( this ).dialog( "close" );
	        }
	      }
	    });		
	    
	 }
  });
  
  $('#className11').keydown(function(){
	 $('#createErr11').text('')
		 $('#className11').css({
			   'border-color':'#66afe9',
			   '-webkit-box-shadow':'inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)',
			   'box-shadow':'inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)'
		   });
  });
  
  
  
  
  
/*  
  // 초기화
  $('#textDisplay').empty();
  $('#imageDisplay').empty();
  $('#mediaDisplay').empty();
  $('#answerText').empty();
  $('#comentDisplay').empty();
  $('#sourceDisplay').empty();
  $("#typeSelector option:eq(1)").attr("selected", "selected");
  $("#level option:eq(1)").attr("selected", "selected");
  $("#exSelector option:eq(1)").attr("selected", "selected");
*/
$('#addBtn').on('click',function(){
	if(!$('#select11').val()){
		dailogAll('등록위치를 선택하셔야 합니다',$('#select11'));
		return false;
	}
	if(!$('#questVal').val()){
		dailogAll('문제를 입력하셔야 합니다',$('#questVal'));
		return false;
	}
	if($("input:checkbox[id='textCheck']").is(":checked") == true){
		if(!$('#textDisplay').val()){
			dailogAll('지문을 입력하셔야 합니다',$('#textDisplay'));
			return false;
		}
	}
	if($("input:checkbox[id='imageCheck']").is(":checked") == true){
		if(!$('#imageDisplay').val()){
			dailogAll('이미지를 선택하셔야 합니다',$('#imageDisplay'));
			return false;
		}else{
			if(!regExpImg.test($('#imageDisplay').val())){
				dailogAll('이미지 파일만 등록 가능합니다. [jpg,gif,png]',$('#imageDisplay'));
				return false;
			}
		}
	}
	if($("input:checkbox[id='mediaCheck']").is(":checked") == true){
		if(!$('#mediaDisplay').val()){
			dailogAll('MP3파일을 선택하셔야 합니다',$('#mediaDisplay'));
			return false;
		}else{
			if(!regExpMp3.test($('#mediaDisplay').val())){
				dailogAll('MP3파일만 등록 가능합니다. [mp3]',$('#mediaDisplay'));
				return false;
			}
		}
	}
	
	if($('#typeSelector').val() == 'objective'){
		var eSu = $('#exSelector').val();
		for(i=1;i<=eSu;i++){
			if(!$('#exText'+i).val()){
				dailogAll('보기를 입력해 주세요', $('#exText'+i));
				return false;
			}
		}
		if(!$(':radio[name="bokidap"]:checked').val()){ 
			dailogAll('정답을 선택해 주세요!');
			return false; 
		}	
	}else{
		if(!$('#answerText').val()){
			dailogAll('정답을 입력해 주세요',$('#answerText'));
			return false;
		}
	}
	
	if($("input:checkbox[id='comentCheck']").is(":checked") == true){
		if(!$('#comentDisplay').val()){
			dailogAll('해설을 입력하셔야 합니다',$('#comentDisplay'));
			return false;
		}
	}
	if($("input:checkbox[id='sourceCheck']").is(":checked") == true){
		if(!$('#sourceDisplay').val()){
			dailogAll('출처을 입력하셔야 합니다',$('#sourceDisplay'));
			return false;
		}
	}


	
	$('#form1').submit(function(e){
		var formObj = $(this);
		var formURL = formObj.Attr("action");
		var formData = new FormData(this);
		
		$.ajax({
			url: qbank.contextRoot + "/bankadd/insert.ajax",
			type: "POST",
			mimeType: 'multipart/form-data',
			contentType: false,
			cache: false,
			processData: false,
			dataType: 'json', 
			data: formData,

			success: function (result) {					
				loadSubjectList(currPageNo);
				//$('#btnReset').click();
				//console.log('okokok');
			},
			error: function(errorThrown){
				console.log('bankAdd 에러 : ' + errorThrown);
			}
		});	
		e.preventDefault();	// 디폴트 액션을 예방한다.
		e.unbind();
	});
	
});  
  
  
  
  /* 필수 입력 체크 경고창 띄우기 */
  function dailogAll(msg,f){
		$("#dialog-message").empty();
		$("#dialog-message").append('<p>'+ msg +'</p>');
		$("#dialog-message").dialog({
		      modal: true,
		      buttons: {
		        Ok: function() {
		          $( this ).dialog( "close" );
		          $(f).focus();
		        }
		      }
		});
  }
  /* 필수 입력 체크 경고창 띄우기 */
  
  

});



















