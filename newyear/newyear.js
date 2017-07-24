function calculateDaysToNY() {
	var d = new Date();
	var newYear = new Date(d.getFullYear(), 11, 31);
	var day = 86400000;
	if (d.getMonth() === 11 && d.getDate() === 31) {
		alert('Happy New Year!');
	}
	console.log(Math.ceil((newYear.getTime() - d.getTime()) / day));
};

calculateDaysToNY();