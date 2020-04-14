//the array contains all "Comp Code" achronyms, that will disapear
var array = ["ISI", "SME", "AME", "PRH", "MSO", "W42", "SA3"];
var col = [0,4,6,7,8];

var tbl = document.body.getElementsByTagName('tbody');

//i starts at 1 cause of the firat row is just 1 cell (inluding "Comp Code" etc.)
/*
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
*/

//the array contains all "Comp Code" achronyms, that will disapear
var array = ["ISI", "SME", "AME", "PRH", "MSO", "W42", "SA3"];

var tbl = document.getElementsByTagName('tbody');
tbl[1].style.background = "white";
for (var i = 0, row; row = tbl[1].rows[i]; i++) {
    //row.style.background = "red";    
    //row.cells[0].style.background = "grey";
    var a = row.cells[0].textContent;
    //row.cells[0].textContent = a.trim() + 'test'
    console.log(a);
    // check if row should not be seen
    if (array.indexOf(a.trim()) > -1) {
    	//console.log(row[1])
        row.style.display = "none";  
    };
	row.cells[9].style.display = "none"; 
	row.cells[8].style.display = "none";  
	row.cells[7].style.display = "none";  
	row.cells[4].style.display = "none";  
	row.cells[0].style.display = "none";  
}

/*
var tbl = document.body.getElementsByTagName('thead');
row = tbl[0].getElementsByTagName('th');
row[0].style.display = "none";
row[7].style.display = "none";
*/

var tbl = document.body.getElementsByTagName('thead');
row = tbl[0].getElementsByTagName('tr');
row[1].style.display = "none";
row = tbl[0].getElementsByTagName('th');
	row[9].style.display = "none";  
	row[8].style.display = "none";  
	row[7].style.display = "none";  
	row[4].style.display = "none";  
	row[0].style.display = "none";  