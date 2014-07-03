jQuery(function($) {
	
	$( "#toPopup2" ).draggable();

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
    				    alert("이메일 전송이 완료되었습니다.");
    				} else {
    					alert("해당이메일이 없습니다.");
    				}
    			});
    		
    	});
        
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
    				    alert("이메일 전송이 완료되었습니다.");
    				} else {
    					alert("해당이메일이 없습니다.");
    				}
    			});
    		
    	});


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
}); // jQuery End