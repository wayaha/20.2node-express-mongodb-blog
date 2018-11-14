/*
* @Author: Administrator
* @Date:   2018-11-13 14:07:23
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-14 18:36:23
*/

'use strict';

var eleAs = document.querySelectorAll('nav>span');
eleAs.forEach(item => {
	var targetA = item.children[0];
	var pathname = location.pathname.replace(/\//, '');
	pathname = pathname === '' ? 'home' : pathname;
	if (targetA.title === pathname) {
		targetA.style.color = '#488ff9';
	}
});

var deleteData = function(event, id) {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	} else {
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			document.innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("POST", "/del", true);
	xmlhttp.send();
}
