//your JS code here. If required.
function daysOfYear(year) {
	if (year % 400 === 0) {
		return 366;
	} else if (year % 100 === 0){
		return 365;
	}  else if(year % 4 === 0){
		return 366;
	} else {
		return 365;
	}
}
const year = parseInt(prompt("Enter a year"));
daysOfYear(year);