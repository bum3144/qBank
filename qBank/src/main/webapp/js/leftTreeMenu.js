

$(document).ready(function(){
	loadCategory();
	
	/* 카테고리 LIST */
	function loadCategory() {
		$.post(
				qbank.contextRoot + '/gategory/list.ajax'
				,function(jsonObj) {
					var result = jsonObj.ajaxResult;
						console.log(jsonObj);
					if (result.status == 'ok') {
						$.each(result.data, function(index, obj){

							console.log(index.no);
						});
					}
				}
				,'json');
	}

});



$(function () {
	$('#sidebar').w2sidebar({
		name: 'sidebar',
		nodes	: [ 
					{ id: 'level-1', text: 'Level 1', img: 'icon-folder', expanded: true, 
						nodes: [ 
							{ id: 'level-1-1', text: 'Level 1.1', img: 'icon-page' },
							{ id: 'level-1-2', text: 'Level 1.2', img: 'icon-page' },
							{ id: 'level-1-3', text: 'Level 1.3', img: 'icon-page' }
						 ]
					},
					{ id: 'level-2', text: 'Level 2', img: 'icon-folder',
						nodes: [ 
							{ id: 'level-2-1', text: 'Level 2.1', img: 'icon-folder', 
								nodes: [
									{ id: 'level-2-1-1', text: 'Level 2.1.1', img: 'icon-page' },
									{ id: 'level-2-1-2', text: 'Level 2.1.2', img: 'icon-page' },
									{ id: 'level-2-1-3', text: 'Level 2.1.3', img: 'icon-page' }
						 		]
						 	},
							{ id: 'level-2-2', text: 'Level 2.2', img: 'icon-page' },
							{ id: 'level-2-3', text: 'Level 2.3', img: 'icon-page' }
						]
					},
					{ id: 'level-3', text: 'Level 3', img: 'icon-folder',
						nodes: [
							{ id: 'level-3-1', text: 'Level 3.1', img: 'icon-page' },
							{ id: 'level-3-2', text: 'Level 3.2', img: 'icon-page' },
							{ id: 'level-3-3', text: 'Level 3.3', img: 'icon-page' }
						]
			}
		]
	});
	w2ui.sidebar.on('*', function (event) {
		console.log('Event: ' + event.type + ' Target: ' + event.target);
		console.log(event);
	})
});

$('#add1').click(function(){
	w2ui.sidebar.add([
	      			{ id: 'level-4', text: 'Level 4', img: 'icon-folder', expanded: true}
	      	]);
	w2ui.sidebar.expand('level-2');
});




function add1() {
	w2ui.sidebar.add([
			{ id: 'level-4', text: 'Level 4', img: 'icon-folder', expanded: true}
	]);
}

function add2() {
	w2ui.sidebar.add([
		{ id: 'new-1', text: 'New Item 1', img: 'icon-add' },
		{ id: 'new-2', text: 'New Item 2', img: 'icon-add' },
		{ id: 'new-3', text: 'New Item 3', img: 'icon-add' }
	]);
}

function add3() {
	w2ui.sidebar.insert('level-4', null, [
		{ id: 'new-4', text: 'New Item 4', img: 'icon-add' }
	]);
	w2ui.sidebar.expand('level-1');
}

function removeItem() {
	w2ui.sidebar.remove('new-1', 'new-2', 'new-3', 'new-4', 'new-5', 'new-6');
}