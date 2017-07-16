function convertCToF(c) {
	
	var f = (c * 1.8) + 32;
	var rslt = f + '\xB0F';
	console.log(rslt);
};

convertCToF(56);

function convertFToC(f) {
	var f = f;
	var c = (f - 32) / 1.8;
	var rslt = c + '\xB0C';
	console.log(rslt);
};

convertFToC(122);