//the array contains all "Comp Code" achronyms, that will disapear
var array = ["ISI", "SME", "AME", "PRH", "MSO"];

var tbl = document.body.getElementsByTagName('tbody');

//i starts at 1 cause of the firat row is just 1 cell (inluding "Comp Code" etc.)
//for (var i = 1; i < tbl.length; i++) {
for (var i = tbl.length - 1; i > -1; i--) {
	row = tbl[i].getElementsByTagName('td');
    row[0].style.display = "none";
    row[7].style.display = "none";
    //console.log(row[0].innerHTML);
    // check if purchased = 0
    if (row[2].innerHTML == 0) {
        tbl[i].style.display = "none";
    }
    // check if row should not be seen
    if (array.indexOf(row[0].innerHTML.trim()) > -1) {
    	//console.log(row[1])
		tbl[i].style.display = "none";
    };   
};

var tbl = document.body.getElementsByTagName('thead');
row = tbl[0].getElementsByTagName('th');
row[0].style.display = "none";
row[7].style.display = "none";
