 function createTable(rows, columns){
    var tbl = document.createElement('table'),
    	thd = document.createElement('thead'),
    	tbd = document.createElement('tbody'),
    	trh = thd.insertRow();

    tbl.appendChild(thd);
    tbl.appendChild(tbd);

    tbl.style.width  = '100px';
    tbl.style.border = '1px solid black';

    
    for(var i = 0; i < rows; i++){
        var tr = tbd.insertRow();
        for(var j = 0; j < columns; j++){
            var td = tr.insertCell();
            td.appendChild(document.createTextNode((i+1)+'.'+(j+1)));
            td.style.border = '1px solid #5d5d5d';
            td.style.textAlign = 'center';
        }
    }

    for(var h = 0; h < columns; h++){
        	var th = trh.appendChild(document.createElement('th'));
        	th.appendChild(document.createTextNode('column'+(h+1)));
        	th.style.border = '1px solid #5d5d5d';
    }

    document.body.appendChild(tbl);
}