
	$(document).ready(function() {
		

		
		
/*
		$("#checkAll").click(function(){
			if ($("#checkAll").is(":checked")) {	
				$("input[name=box]:checkbox").each(function() {
					$(this).attr("checked", true);
					$("#checkAll").attr("checked", true);
				});
			}else{
				$("input[name=box]:checkbox").each(function() {
					$(this).attr("checked", false);
					$("#checkAll").attr("checked", false);
				});	
			}
		});
*/
		/*		
		// 체크 박스 모두 체크
		$("#checkAll").click(function() {
			$("input[name=box]:checkbox").each(function() {
				$(this).attr("checked", true);
			});
		});

		// 체크 박스 모두 해제
		$("#uncheckAll").click(function() {
			$("input[name=box]:checkbox").each(function() {
				$(this).attr("checked", false);
			});
		});*/

		
		
/*		// 체크 되어 있는 값 추출
		$("#getCheckedAll").click(function() {
			$("input[name=box]:checked").each(function() {
				var test = $(this).val();
				console.log(test);
			});
		});

		// 서버에서 받아온 데이터 체크하기 (콤마로 받아온 경우)
		$("#updateChecked").click(function() {
			var splitCode = $("#splitCode").val().split(",");
			for (var idx in splitCode) {
				$("input[name=box][value=" + splitCode[idx] + "]").attr("checked", true);
			}
		});

		// test case
		test1();
*/
		
		/*  문제 등록 선택체크 */
		
		var array = [ 
			{ id: 'textCheck', id2: 'textDisplay'},
			{ id: 'imageCheck', id2: 'imageDisplay'},
			{ id: 'mediaCheck', id2: 'mediaDisplay'},
			{ id: 'comentCheck', id2: 'comentDisplay'},
			{ id: 'sourceCheck', id2: 'sourceDisplay'}
			
		]
	 
       $('.questDisplay').hide();
		
		$("input:checkbox").click(function(){
			var thisId = $(this).attr("id");
			
			$.each(array,function(key,item){
				var test1 = $('#' + item.id);
				var test = $('#' + item.id2);
				
				if(thisId == item.id && test1.is(":checked")){
					test.show();
				}else if(thisId == item.id && test1.not(":checked")){
					test.hide();
				}

			});
	});
		
		/*  문제 등록 선택체크 끝 */
		
		
		/* 보기창 숨김 보임 */
		$('#exBox3').hide();
		$('#exBox4').hide();
		$('#exBox5').hide();
		
		$('#exSelector').change(function(){
			if($(this).val() == 2){
				$('#exBox3').hide();
				$('#exBox4').hide();
				$('#exBox5').hide();
			}else if ($(this).val() == 3){
				$('#exBox3').show();
				$('#exBox4').hide();
				$('#exBox5').hide();
			}else if ($(this).val() == 4){
				$('#exBox3').show();
				$('#exBox4').show();
				$('#exBox5').hide();
			}else{
				$('#exBox3').show();
				$('#exBox4').show();
				$('#exBox5').show();
			}
		});
		
		/* 보기창 숨김 보임 끝*/
		
		
		/* 미리보기창 띄우기 */
		 //$( "#toPopup" ).draggable();

			$("#previewBtn").click(function() {
					setTimeout(function(){ // then show popup, deley in .5 second
						loadPopup(); // function show popup
					}, 500); // .5 second
			return false; 
			});

			/* event for close the popup */

			$(".previewClose").click(function() {
				disablePopup();  // function close pop up
			});

			$(this).keyup(function(event) {
				if (event.which == 27) { // 27 is 'Ecs' in the keyboard
					disablePopup();  // function close pop up
				}
			});

		        $("#previewBackPopup").click(function() {
				disablePopup();  // function close pop up
			});



			 /************** start: functions. **************/
			
			var popupStatus = 0; // set value

			function loadPopup() {
				if(popupStatus == 0) { // if value is 0, show popup
					$("#previewPopup").fadeIn(0500); // fadein popup div
					$("#previewBackPopup").css("opacity", "0.7"); // css opacity, supports IE7, IE8
					$("#previewBackPopup").fadeIn(0001);
					popupStatus = 1; // and set value to 1
				}
			}

			function disablePopup() {
				if(popupStatus == 1) { // if value is 1, close popup
					$("#previewPopup").fadeOut("normal");
					$("#previewBackPopup").fadeOut("normal");
					popupStatus = 0;  // and set value to 0
				}
			}
			/************** end: functions. **************/
	
	
		
		

	function test1() {

		console.log("################################################");
		console.log("## test1 START");
		console.log("################################################");

		var cnt = $("input:checkbox").size();
		console.log("checkboxSize=" + cnt);

		$("input[name=box]:checkbox").each(function() {
			var checkboxValue = $(this).val();
			console.log("checkboxValue=" + checkboxValue);
		});

		console.log("----------------------------------------------");

		$("#checkboxArea").children().each(function() {
			var checkboxValue = $(this).children(":checkbox").val();
			var text = $(this).children().eq(1).text();
			console.log(text + "=" + checkboxValue);
		});
	}
	
	
	});
	
	

