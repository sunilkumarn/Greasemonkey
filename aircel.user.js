// ==UserScript==
// @name          Hello World
// @description   example script 
// @include 	  http://10.7.2.104:8012/campaign
// @include	  http://123.238.41.13:6701/campaign*
// @include	  http://123.238.41.13:6701/campaign*
// ==/UserScript==


var newElement, thisElement, allElements, flag=1;
var checkElements = [], check_count = 0, idvalue = 0;

function place_checks(event){
	if(check_count > 0){
		return ;
	}
	allElements = document.getElementsByTagName('tr');
	for (var i = 2 , j = 0; i < allElements.length; i++ , j++) {
		    thisElement = allElements[i];
		    newElement = document.createElement('input');
		    newElement.type = 'checkbox';
		    newElement.id = j;
		    checkElements[j]=newElement;
		    thisElement.parentNode.insertBefore(newElement, thisElement);
	}
	check_count = check_count + 1;
}


function click_checks1(event){
		document.getElementById('2').addEventListener('click', function(e) {
			if(document.getElementById('2').checked)
				alert('Please confirm the Sender with the Manager');
				}
		, true);
		}


function click_checks2(event){
		document.getElementById('3').addEventListener('click', function(e) {
			if(document.getElementById('3').checked)
				alert('Please confirm the Verbiage with the Manager');
				}
		, true);
		}


function click_checks3(event){
		document.getElementById('8').addEventListener('click', function(e) {
			if(document.getElementById('8').checked)
				alert('Please confirm the Receiver(s) with the Manager');
				}
		, true);
		}

function check_checks(){
	if(checkElements.length == 0)
		return 0;
	for(var i = 0; i<checkElements.length; i++) {
		thisElement = checkElements[i];		
		if(thisElement.checked) {
			continue;
		}
		else {
			flag = 0;
			return flag;
		}
	}
	return 1;
}

function newsubmit(event) {
	    alert('Please Cross-Check the informations you have entered');
}



document.getElementById('bulkform').addEventListener('submit', function(e) {
		     // stop the event before it gets to the element and causes onsubmit to
		     // get called.
			
			if(check_checks() == 0) {
				e.stopPropagation( );
				// stop the form from submitting
				e.preventDefault( );
				newsubmit(e);
				place_checks(e);
				click_checks1(e);
				click_checks2(e);
				click_checks3(e);
				}
			}
		, true);
