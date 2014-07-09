jQuery(function($) {
	$( "#detailPopup" ).draggable();

	$(".test1").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 500); // .5 second
	return false;
	});

	/* event for close the popup */

	$(".detailClose").click(function() {
		disablePopup();  // function close pop up
	});

	$(this).keyup(function(event) {
		if (event.which == 27) { // 27 is 'Ecs' in the keyboard
			disablePopup();  // function close pop up
		}
	});

        $("#detailBackgroundPopup").click(function() {
		disablePopup();  // function close pop up
	});

/*	$('a.livebox').click(function() {
		alert('다친다! 언넝 닫아라!');
	return false;
	});
*/
	 /************** start: functions. **************/
	function loading() {
		$("#detailLoader").show();
	}
	function closeloading() {
		$("#detailLoader").fadeOut('normal');
	}

	var popupStatus = 0; // set value

	function loadPopup() {
		if(popupStatus == 0) { // if value is 0, show popup
			closeloading(); // fadeout loading
			$("#detailPopup").fadeIn(0500); // fadein popup div
			$("#detailBackgroundPopup").css("opacity", "0.7"); // css opacity, supports IE7, IE8
			$("#detailBackgroundPopup").fadeIn(0001);
			popupStatus = 1; // and set value to 1
		}
	}

	function disablePopup() {
		if(popupStatus == 1) { // if value is 1, close popup
			$("#detailPopup").fadeOut("normal");
			$("#detailBackgroundPopup").fadeOut("normal");
			popupStatus = 0;  // and set value to 0
		}
	}
	/************** end: functions. **************/
}); // jQuery End