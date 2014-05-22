jQuery(function($) {

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