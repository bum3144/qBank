
$(document).ready(
	function() {
		loadCategory();
	
		/* 카테고리 LIST */
		function loadCategory() {
			$.post(qbank.contextRoot + '/gategory/list.ajax', function(
					jsonObj) {
				var result = jsonObj.ajaxResult;
				if (result.status == 'ok') {
					// console.log(jsonObj);
	
					/* 카테고리 준비 시작 */
					$('#sidebar').w2sidebar({
						name : 'sidebar',
						img : 'icon-folder',
						nodes : []
					});
					
					w2ui.sidebar.on('*', function(event) {
					//	console.log(event);
					//	console.log('Event: ' + event.type + ' Target: ' + event.target);
					//	console.log($('#classCode').val(event.target));

						var cc = event.target;
						if(event.type=='click'){
							var ccArray = cc.split('-');
							var params;
							
							console.log(ccArray[0] + ' * ' + ccArray[1] + ' * ' + ccArray[2]);
							
							if(ccArray[0]) params = "?parent='"+ccArray[0]+"'&seq=NULL&depth=NULL";
							if(ccArray[1]) params = "?parent='"+ccArray[0]+"'&seq='"+ccArray[1]+"'&depth=NULL";
							if(ccArray[2]) params = "?parent='"+ccArray[0]+"'&seq='"+ccArray[1]+"'&depth='"+ccArray[2]+"'";
							
							console.log(params);
							
							$.getJSON(qbank.contextRoot + 
									'/selectcate/categoryClick.ajax' + params,
								function(jsonObj) {
									var result = jsonObj.ajaxResult;
									if (result.status == "ok") {
										console.log($('#classCode').val(event.target));

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
									img : 'icon-folder'
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
		}
	
	});


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