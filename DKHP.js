//var HoTen = document.getElementById("HoTen").value;
//var MSSV = document.getElementById("MSSV").value;
//var Lop = document.getElementById("Lop").value;
//var fun = document.getElementById("form").elements.namedItem("HoTen").value;

var i = 0;

function func() {
    var HoTen = document.getElementById("HoTen").value;
    var MSSV = document.getElementById("MSSV").value;
    var Lop = document.getElementById("Lop").value;
    addToTable(HoTen, MSSV, Lop);
    i++;
}

function addToTable(ele1, ele2, ele3) {
    var table = document.getElementById('addHere');
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = ele1;
    cell2.innerHTML = ele2;
    cell3.innerHTML = ele3;
}