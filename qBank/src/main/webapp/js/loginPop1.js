$(document).ready(function(){

	
	/* 회원가입 필수 입력체크 시작*/
	var array = [
	             {id : 'joinUid', id2: 'joinUidBox', dataId: 'textChk', type : 'id' , length : 4 , text : '4~10글자 사이입력', text2 : '등록가능한 아이디입니다',
	            	 text3 : '중복되는 아이디입니다',maxlength : 10},
		         {id : 'joinPassword', id2: 'joinPassBox', dataId: 'textChk', type : 'text' , length : 6 ,text : '6~10글자 사이입력', maxlength : 10},
		         {id : 'joinPassword2',id2: 'joinPassCheckBox', type : 'passwordCheck', dataId: 'textChk' , length : 6 ,text : '비밀번호가 동일하지 않음', maxlength : 10},
		         {id : 'joinName', id2: 'joinNameBox', dataId: 'textChk', type : 'text' , length : 2 ,text : '2~20글자 사이입력', maxlength : 20},
		         {id : 'joinSexM', type : 'radio'},
		         {id : 'joinSexW', type : 'radio'},
		         {id : 'joinYear', type : 'select'},
		         {id : 'joinMonth', type : 'select'},
		         {id : 'joinDay', type : 'select'},
		         {id : 'joinEmail',id2: 'joinEmailBox', type : 'email', dataId: 'textChk',text : '잘못된 이메일 형식',text2 : '등록가능한 이메일입니다',text3: '중복된 이메일입니다'},
		         {id : 'joinTel', type : 'tel' , length : 9 ,text : '잘못된 번호 예) 010-XXXX-XXXX', maxlength : 13},
		         {id : 'joinCell', type : 'tel' , length : 9 ,text : '잘못된 번호 예) 010-XXXX-XXXX', maxlength : 13},
		         {id : 'joinZip', type : 'zip' , length : 7 ,text : '우편번호(숫자만', maxlength : 7},
		         {id : 'joinAddr1', dataId: 'textChk', type : 'text' , length : 6 ,text : '주소입력'},
		         {id : 'joinAddr2', dataId: 'textChk', type : 'text' , length : 6 ,text : '상세주소'},
	        	];

	$('input').keyup(function(){	
		var thisId = $(this).attr("id");	// ID
		var thisVal = $(this).val();		// value 값
		var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/; // 전화번호체크
		var regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; // 이메일체크
		
		$.each(array,function(key,item){
			
			if(thisId == item.id){	
				var $test = $('#'+item.dataId);
				
				switch(item.type){
					case 'id' :
						
						if(thisVal.length < item.length || thisVal.length > item.maxlength){
							  makeMsgBox($test,item);
						}else{
							
							$.getJSON(
									qbank.contextRoot + 
										'/joinChk/chkId.ajax?uid=' + 
										thisVal,
									function(jsonObj) {
										var result = jsonObj.ajaxResult;

										console.log(result);
										if (result.status == "ok") {
                                            makeMsgBox3($test, item);
										} else {
											makeMsgBox2($test, item);
										}
									});
						}

					break;
					
		
					case 'email' :
						 if (!regex.test(thisVal) ) {
							// makeMsgBox($test, item);
							 console.log('aaaaa');
						 }else{
							 console.log('bbbbb');
//							 $.getJSON(
//										qbank.contextRoot + 
//											'/joinChk/chkEmail.ajax?uemail=' + 
//											thisVal,
//										function(jsonObj) {
//											var result = jsonObj.ajaxResult;
//											console.log(result);
//											if (result.status == "ok") {
//												makeMsgBox3($test, item);
//											} else {
//												makeMsgBox2($test, item);
//											}
//										});							 
						 }
					break;	
		
					case 'tel' :
						 if (!regExp.test(thisVal)) {
							 console.log(item.text);	
						 }else{
							 console.log('등록가능 전화번호입니다');							 
						 }
					break;
					
					case 'passwordCheck' :
						if(thisVal.length < item.length || thisVal.length > item.maxlength){
							  makeMsgBox($test,item);
							  if (($("#joinPassword").val()) != ($("#joinPassword2").val())) {
									 makeMsgBox($test,item);
							   }else{
									 removeMsgBox($test,item);
								 }
						}else{
							 removeMsgBox($test,item);
							
						}
					break;
					default:
						console.log("비고");
					break;
				}
			
			}
		});
		
	});

	/* 회원가입 필수 입력체크 끝 */		
	
	

    // 패스워드확인창 새로고침
	$('#joinPassword').keyup(function(){
		$('#joinPassword2').val("");
	});
	// 패스워드확인창 새로고침

	
	//클래스 값 지정
	$('#studentBtn').click(function(){
		$('#joinClass').val('student');
	});
	$('#teacherBtn').click(function(){
		$('#joinClass').val('teacher');
	});	
	//클래스 값 지정
	

	
	
	/* Email check */
//	$('#joinEmail').keyup( function(){
//	//	console.log($('#joinUid').val());
//		$.getJSON(
//				qbank.contextRoot + 
//					'/joinChk/chkEmail.ajax?uemail=' + 
//					$(this).val(),
//				function(jsonObj) {
//					var result = jsonObj.ajaxResult;
//                                  
//					console.log(result);
//					if (result.status == "ok") {
//						console.log(result.data);
//					} else {
//						console.log('이메일이 없습니다.');
//					}
//				});
//	
//	});
	
	
	/* 회원가입 */
	
	$('#joinBtn').click(function(){
		
		$.post(
			qbank.contextRoot + '/join/insert.ajax'
			,{
			    uclass: $('#joinClass').val(),
			    uid: $('#joinUid').val(),
			 	upass: $('#joinPassword').val(),
			  	uname: $('#joinName').val(),
			    usex: $(':radio[name="sex"]:checked').val(),
			    ubirth: $('#joinYear').val() + $('#joinMonth').val() + $('#joinDay').val(),
			   	uemail: $('#joinEmail').val(),
			    utel: $('#joinTel').val(),
			    ucellphone: $('#joinCell').val()
			   
			}
			,function(jsonObj){}
			,'json');
	});
	
	
	
	
	
	
	
	
	
	
	
	//팝업창 관련 
	$( "#toPopup1" ).draggable();

	$("a.toPopup1").click(function() {
		loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 500); // .5 second
	return false; 
	});

	/* event for close the popup */
	
	$(".close1").click(function() {
		disablePopup();  // function close pop up
	});

	
	$(this).keyup(function(event) {
		if (event.which == 27) { // 27 is 'Ecs' in the keyboard
			disablePopup();  // function close pop up
		}
	});

        $("div#backgroundPopup1").click(function() {
		disablePopup();  // function close pop up
	});
        
    //팝업창 관련
        
        
        /* 유효성 검사 시작 */
        
        $("#joinBtn").click(function(){
        	$('#commentForm').validate();
        });
        
        /* 유효성 검사 끝 */
        
        
        /* 회원가입 폼 넘기는거 시작 */
        $('a.toPopup1').on('click',function(){
        $("#content1").css({display:""});
    	$("#content2").css({display:"none"});
    	$("#content3").css({display:"none"});
        });
    	
    	
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
        
        /* 회원가입 폼 넘기는거 끝 */
    	
        
   
    /* 학생하고 선생님 버튼 hover */
        
        $('#studentBtn').mouseover(function(){
    		$('#studentImg').css({
    			'background': 'url(/qBank/image/studentBefor.png) no-repeat',
    			'background-size': 'cover',
    			'width': '70px',
    		    'height': '110px',
    		    'margin-left': '18px',
    	        'margin-top': '20px'
    		});
    		
    		$('#studentBtn').css({
    		 'text-decoration': 'none',
    		 'background': '-webkit-gradient(linear, left top, left bottom,from(#FDFDFD), color-stop(0.50, #ffffff), to(#FFDE8B))',
    		 'border': '5px solid #ffbf00',
			 'color': '#FFDE8B'
    		});
    		
    		$('#studentP').css({
  			  'color': '#ffbf00'
  			});
    	}); 
    	 
    	$('#studentBtn').mouseout(function(){
    		$('#studentImg').css({
    			'background': 'url(/qBank/image/studentAfter.png) no-repeat',
    			'background-size': 'contain',
    			'width': '60px',
    		    'height': '120px',
    		    'margin-left': '11px',
    	        'margin-top': '13px'
    			
    		});
    		
    		$('#studentBtn').css({
    			 'background': '-webkit-gradient(linear, left top, left bottom,from(#FDFDFD), color-stop(0.50, #ffffff), to(#d6d6d6))',
    			 'border': '5px solid #5A3404'
    			});
    		
    		$('#studentP').css({
				  'color': '#5A3404'
				});
    	});    
    	
    	
    	 $('#teacherBtn').mouseover(function(){
    			$('#teacherImg').css({
    				'background': 'url(/qBank/image/teacherAfter.png) no-repeat',
    				'background-size': 'contain',
    				'width': '70px',
    			    'height': '120px',
    			    'margin-left': '10px',
    		        'margin-top': '40px'
    			});
    			
    			$('#teacherBtn').css({
    			 'text-decoration': 'none',
    			 'background': '-webkit-gradient(linear, left top, left bottom,from(#FDFDFD), color-stop(0.50, #ffffff), to(#FFDE8B))',
    			 'border': '5px solid #ffbf00',
    			 'color': '#FFDE8B'
    			});
    			
    			$('#teacherP').css({
    			  'color': '#ffbf00'
    			});
    			
    		}); 
    		 
    		$('#teacherBtn').mouseout(function(){
    			$('#teacherImg').css({
    				'background': 'url(/qBank/image/teacherBefor.png) no-repeat',
    				'background-size': 'contain',
    				'width': '55px',
    			    'height': '110px',
    			    'margin-left': '11px',
    		        'margin-top': '37px'
    				
    			});
    			
    			$('#teacherBtn').css({
    				 'background': '-webkit-gradient(linear, left top, left bottom,from(#FDFDFD), color-stop(0.50, #ffffff), to(#d6d6d6))',
    				 'border': '5px solid #5A3404'
    				});
    			
    			$('#teacherP').css({
    				  'color': '#5A3404'
    				});
    			
    		});    
    	
    	/* 학생하고 선생님 버튼 hover 끝 */	
     
    		
    
    		

/*	$('a.livebox').click(function() {
		alert('다친다! 언넝 닫아라!');
	return false;
	});*/

	 /************** start: functions. **************/
	function loading() {
		$("div.loader1").show();
	}
	function closeloading() {
		$("div.loader1").fadeOut('normal');
	}

	var popupStatus = 0; // set value

	function loadPopup() {
		if(popupStatus == 0) { // if value is 0, show popup
			closeloading(); // fadeout loading
			$("#toPopup1").fadeIn(0500); // fadein popup div
			$("#backgroundPopup1").css("opacity", "0.7"); // css opacity, supports IE7, IE8
			$("#backgroundPopup1").fadeIn(0001);
			popupStatus = 1; // and set value to 1
		}
	}

	function disablePopup() {
		if(popupStatus == 1) { // if value is 1, close popup
			$("#toPopup1").fadeOut("normal");
			$("#backgroundPopup1").fadeOut("normal");
			popupStatus = 0;  // and set value to 0
		}
	}
	
	function makeMsgBox(test,item){
		 if(test.attr("id") != item.dataId){
				$('<div></div>')
				.attr('id', item.dataId)		
				.addClass("col-sm-4")
				.css({'font-size':'12px','margin-top':'10px',
					'color':'white','text-align':'left'})
				.appendTo($('#'+item.id2))
				.append('<span>' + item.text + '</span>')
			   $('#' + item.id).css({
			   'border-color':'#C40F33',
			   '-webkit-box-shadow':'inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(228, 37, 76, 0.6)',
			   'box-shadow':'inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(228, 37, 76, 0.6)'
			   })
			}
	}
	
	function makeMsgBox3(test,item){
		 if(test.attr("id") == item.dataId){
			 $('#'+item.dataId).remove();
				$('<div></div>')
				.attr('id', item.dataId)		
				.addClass("col-sm-4")
				.css({'font-size':'12px','margin-top':'10px',
					'color':'red','text-align':'left'})
				.appendTo($('#'+item.id2))
				.append('<span>' + item.text3 + '</span>')
			   $('#' + item.id).css({
			   'border-color':'#C40F33',
			   '-webkit-box-shadow':'inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(228, 37, 76, 0.6)',
			   'box-shadow':'inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(228, 37, 76, 0.6)'
			   })
			}
	}
	
	function makeMsgBox2(test,item){
		 if(test.attr("id") == item.dataId){
			 $('#'+item.dataId).remove();
				$('<div></div>')
				.attr('id', item.dataId)		
				.addClass("col-sm-4")
				.css({'font-size':'12px','margin-top':'10px',
					'color':'white','text-align':'left'})
				.appendTo($('#'+item.id2))
				.append('<span>' + item.text2 + '</span>')
			   $('#' + item.id).css({
					   'border-color':'#66afe9',
					   '-webkit-box-shadow':'inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)',
					   'box-shadow':'inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)'
					   })
			}
	}
	
	function removeMsgBox(test,item){
		 if(test.attr("id") == item.dataId){
				$('#'+item.dataId).remove();
				$('#' + item.id).css({
					   'border-color':'#66afe9',
					   '-webkit-box-shadow':'inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)',
					   'box-shadow':'inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)'
					   })
			}
	}
	
	/************** end: functions. **************/
	   
}); // jQuery End

