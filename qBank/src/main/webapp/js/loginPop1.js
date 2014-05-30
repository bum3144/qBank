jQuery(function($) {
	
	$( "#toPopup1" ).draggable();

	$("a.toPopup1").click(function() {
		console.log(34)
		loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 500); // .5 second
	return false; 
	});

	/* event for close the popup */
	$("div.close1").hover(
					function() {
						$('span.ecs_tooltip1').show();
					},
					function () {
    					$('span.ecs_tooltip1').hide();
  					}
				);

	$("div.close1").click(function() {
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
        
        
        /* 회원가입 폼 넘기는거 시작 */
        
        $("#content1").css({display:""});
    	$("#content2").css({display:"none"});
    	$("#content3").css({display:"none"});
    	
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

