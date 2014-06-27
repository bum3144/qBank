
$(document).ready(
	function() {

		/* 카테고리 LIST */
		/* 카테고리 준비 시작 */
		$('#sidebar').w2sidebar({
			name : 'sidebar',
			img : null,
			nodes : []
		});
		
		
			$.post(qbank.contextRoot + '/category/list.ajax', function(
					jsonObj) {
				var result = jsonObj.ajaxResult;
				if (result.status == 'ok') {

					w2ui.sidebar.on('*', function(event) {
						//console.log('Event: ' + event.type + ' Target: ' + event.target + ' Name: ' + event.text);
						
						var cc = event.target;
						if(event.type=='click'){
							var params = w2ui.sidebar.get(cc).text;
							params = '?cname=' + params;
							
							$.getJSON(qbank.contextRoot + 
									'/selectcate/categoryClick.ajax' + params,
								function(jsonObj) {
									var result = jsonObj.ajaxResult;
									if (result.status == "ok") {
										var rData = result.data.list[0];
										console.log(rData);

										$('#cCode').val(rData.code);
										$('#classCode').val(event.target);
										$('#className').val(rData.name);
										$('#className1').val(rData.name);
										$('#choiceBox').css('border-color','#F0A03A');
										$('#disText').html('카테고리가 선택 되었습니다.')
											.css({
												'color':'red',
												'font-weight':'bold'
												});
										$('#choiceModDel').show();
										$('#classUse').val(rData.useyn);
										
										/* 촤측 카테고리 선택하면 생성할 위치 2차까지 보여주기 */
										$('#select11').val(rData.parent); //생성할 1차 위치
										console.log(rData.parent);
									//	$("#select11").val(rData.parent).attr("selected", "selected");
//										$('#select33').val(rData.depth);  //생성할 3차 위치
//										
//										$('#select11').val(rData.parent); //생성할 1차 위치
//										$('#select22').val(rData.seq);  //생성할 2차 위치
//										$('#select33').val(rData.depth);  //생성할 3차 위치
										
										$(function(){
											optionRemove11();
											optionRemove22();
											($('#select11').val()) ? $('#select22').show() : $('#select22').hide()
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
																if(rData.seq==test.seq){ // 생성할 2차 위치
																	$("#select22").val(test.seq);
																}
															});
														});
													}	
												},
												error: function(errorThrown){
													console.log('2카테고리 박스 에러 : ' + errorThrown);
												}
											});	
										});

										
										$(function(){
											optionRemove11();
											optionRemove22();
											(rData.seq) ? $('#select33').show() : $('#select33').hide()
											$.ajax({
												type: "GET",
												url: qbank.contextRoot + '/selectcate/third.ajax?parent='+$('#select11').val()
												   +'&seq='+rData.seq,
												dataType: 'json', 
												success: function (result) {
													var result = result.ajaxResult;
													if (result.status == 'ok') {
														$.each(result.data, function(index, obj) {
															$('#select33').append('<option value="">- 3차 선 택 -</option>');
															$.each(obj, function(index, test) {
																$('#select33').append('<option value="' +test.depth+ '">' 
																		+ test.name + '</option>');
																if(rData.depth==test.depth){ // 생성할 2차 위치
																	$("#select33").val(test.depth).attr("selected", "selected");
																}
															});
														});
													}	
												},
												error: function(errorThrown){
													console.log('3카테고리 박스 에러 : ' + errorThrown);
												}
											});	
										});
										

										
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
										/* 촤측 카테고리 선택하면 생성할 위치 2차까지 보여주기 */
										
										
									//	$('#choiceBox3, #finishBox2').hide('blind', 500);	
									//	$('#choiceBox2, #finishBox1').show('blind', 500);	
									// 카테고리 클릭하면 자동으로 수정 페이지 열리게 함.
										
									} else {
										console.log('카테고리 선택 오류.');
									}
								});							
							
						}
							

					})
 
					/* 카테고리 준비 종료 */
	
					// 반복시작
					$.each(result.data, function(index, obj) {
						var count = obj.length;
						$.each(obj, function(index, test) {
							// console.log(test);
							var cate1st = test.parent;
							var cate2nd = test.parent + "-" + test.seq;
							var cate3rd = test.parent + "-" + test.seq
									+ "-" + test.depth;
	                        
							if (!test.depth && !test.seq) {
								w2ui['sidebar'].add({
									id : cate1st,
									text : test.name,
									img : 'icon-folder',
									expanded : true
								});
							
								
	
							} else if (!test.depth) {
								w2ui['sidebar'].add(cate1st, {
									id : cate2nd,
									text : test.name,
									img : 'icon-columns'
								});
	
							} else {
								w2ui['sidebar'].add(cate2nd, {
									id : cate3rd,
									text : test.name,
									img : 'icon-page'
								});
							}
	
						});
					});
					// 반복 끝

				}
			}, 'json');
			
			
		
		
	
	});




function select1(parent){
	if(!$('#select1').val()){
		$('#select2, #select3').hide();
	}

	$.ajax({
		type: "GET",
		url: qbank.contextRoot + '/selectcate/frist.ajax',
		dataType: 'json', 
		success: function (result) {
			var result = result.ajaxResult;
			if (result.status == 'ok') {
				$('#select1').val(parent);
			}
		},
		error: function(errorThrown){
			console.log('1카테고리 박스 에러 : ' + errorThrown);
		}

	});
	
}





function optionRemove1(){
	$("select[id='select2']").find('option').each(function() {
		$(this).empty();
	 });
}

function optionRemove2(){
	$("select[id='select3']").find('option').each(function() {
		$(this).empty();
	 });
}





/*
w2popup.open({
	title   : 'Popup Title HTML',
	body    : 'Body HTML',
	buttons : 'Buttons HTML'
});
w2alert('This is an alert');
w2confirm('Are you sure?', function btn(answer) { alert(answer); })
 */

$('#add1').click(function() {
	w2ui.sidebar.add([ {
		id : 'level-4',
		text : 'Level 4',
		img : 'icon-folder',
		expanded : true
	} ]);
	w2ui.sidebar.expand('level-2');
});

function add1() {
	w2ui.sidebar.add([ {
		id : 'level-4',
		text : 'Level 4',
		img : 'icon-folder',
		expanded : true
	} ]);
}

function add2() {
	w2ui.sidebar.add([ {
		id : 'new-1',
		text : 'New Item 1',
		img : 'icon-add'
	}, {
		id : 'new-2',
		text : 'New Item 2',
		img : 'icon-add'
	}, {
		id : 'new-3',
		text : 'New Item 3',
		img : 'icon-add'
	} ]);
}

function add3() {
	w2ui.sidebar.insert('level-4', null, [ {
		id : 'new-4',
		text : 'New Item 4',
		img : 'icon-add'
	} ]);
	w2ui.sidebar.expand('level-1');
}

function removeItem() {
	w2ui.sidebar.remove('new-1', 'new-2', 'new-3', 'new-4', 'new-5', 'new-6');
}