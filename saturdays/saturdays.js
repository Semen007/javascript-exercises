function calculateSaturdays(a, b) {
	var year;
	for (year = a; year <= b; year++) {
    	var d = new Date(year, 0, 1);
    if (d.getDay() === 5 )
        console.log(year);
    }
};

calculateSaturdays(2001, 2020);