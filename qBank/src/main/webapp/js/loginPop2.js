jQuery(function($) {
	
	$( "#toPopup2" ).draggable();

	$('#dialog1').hide();
	$('#dialog2').hide();
	
	$("a.toPopup2").click(function() {
		loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 500); // .5 second
	return false; 
	});

	/* event for close the popup */

	$("div.close2").click(function() {
		disablePopup();  // function close pop up
	});

	$(this).keyup(function(event) {
		if (event.which == 27) { // 27 is 'Ecs' in the keyboard
			disablePopup();  // function close pop up
		}
	});

        $("div#backgroundPopup2").click(function() {
		disablePopup();  // function close pop up
	});

        
        
        // 아이디찾기 
        $("#findIdBtn").on('click', function(e){
        	e.preventDefault();
    		$.getJSON(
    			qbank.contextRoot + 
    				'/find/findId.ajax?email=' + 
    				$("#findId_emailBox").val(), 
    			function(jsonObj) {
    				var result = jsonObj.ajaxResult;
    				if (result.status == "ok") {
    					mailSend();
    					disablePopup();
    				    $("#findId_emailBox").val('');
    				} else {
    					mailSendErr();
    				}
    			});
    		
    	});
        //아이디찾기 끝 
        
        
        
         //비밀번호 찾기 
        $("#findPassBtn").on('click', function(e){
        	e.preventDefault();
    		$.getJSON(
    			qbank.contextRoot + 
    				'/find/findPass.ajax?id=' + 
    				$("#findPass_IdBox").val() + "&email=" +
    				$("#findPass_EmailBox").val(), 
    			function(jsonObj) {
    				var result = jsonObj.ajaxResult;
    				if (result.status == "ok") {
    					$('#clickMe').click();
    					mailSend();
    					disablePopup();
    					
    				    $("#findPass_IdBox").val('');
    				    $("#findPass_EmailBox").val('');
    				} else {
    					mailSendErr();
    				}
    			});
    	});
        //비밀번호 찾기 끝


	 /************** start: functions. **************/
	function loading() {
		$("div.loader2").show();
	}
	function closeloading() {
		$("div.loader2").fadeOut('normal');
	}

	var popupStatus = 0; // set value

	function loadPopup() {
		if(popupStatus == 0) { // if value is 0, show popup
			closeloading(); // fadeout loading
			$("#toPopup2").fadeIn(0500); // fadein popup div
			$("#backgroundPopup2").css("opacity", "0.7"); // css opacity, supports IE7, IE8
			$("#backgroundPopup2").fadeIn(0001);
			popupStatus = 1; // and set value to 1
		}
	}

	function disablePopup() {
		if(popupStatus == 1) { // if value is 1, close popup
			$("#toPopup2").fadeOut("normal");
			$("#backgroundPopup2").fadeOut("normal");
			popupStatus = 0;  // and set value to 0
		}
	}
	/************** end: functions. **************/
	
	
	
	
	
	
/*	메일발송 메세지  */
	function mailSend(){
		$("#dialog1").dialog({
		modal:true,
	    buttons: {
	    	Ok: function() {
	    		$( this ).dialog( "close" );
	    	}
	    },
		open:function() {
		 $(this).parents(".ui-dialog:first").find(".ui-dialog-titlebar-close").hide();
		},
		width:300
		});
	}
	function mailSendErr(){
		$("#dialog2").dialog({
		modal:true, 
	    buttons: {
	    	Ok: function() {
	    		$( this ).dialog( "close" );
	    	}
	    },
		open:function() {
		 $(this).parents(".ui-dialog:first").find(".ui-dialog-titlebar-close").hide();
		},
		width:300
		});
	}
/*	메일발송 메세지  */	
	
	
}); // jQuery End