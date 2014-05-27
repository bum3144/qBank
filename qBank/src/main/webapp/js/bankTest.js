var currPageNo = 1;
var pageSize = 5;

$(document).ready(function(){

	$('#prevPage').click(function(event){
		if (currPageNo > 1) {
			loadBankTestList(currPageNo - 1);
		}
	});
	
	$('#nextPage').click(function(event){
		loadBankTestList(currPageNo + 1);
	});
	
	$(document).on('click', 'button.rowDelBtn', function(){
		deleteBankTest( $(this).attr('data-no') );
	});
	
	$(document).on('click', 'a.titleLink', function(){
		$.getJSON(
			qbank.contextRoot + 
				'/bank/detail.ajax?no=' + 
				$(this).attr('data-no'),
			function(jsonObj) {
				var result = jsonObj.ajaxResult;
				if (result.status == "ok") {
					$('#no').val(result.data.no);
					$('#title').val(result.data.title);
					
					changeFormState("update");
				} else {
					console.log('해당 시험지가 없습니다.');
				}
			});
	});
	
	$('#btnAdd').click(function(){
		$.post(
			qbank.contextRoot + '/bank/insert.ajax'
			,{
				title: $('#title').val(),
				description: $('#description').val()
			}
			,function(jsonObj) {
				loadBankTestList(currPageNo);
				$('#btnReset').click();
			}
			,'json');
	});
	
	$('#btnChange').click(function(){
		$.post(
				qbank.contextRoot + '/bank/update.ajax'
				,{
					no: $('#no').val(),
					title: $('#title').val()
				}
				,function(jsonObj) {
					loadBankTestList(currPageNo);
					$('#btnReset').click();
				}
				,'json');
	});
	
	$('#btnDelete').click(function(){
		deleteBankTest( $('#no').val() );
	});
	
	$('#btnReset').click(function(){
		changeFormState("new");
	});
	
	
	loadBankTestList(1);
});

function deleteBankTest(no) {
	$.getJSON(
			qbank.contextRoot + 
				'/bank/delete.ajax?no=' + no,
			function(jsonObj) {
				var result = jsonObj.ajaxResult;
				if (result.status == "ok") {
					loadBankTestList(currPageNo);
					$('#btnReset').click();
				}
			});
}

function loadBankTestList(pageNo) {
	$.getJSON(
			qbank.contextRoot + 
				'/bank/list.ajax?pageNo=' + pageNo + 
				'&pageSize=' + pageSize, 
			function(jsonObj){
				var result = jsonObj.ajaxResult;
				
				if (result.data.length > 0) {
					var table = $('#bankTestList');
					$('.dataRow').remove();
					$.each(result.data, function(index, test){
						$('<tr>')
							.addClass("dataRow")
							.append('<td>' + test.no + '</td>')
							.append( $('<td>')
								.append( $('<a>')
									.addClass('titleLink')
									.attr('data-no', 	test.no)
									.text(test.title) 
							))							
							.append('<td>' + test.qty + ' 문항 </td>')
							.append('<td>' + test.startdate + ' ~ ' + test.enddate + '</td>')
							.append('<td>' + 
									((test.useyn == 1) ? '사용' : '미사용') 
										+ '</td>')
							.append( $('<td>')
								.append( $('<button>삭제</button>')
									.addClass('rowDelBtn')
									.addClass('btn')
									.addClass('btn-danger')
									.attr('data-no',test.no)
							))
							.appendTo(table);
					});
					currPageNo = pageNo;
					$('#currPageNo').text(pageNo);
					$('#btnReset').click();
				}
			});
}

function changeFormState(state) {
	if (state == "update") {
		$('.updateForm').css('display', '');
		$('.newForm').css('display', 'none');
	} else {
		$('.updateForm').css('display', 'none');
		$('.newForm').css('display', '');
	}
}



