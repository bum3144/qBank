var currPageNo = 1;	// 현재 페이지 (pageNum)
var pageSize = 10;	// 페이지에 보여줄 갯수 (list)



$(document).ready(function(){

	$('#prevPage').click(function(event){
		if (currPageNo > 1) {
			loadBankAddList(currPageNo - 1);
		}
	});

	$('#nextPage').click(function(event){
		loadBankAddList(currPageNo + 1);
	});
	
	/* 시험지 세팅 삭제 */
	$(document).on('click', 'button.rowDelBtn', function(){
		deleteBankTest( $(this).attr('data-code') );
	});
	
	/* 시험지 세팅 상세보기 */
	$(document).on('click', 'a.titleLink', function(){
		$.getJSON(
			qbank.contextRoot + 
				'/bank/detail.ajax?code=' + 
				$(this).attr('data-code'),
			function(jsonObj) {
				var result = jsonObj.ajaxResult;
				if (result.status == "ok") {
					$('#tcode').val(result.data.code);
					$('#title').val(result.data.title);

					testAmount(result.data.qty); // 문제수
					
					/* select box value값으로 선택하게 함 */
					$("#position").val(result.data.position).attr("selected", "selected");					
					$("#texposition").val(result.data.texposition).attr("selected", "selected");					
					$("#useyn").val(result.data.useyn).attr("selected", "selected");
					
					$('#startdate').val(result.data.startdate);
					$('#enddate').val(result.data.enddate);

					$('#acc2').click(); // 상세보기 페이지 열기(아코디언)
					
					$('#newCode').hide(); // 새코드 생성 버튼 숨기기					
					changeFormState("update");
				} else {
					console.log('해당 시험지가 없습니다.');
				}
			});
	});
	
	/* 새시험지 세팅 만들기 */
	$('#btnAdd').click(function(){
		if(!$('#tcode').val()){
			$("#notcode").slideUp( )
				.text('◀코드를 생성하세요')
				.css({
					'color':'red',
					'font-size':'12px'
					})

			return;		
		}
		if (!$('#title').val()){
			$("#noTitle").slideUp( )
				.text('제목을 입력해야 합니다')
				.css({
					'color':'red',
					'font-size':'12px'
					}).delay( 100 ).fadeIn( 400 );
			$("#title").keypress(function() {
				$("#noTitle").remove();
			});
			return;
		}
		if(
			($('#startdate').val() && !$('#enddate').val()) ||
			(!$('#startdate').val() && $('#enddate').val()))
		{
			$("#finishText").slideUp( )
			.text('응시 기간을 설정할 경우 시작일과 종료일을 모두 등록하셔야 합니다.')
			.css({
				'color':'red',
				'font-size':'12px'
				}).delay( 100 ).fadeIn( 400 );

			return;
		}
		
		$.post(
			qbank.contextRoot + '/bank/insert.ajax'
			,{
				code: $('#tcode').val(),
				title: $('#title').val(),
				qty: $('#amount').val(),
				position: $('#position').val(),
				texposition: $('#texposition').val(),
				useyn: $('#useyn').val(),
				startdate: $('#startdate').val(),
				enddate: $('#enddate').val()
			}
			,function(jsonObj) {
				loadBankAddList(currPageNo);
				$('#btnReset').click();
				$('#acc1').click(); // 리스트 페이지 보기 (아코디언)
			}
			,'json');
	});
	
	/* 시험지 세팅 수정 */
	$('#btnChange').click(function(){
		$.post(
				qbank.contextRoot + '/bank/update.ajax'
				,{
					code: $('#tcode').val(),
					title: $('#title').val(),
					qty: $('#amount').val(),
					position: $('#position').val(),
					texposition: $('#texposition').val(),
					useyn: $('#useyn').val(),
					startdate: $('#startdate').val(),
					enddate: $('#enddate').val()
				}
				,function(jsonObj) {
					loadBankAddList(currPageNo);
					$('#btnReset').click();
					$('#acc1').click(); // 리스트 페이지 보기 (아코디언)
				}
				,'json');
	});
	
	$('#btnDelete').click(function(){
		deleteBankTest( $('#tcode').val() );
	});
	
	$('#btnReset').click(function(){
		changeFormState("new");
	});
	
	
	loadBankAddList(1);
});

function deleteBankTest(code) {
	$.getJSON(
			qbank.contextRoot + 
				'/bank/delete.ajax?code=' + code,
			function(jsonObj) {
				var result = jsonObj.ajaxResult;
				if (result.status == "ok") {
					loadBankAddList(currPageNo);
					$('#btnReset').click();
					//$('#acc1').click(); // 리스트 페이지 보기 (아코디언)
				}
			});
}

//######### 문제 은행 List #########//
function loadBankAddList(pageNo) {
	
	
	$.getJSON(
			qbank.contextRoot + 
				'/bankadd/list.ajax?pageNo=' + pageNo + 
				'&pageSize=' + pageSize, 
			function(jsonObj){
				var result = jsonObj.ajaxResult;
				
				console.log(jsonObj);
				count = result.data.count;
				
				if (result.status == 'ok' && result.data.list.length > 0) {
					var table = $('#bankList');
					$('.dataRow').remove();
					$.each(result.data, function(index, obj){
						$.each(obj,function(index,test){

							$('<tr>')
								.addClass("dataRow")
								.append('<td>' + test.no + '</td>')
								.append( $('<td>')
									.append( $('<a>').css('cursor','pointer')
										.addClass('titleLink')
										.attr('data-code', 	test.code)
										.text(test.title)
								))							
								.append('<td>' + test.qty  + ' 문항 </td>')
								.append('<td>' + 
										((!test.startdate) ? '무제한' :									
										test.startdate + ' ~ ' + test.enddate) 									
										+ '</td>')
								.append('<td>' + 
										((test.useyn == 1) ? '사용' : '미사용') 
											+ '</td>')
								.append( $('<td>')
									.append( $('<button>삭제</button>')
										.addClass('rowDelBtn btn btn-danger btn-xs')
										.attr('data-code',test.code)
								)).css({
									   'color':'#969a9e',
									   'font-style':'normal',
									   'font-size' : '13px',
								   	   'vertical-align' : 'baseline'
									   })
								.appendTo(table);
						});
					});
					currPageNo = pageNo;

					// 페이징 처리 
					var bPageNumList = 10; // 블록에 나타낼 번호 갯수
					var block = Math.ceil(currPageNo/bPageNumList);	// Math.ceil(currPageNo/bPageNumList) 1.2든 1.7이든 다 2로 계산
					var count = result.data.count;					// 전체 개시물 수
					var totalPage =  Math.ceil(count/pageSize);		// 전체 페이지 수 Math.ceil(count/pageSize); 
					var bStartPage = ((block-1)*bPageNumList)+1;	// 현재 블럭의 시작 페이지 번호 ((block-1)*bPageNumList)+1; 
					var bEndPage = bStartPage+bPageNumList-1; 		// 현재 블럭의 마지막 페이지 번호 bStartPage+bPageNumList-1;
					var blockHtml = "";
					 for(var j=bStartPage; j<=bEndPage; j++){
					 	if(currPageNo == j){
					 		blockHtml+= "<font size=2 color=red>" + j + "</font>&nbsp;";
					 	}else{ //서로 다르다면
					 		if(j <= totalPage){
					 		blockHtml+= "<font size=2><a href='#' class='blockId' data-id='"+j+"'>" + j + "</a></font>&nbsp;";
					 		}
					 	}
					 }					
					 $('#currPageNo').html(blockHtml);	


					// 페이지 번호 클릭이동
					$('.blockId').click(function(event){
						loadBankAddList(currPageNo=$(this).attr('data-id'));
					});		
						
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


/* 취소버튼 클릭시 동작 */
$('#btnReset').on('click',function(event){
	event.preventDefault();
	createCode();	// 새코드 생성
	testAmount(1);	// 문제수 초기화
	$('#title').val('');  
	$("#position option:eq(1)").attr("selected", "selected");
	$("#texposition option:eq(1)").attr("selected", "selected");
	$("#useyn option:eq(1)").attr("selected", "selected");

	$('#startdate').val('');
	$('#enddate').val('');
	$('#finishText').text('응시 가능 기간을 설정하시려면 날짜 입력창을 클릭하시면 달력을 확인할 수 있습니다.')
	.css({
		'color':'gray',
		'font-size':'12px'
		});

});

