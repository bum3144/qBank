$(document).ready(function(){

	
	/* 회원가입 필수 입력체크 시작*/
	var array = [
	             {id : 'joinUid', type : 'text' , length : 4 , text : '4~10글자 사이입력', maxlength : 10},
		         {id : 'joinPassword', type : 'text' , length : 6 ,text : '6~10글자 사이입력', maxlength : 10},
		         {id : 'joinPassword2', type : 'password' , length : 6 ,text : '6~10글자 사이입력', maxlength : 10},
		         {id : 'joinName', type : 'text' , length : 2 ,text : '2~20글자 사이입력', maxlength : 20},
		         {id : 'joinSexM', type : 'radio'},
		         {id : 'joinSexW', type : 'radio'},
		         {id : 'joinYear', type : 'select'},
		         {id : 'joinMonth', type : 'select'},
		         {id : 'joinDay', type : 'select'},
		         {id : 'joinEmail', type : 'email' ,text : '잘못된 이메일 형식'},
		         {id : 'joinTel', type : 'tel' , length : 9 ,text : '잘못된 번호 예) 010-XXXX-XXXX', maxlength : 13},
		         {id : 'joinCell', type : 'tel' , length : 9 ,text : '잘못된 번호 예) 010-XXXX-XXXX', maxlength : 13},
		         {id : 'joinZip', type : 'zip' , length : 7 ,text : '우편번호(숫자만', maxlength : 7},
		         {id : 'joinAddr1', type : 'text' , length : 6 ,text : '주소입력'},
		         {id : 'joinAddr2', type : 'text' , length : 6 ,text : '상세주소'},
	        	];

	$('input').keyup(function(){	
		var thisId = $(this).attr("id");	// ID
		var thisVal = $(this).val();		// value 값
		var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/; // 전화번호체크
		var regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; // 이메일체크
		
		$.each(array,function(key,item){
			
			if(thisId == item.id){	
				
				switch(item.type){
					case 'text' :
						if(thisVal.length < item.length || thisVal.length > item.maxlength){					
							console.log(item.text);
						}else{
							console.log('등록가능 아이디입니다');	
						}
					break;
		
					case 'email' :
						 if (!regex.test(thisVal)) {
							 console.log(item.text);	
						 }else{
							 console.log('등록가능 이메일입니다');							 
						 }
					break;	
		
					case 'tel' :
						 if (!regExp.test(thisVal)) {
							 console.log(item.text);	
						 }else{
							 console.log('등록가능 전화번호입니다');							 
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


	
	
	
	

	$("#joinYear1").datepicker({
		  showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.


		  buttonImageOnly: true, // 버튼에 있는 이미지만 표시한다.

		  changeMonth: true, // 월을 바꿀수 있는 셀렉트 박스를 표시한다.

		  changeYear: true, // 년을 바꿀 수 있는 셀렉트 박스를 표시한다.

		  minDate: '-100y', // 현재날짜로부터 100년이전까지 년을 표시한다.

		  nextText: '다음 달', // next 아이콘의 툴팁.

		  prevText: '이전 달', // prev 아이콘의 툴팁.

		  numberOfMonths: [1,1], // 한번에 얼마나 많은 월을 표시할것인가. [2,3] 일 경우, 2(행) x 3(열) = 6개의 월을 표시한다.

		  stepMonths: 3, // next, prev 버튼을 클릭했을때 얼마나 많은 월을 이동하여 표시하는가. 

		  yearRange: 'c-100:c+10', // 년도 선택 셀렉트박스를 현재 년도에서 이전, 이후로 얼마의 범위를 표시할것인가.

		  showButtonPanel: true, // 캘린더 하단에 버튼 패널을 표시한다. 

		  currentText: '오늘 날짜' , // 오늘 날짜로 이동하는 버튼 패널

		  closeText: '닫기',  // 닫기 버튼 패널

		  dateFormat: "yy-mm-dd", // 텍스트 필드에 입력되는 날짜 형식.

		  showAnim: "slide", //애니메이션을 적용한다.

		  showMonthAfterYear: true , // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다. 

		  dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], // 요일의 한글 형식.

		  monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] // 월의 한글 형식.

		 });

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
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
	
	/************** end: functions. **************/
	   
}); // jQuery End

