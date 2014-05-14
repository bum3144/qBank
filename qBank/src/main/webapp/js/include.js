function bit() {}
bit.getContextRootPath = function() {
	var currPath = location.pathname;
	console.log(currPath);

	var end = currPath.indexOf('/', 1);
	return currPath.substring(0, end);
}
bit.contextRoot = bit.getContextRootPath();

$(document).ready(function(){
	$('#btop').load(bit.contextRoot + '/header.html');
	$('#bfooter').load(bit.contextRoot + '/footer.html');
});