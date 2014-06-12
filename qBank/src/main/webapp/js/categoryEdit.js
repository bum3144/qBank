$(document).ready(function(){
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
				$.each(result.data, function(index, obj) {
					console.log(result.data);
					$.each(obj, function(index, test) {
						$('#select1').append('<option value="' +test.parent+ '">' 
								+ test.name + '</option>');
					});
				});
			}	
		},
		error: function(errorThrown){
			console.log('1카테고리 박스 에러 : ' + errorThrown);
		}
	});
	

	
	$('#select1').change(function () {	
		
		optionRemove1();
		optionRemove2();
			
		$('#select2').show();
		$('#select3').hide();
		$.ajax({
			type: "GET",
			url: qbank.contextRoot + '/selectcate/second.ajax?parent='+$('#select1').val(),
			dataType: 'json', 
			success: function (result) {
				var result = result.ajaxResult;
				if (result.status == 'ok') {
					$.each(result.data, function(index, obj) {
						$('#select2').append('<option value="">- 2차 선 택 -</option>');
						$.each(obj, function(index, test) {
							$('#select2').append('<option value="' +test.seq+ '">' 
									+ test.name + '</option>');
						});
					});
				}	
			},
			error: function(errorThrown){
				console.log('2카테고리 박스 에러 : ' + errorThrown);
			}
		});	
	});	
	

	
	$('#select2').change(function () {	
		
		optionRemove2();
		
		$('#select3').show();
		$.ajax({
			type: "GET",
			url: qbank.contextRoot + '/selectcate/third.ajax?parent=' 
					+ $('#select1').val() + '&seq=' + $('#select2').val(),
			dataType: 'json', 
			success: function (result) {
				var result = result.ajaxResult;
				if (result.status == 'ok') {
					$.each(result.data, function(index, obj) {
						$('#select3').append('<option value="">- 3차 선 택 -</option>');
						$.each(obj, function(index, test) {
							$('#select3').append('<option value="' +test.depth+ '">' 
									+ test.name + '</option>');
						});
					});
				}	
			},
			error: function(errorThrown){
				console.log('3카테고리 박스 에러 : ' + errorThrown);
			}
		});	
	});	

	function optionRemove1(){
		$("select[id='select2']").find('option').each(function() {
			$(this).remove();
		 });
	}

	function optionRemove2(){
		$("select[id='select3']").find('option').each(function() {
			$(this).remove();
		 });
	}
	
	
});