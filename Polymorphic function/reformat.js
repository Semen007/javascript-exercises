function reformatDate(date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) {
		month = '0' + month;
	};
	if (day.length < 2) {
		day = '0' + day;
	};

	console.log([year, month, day].join('-'));
}

reformatDate(1496851371222);