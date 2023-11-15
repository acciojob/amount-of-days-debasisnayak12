//your JS code here. If required.
function daysOfYear(year) {
	if(year % 4 === 0){
		alert(366);
	}else{
	   alert(365);
	}   
}
const year = parseInt(prompt("Enter a year"));
daysOfYear(year);