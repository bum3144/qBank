function qbank() {}
qbank.getContextRootPath = function() {
	var currPath = location.pathname;
	console.log(currPath);

	var end = currPath.indexOf('/', 1);
	return currPath.substring(0, end);
}
qbank.contextRoot = qbank.getContextRootPath();

$(document).ready(function(){
	$('#btop1').load(qbank.contextRoot + '/headerTEST.html');
	$('#bfooter').load(qbank.contextRoot + '/footer.html');
});