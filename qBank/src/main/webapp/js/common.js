function bit() {}

bit.getContextRootPath = function() {
	var currPath = location.pathname;
	var end = currPath.indexOf('/', 1);
	return currPath.substring(0, end);
}

bit.contextRoot = bit.getContextRootPath();


/*
** 폼
**
** <input type="text" numberonly="true" /> // 숫자만 입력 가능한 텍스트박스
**
** <input type="text" datetimeonly="true" /> // 숫자, 콜론(:), 하이픈(-)만 입력 가능한 텍스트박스
*/
$(function(){
	$(document).on("keyup", "input:text[numberOnly]", function() {$(this).val( $(this).val().replace(/[^0-9]/gi,"") );});
	$(document).on("keyup", "input:text[datetimeOnly]", function() {$(this).val( $(this).val().replace(/[^0-9:\-]/gi,"") );});
	$(document).on("keyup", "input:text[textOnly]",function() {$(this).val( $(this).val().replace( /[^ㄱ-ㅎㅏ-ㅣ가-힣A-za-z\s]/gi,"") );});
});