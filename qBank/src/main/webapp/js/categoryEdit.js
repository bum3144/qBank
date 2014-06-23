$(document).ready(function(){
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
/*	
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
*/
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

	        	
	    		$.ajax(qbank.contextRoot + '/gategory/create.ajax', {
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
  

});



















