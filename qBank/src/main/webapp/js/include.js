function qbank() {}

qbank.getContextRootPath = function() {
	var currPath = location.pathname;

	var end = currPath.indexOf('/', 1);
	return currPath.substring(0, end);
}
qbank.contextRoot = qbank.getContextRootPath();



$(document).ready(function(){
	$('#btop').load(qbank.contextRoot + '/header.html');
	$('#bfooter').load(qbank.contextRoot + '/footer.html');
	
	


	
	
	
	
	

});