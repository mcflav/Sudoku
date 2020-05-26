
//Input fields (boxes) in table rows.
var rowColor12 = document.getElementById("row12");
var rowColor13 = document.getElementById("row13");
var rowColor15 = document.getElementById("row15");
var rowColor16 = document.getElementById("row16");
var rowColor17 = document.getElementById("row17");
var rowColor18 = document.getElementById("row18");
var rowColor21 = document.getElementById("row21");
var rowColor22 = document.getElementById("row22");
var rowColor26 = document.getElementById("row26");
var rowColor27 = document.getElementById("row27");
var rowColor28 = document.getElementById("row28");
var rowColor30 = document.getElementById("row30");
var rowColor33 = document.getElementById("row33");
var rowColor34 = document.getElementById("row34");
var rowColor35 = document.getElementById("row35");
var rowColor36 = document.getElementById("row36");
var rowColor38 = document.getElementById("row38");
var rowColor41 = document.getElementById("row41");
var rowColor42 = document.getElementById("row42");
var rowColor43 = document.getElementById("row43");
var rowColor45 = document.getElementById("row45");
var rowColor46 = document.getElementById("row46");
var rowColor47 = document.getElementById("row47");
var rowColor51 = document.getElementById("row51");
var rowColor52 = document.getElementById("row52");
var rowColor54 = document.getElementById("row54");
var rowColor56 = document.getElementById("row56");
var rowColor57 = document.getElementById("row57");
var rowColor61 = document.getElementById("row61");
var rowColor62 = document.getElementById("row62");
var rowColor63 = document.getElementById("row63");
var rowColor65 = document.getElementById("row65");
var rowColor66 = document.getElementById("row66");
var rowColor67 = document.getElementById("row67");
var rowColor70 = document.getElementById("row70");
var rowColor72 = document.getElementById("row72");
var rowColor73 = document.getElementById("row73");
var rowColor74 = document.getElementById("row74");
var rowColor75 = document.getElementById("row75");
var rowColor78 = document.getElementById("row78");
var rowColor80 = document.getElementById("row80");
var rowColor81 = document.getElementById("row81");
var rowColor82 = document.getElementById("row82");
var rowColor86 = document.getElementById("row86");
var rowColor87 = document.getElementById("row87");
var rowColor90 = document.getElementById("row90");
var rowColor91 = document.getElementById("row91");
var rowColor92 = document.getElementById("row92");
var rowColor93 = document.getElementById("row93");
var rowColor95 = document.getElementById("row95");
var rowColor96 = document.getElementById("row96");

//Default table rows (boxes).
var row10 = document.getElementById("sudRow10");
var row11 = document.getElementById("sudRow11");
var row14 = document.getElementById("sudRow14");
var row20 = document.getElementById("sudRow20");
var row23 = document.getElementById("sudRow23");
var row24 = document.getElementById("sudRow24");
var row25 = document.getElementById("sudRow25");
var row31 = document.getElementById("sudRow31");
var row32 = document.getElementById("sudRow32");
var row37 = document.getElementById("sudRow37");
var row40 = document.getElementById("sudRow40");
var row44 = document.getElementById("sudRow44");
var row48 = document.getElementById("sudRow48");
var row50 = document.getElementById("sudRow50");
var row53 = document.getElementById("sudRow53");
var row55 = document.getElementById("sudRow55");
var row58 = document.getElementById("sudRow58");
var row60 = document.getElementById("sudRow60");
var row64 = document.getElementById("sudRow64");
var row68 = document.getElementById("sudRow68");
var row71 = document.getElementById("sudRow71");
var row76 = document.getElementById("sudRow76");
var row77 = document.getElementById("sudRow77");
var row83 = document.getElementById("sudRow83");
var row84 = document.getElementById("sudRow84");
var row85 = document.getElementById("sudRow85");
var row88 = document.getElementById("sudRow88");
var row94 = document.getElementById("sudRow94");
var row97 = document.getElementById("sudRow97");
var row98 = document.getElementById("sudRow98");

//Arrays for each row.
var sudRow1;
var sudRow2;
var sudRow3;
var sudRow4;
var sudRow5;
var sudRow6;
var sudRow7;
var sudRow8;
var sudRow9;

var blnForceGreen;
var count = 0;
var blnSecondEntry;

var playGame = document.getElementById("play");
var restart = document.getElementById("clear");
var clearItems = document.getElementById("clearItems");

//Load empty game and instructions.
window.onload = DisableTableInput();




function DisableTableInput() {
    rowColor12.disabled = true;
    rowColor13.disabled = true;
    rowColor15.disabled = true;
    rowColor16.disabled = true;
    rowColor17.disabled = true;
    rowColor18.disabled = true;
    rowColor21.disabled = true;
    rowColor22.disabled = true;
    rowColor26.disabled = true;
    rowColor27.disabled = true;
    rowColor28.disabled = true;
    rowColor30.disabled = true;
    rowColor33.disabled = true;
    rowColor34.disabled = true;
    rowColor35.disabled = true;
    rowColor36.disabled = true;
    rowColor38.disabled = true;
    rowColor41.disabled = true;
    rowColor42.disabled = true;
    rowColor43.disabled = true;
    rowColor45.disabled = true;
    rowColor46.disabled = true;
    rowColor47.disabled = true;
    rowColor51.disabled = true;
    rowColor52.disabled = true;
    rowColor54.disabled = true;
    rowColor56.disabled = true;
    rowColor57.disabled = true;
    rowColor61.disabled = true;
    rowColor62.disabled = true;
    rowColor63.disabled = true;
    rowColor65.disabled = true;
    rowColor66.disabled = true;
    rowColor67.disabled = true;
    rowColor70.disabled = true;
    rowColor72.disabled = true;
    rowColor73.disabled = true;
    rowColor74.disabled = true;
    rowColor75.disabled = true;
    rowColor78.disabled = true;
    rowColor80.disabled = true;
    rowColor81.disabled = true;
    rowColor82.disabled = true;
    rowColor86.disabled = true;
    rowColor87.disabled = true;
    rowColor90.disabled = true;
    rowColor91.disabled = true;
    rowColor92.disabled = true;
    rowColor93.disabled = true;
    rowColor95.disabled = true;
    rowColor96.disabled = true;
    playGame.disabled = true;
    restart.disabled = true;
    clearItems.disabled = true;


}

function LoadGame() {

    //Load default numbers into table.
   
    sudRow1 = ["5", "3", "", "", "7", "", "", "", ""];
    sudRow2 = ["6", "", "", "1", "9", "5", "", "", ""];
    sudRow3 = ["", "9", "8", "", "", "", "", "6", ""];
    sudRow4 = ["8", "", "", "", "6", "", "", "", "3"];
    sudRow5 = ["4", "", "", "8", "", "3", "", "", "1"];
    sudRow6 = ["7", "", "", "", "2", "", "", "", "6"];
    sudRow7 = ["", "6", "", "", "", "", "2", "8", ""];
    sudRow8 = ["", "", "", "4", "1", "9", "", "", "5"];
    sudRow9 = ["", "", "", "", "8", "", "", "7", "9"];

    row10.innerHTML = sudRow1[0];
    row11.innerHTML = sudRow1[1];
    row14.innerHTML = sudRow1[4];
    row20.innerHTML = sudRow2[0];
    row23.innerHTML = sudRow2[3];
    row24.innerHTML = sudRow2[4];
    row25.innerHTML = sudRow2[5];
    row31.innerHTML = sudRow3[1];
    row32.innerHTML = sudRow3[2];
    row37.innerHTML = sudRow3[7];
    row40.innerHTML = sudRow4[0];
    row44.innerHTML = sudRow4[4];
    row48.innerHTML = sudRow4[8];
    row50.innerHTML = sudRow5[0];
    row53.innerHTML = sudRow5[3];
    row55.innerHTML = sudRow5[5];
    row58.innerHTML = sudRow5[8];
    row60.innerHTML = sudRow6[0];
    row64.innerHTML = sudRow6[4];
    row68.innerHTML = sudRow6[8];
    row71.innerHTML = sudRow7[1];
    row76.innerHTML = sudRow7[6];
    row77.innerHTML = sudRow7[7];
    row83.innerHTML = sudRow8[3];
    row84.innerHTML = sudRow8[4];
    row85.innerHTML = sudRow8[5];
    row88.innerHTML = sudRow8[8];
    row94.innerHTML = sudRow9[4];
    row97.innerHTML = sudRow9[7];
    row98.innerHTML = sudRow9[8];

    ColorInput();

    rowColor12.disabled = false;
    rowColor13.disabled = false;
    rowColor15.disabled = false;
    rowColor16.disabled = false;
    rowColor17.disabled = false;
    rowColor18.disabled = false;
    rowColor21.disabled = false;
    rowColor22.disabled = false;
    rowColor26.disabled = false;
    rowColor27.disabled = false;
    rowColor28.disabled = false;
    rowColor30.disabled = false;
    rowColor33.disabled = false;
    rowColor34.disabled = false;
    rowColor35.disabled = false;
    rowColor36.disabled = false;
    rowColor38.disabled = false;
    rowColor41.disabled = false;
    rowColor42.disabled = false;
    rowColor43.disabled = false;
    rowColor45.disabled = false;
    rowColor46.disabled = false;
    rowColor47.disabled = false;
    rowColor51.disabled = false;
    rowColor52.disabled = false;
    rowColor54.disabled = false;
    rowColor56.disabled = false;
    rowColor57.disabled = false;
    rowColor61.disabled = false;
    rowColor62.disabled = false;
    rowColor63.disabled = false;
    rowColor65.disabled = false;
    rowColor66.disabled = false;
    rowColor67.disabled = false;
    rowColor70.disabled = false;
    rowColor72.disabled = false;
    rowColor73.disabled = false;
    rowColor74.disabled = false;
    rowColor75.disabled = false;
    rowColor78.disabled = false;
    rowColor80.disabled = false;
    rowColor81.disabled = false;
    rowColor82.disabled = false;
    rowColor86.disabled = false;
    rowColor87.disabled = false;
    rowColor90.disabled = false;
    rowColor91.disabled = false;
    rowColor92.disabled = false;
    rowColor93.disabled = false;
    rowColor95.disabled = false;
    rowColor96.disabled = false;
    playGame.disabled = false;
    restart.disabled = false;
    clearItems.disabled = false;

}

function ChangeBackground(row) {
    if (row.style.backgroundColor != "green") {
        row.style.backgroundColor = "lightblue";
        blnSecondEntry = false;
    } else {
        row.style.backgroundColor = "lightblue";
        blnSecondEntry = true;
    }

    count += 1;
}

function ClearGame() {
    //clear input boxes.
    rowColor12.value = "";
    rowColor13.value = "";
    rowColor15.value = "";
    rowColor16.value = "";
    rowColor17.value = "";
    rowColor18.value = "";
    rowColor21.value = "";
    rowColor22.value = "";
    rowColor26.value = "";
    rowColor27.value = "";
    rowColor28.value = "";
    rowColor30.value = "";
    rowColor33.value = "";
    rowColor34.value = "";
    rowColor35.value = "";
    rowColor36.value = "";
    rowColor38.value = "";
    rowColor41.value = "";
    rowColor42.value = "";
    rowColor43.value = "";
    rowColor45.value = "";
    rowColor46.value = "";
    rowColor47.value = "";
    rowColor51.value = "";
    rowColor52.value = "";
    rowColor54.value = "";
    rowColor56.value = "";
    rowColor57.value = "";
    rowColor61.value = "";
    rowColor62.value = "";
    rowColor63.value = "";
    rowColor65.value = "";
    rowColor66.value = "";
    rowColor67.value = "";
    rowColor70.value = "";
    rowColor72.value = "";
    rowColor73.value = "";
    rowColor74.value = "";
    rowColor75.value = "";
    rowColor78.value = "";
    rowColor80.value = "";
    rowColor81.value = "";
    rowColor82.value = "";
    rowColor86.value = "";
    rowColor87.value = "";
    rowColor90.value = "";
    rowColor91.value = "";
    rowColor92.value = "";
    rowColor93.value = "";
    rowColor95.value = "";
    rowColor96.value = "";

    ColorInput();

    //clear data entered so new game can be started.
    sudRow1[2] = "";
    sudRow1[3] = "";
    sudRow1[5] = "";
    sudRow1[6] = "";
    sudRow1[7] = "";
    sudRow1[8] = "";
    sudRow2[1] = "";
    sudRow2[2] = "";
    sudRow2[6] = "";
    sudRow2[7] = "";
    sudRow2[8] = "";
    sudRow3[0] = "";
    sudRow3[3] = "";
    sudRow3[4] = "";
    sudRow3[5] = "";
    sudRow3[6] = "";
    sudRow3[8] = "";
    sudRow4[1] = "";
    sudRow4[2] = "";
    sudRow4[3] = "";
    sudRow4[5] = "";
    sudRow4[6] = "";
    sudRow4[7] = "";
    sudRow5[1] = "";
    sudRow5[2] = "";
    sudRow5[4] = "";
    sudRow5[6] = "";
    sudRow5[7] = "";
    sudRow6[1] = "";
    sudRow6[2] = "";
    sudRow6[3] = "";
    sudRow6[5] = "";
    sudRow6[6] = "";
    sudRow6[7] = "";
    sudRow7[0] = "";
    sudRow7[2] = "";
    sudRow7[3] = "";
    sudRow7[4] = "";
    sudRow7[5] = "";
    sudRow7[8] = "";
    sudRow8[0] = "";
    sudRow8[1] = "";
    sudRow8[2] = "";
    sudRow8[6] = "";
    sudRow8[7] = "";
    sudRow9[0] = "";
    sudRow9[1] = "";
    sudRow9[2] = "";
    sudRow9[3] = "";
    sudRow9[5] = "";
    sudRow9[6] = "";
}    
    
function PlayGame() {
    if (count > 1) {
        alert("Please only complete one box at a time. You can't complete multiple boxes on one Play.");
        ColorInput();
        ClearRed();
        count = 0;
    }else if (rowColor12.value.length == 0 && rowColor13.value.length == 0 && rowColor15.value.length == 0 &&
        rowColor16.value.length == 0 && rowColor17.value.length == 0 && rowColor18.value.length == 0 &&
        rowColor21.value.length == 0 && rowColor22.value.length == 0 && rowColor26.value.length == 0 &&
        rowColor27.value.length == 0 && rowColor28.value.length == 0 && rowColor30.value.length == 0 &&
        rowColor33.value.length == 0 && rowColor34.value.length == 0 && rowColor35.value.length == 0 &&
        rowColor36.value.length == 0 && rowColor38.value.length == 0 && rowColor41.value.length == 0 &&
        rowColor42.value.length == 0 && rowColor43.value.length == 0 && rowColor45.value.length == 0 &&
        rowColor46.value.length == 0 && rowColor47.value.length == 0 && rowColor51.value.length == 0 &&
        rowColor52.value.length == 0 && rowColor54.value.length == 0 && rowColor56.value.length == 0 &&
        rowColor57.value.length == 0 && rowColor61.value.length == 0 && rowColor62.value.length == 0 &&
        rowColor63.value.length == 0 && rowColor65.value.length == 0 && rowColor66.value.length == 0 &&
        rowColor67.value.length == 0 && rowColor70.value.length == 0 && rowColor72.value.length == 0 &&
        rowColor73.value.length == 0 && rowColor74.value.length == 0 && rowColor75.value.length == 0 &&
        rowColor78.value.length == 0 && rowColor80.value.length == 0 && rowColor81.value.length == 0 &&
        rowColor82.value.length == 0 && rowColor86.value.length == 0 && rowColor87.value.length == 0 &&
        rowColor90.value.length == 0 && rowColor91.value.length == 0 && rowColor92.value.length == 0 &&
        rowColor93.value.length == 0 && rowColor95.value.length == 0 && rowColor96.value.length == 0) {

        alert("Please Enter A Number Between 1 and 9 Into The Empty Red Boxes To Play.");
        ColorInput();
        

    } else if (isNaN(rowColor12.value) || isNaN(rowColor13.value) || isNaN(rowColor15.value) ||
        isNaN(rowColor16.value) || isNaN(rowColor17.value) || isNaN(rowColor18.value) ||
        isNaN(rowColor21.value) || isNaN(rowColor22.value) || isNaN(rowColor26.value) ||
        isNaN(rowColor27.value) || isNaN(rowColor28.value) || isNaN(rowColor30.value) ||
        isNaN(rowColor33.value) || isNaN(rowColor34.value) || isNaN(rowColor35.value) ||
        isNaN(rowColor36.value) || isNaN(rowColor38.value) || isNaN(rowColor41.value) ||
        isNaN(rowColor42.value) || isNaN(rowColor43.value) || isNaN(rowColor45.value) ||
        isNaN(rowColor46.value) || isNaN(rowColor47.value) || isNaN(rowColor51.value) ||
        isNaN(rowColor52.value) || isNaN(rowColor54.value) || isNaN(rowColor56.value) ||
        isNaN(rowColor57.value) || isNaN(rowColor61.value) || isNaN(rowColor62.value) ||
        isNaN(rowColor63.value) || isNaN(rowColor65.value) || isNaN(rowColor66.value) ||
        isNaN(rowColor67.value) || isNaN(rowColor70.value) || isNaN(rowColor72.value) ||
        isNaN(rowColor73.value) || isNaN(rowColor74.value) || isNaN(rowColor75.value) ||
        isNaN(rowColor78.value) || isNaN(rowColor80.value) || isNaN(rowColor81.value) ||
        isNaN(rowColor82.value) || isNaN(rowColor86.value) || isNaN(rowColor87.value) ||
        isNaN(rowColor90.value) || isNaN(rowColor91.value) || isNaN(rowColor92.value) ||
        isNaN(rowColor93.value) || isNaN(rowColor95.value) || isNaN(rowColor96.value)) {

        alert("You Didn't Enter A Numeric Value In One Of the Boxes. Please Enter A Numeric Value");
        ColorInput();
        ClearRed();

    } else if (((rowColor12.value <= 0 || rowColor12.value > 9) && (rowColor12.value.length != 0)) ||
        ((rowColor13.value <= 0 || rowColor13.value > 9) && (rowColor13.value.length != 0)) ||
        ((rowColor15.value <= 0 || rowColor15.value > 9) && (rowColor15.value.length != 0)) ||
        ((rowColor16.value <= 0 || rowColor16.value > 9) && (rowColor16.value.length != 0)) ||
        ((rowColor17.value <= 0 || rowColor17.value > 9) && (rowColor17.value.length != 0)) ||
        ((rowColor18.value <= 0 || rowColor18.value > 9) && (rowColor18.value.length != 0)) ||
        ((rowColor21.value <= 0 || rowColor21.value > 9) && (rowColor21.value.length != 0)) ||
        ((rowColor22.value <= 0 || rowColor22.value > 9) && (rowColor22.value.length != 0)) ||
        ((rowColor26.value <= 0 || rowColor26.value > 9) && (rowColor26.value.length != 0)) ||
        ((rowColor27.value <= 0 || rowColor27.value > 9) && (rowColor27.value.length != 0)) ||
        ((rowColor28.value <= 0 || rowColor28.value > 9) && (rowColor28.value.length != 0)) ||
        ((rowColor30.value <= 0 || rowColor30.value > 9) && (rowColor30.value.length != 0)) ||
        ((rowColor33.value <= 0 || rowColor33.value > 9) && (rowColor33.value.length != 0)) ||
        ((rowColor34.value <= 0 || rowColor34.value > 9) && (rowColor34.value.length != 0)) ||
        ((rowColor35.value <= 0 || rowColor35.value > 9) && (rowColor35.value.length != 0)) ||
        ((rowColor36.value <= 0 || rowColor36.value > 9) && (rowColor36.value.length != 0)) ||
        ((rowColor38.value <= 0 || rowColor38.value > 9) && (rowColor38.value.length != 0)) ||
        ((rowColor41.value <= 0 || rowColor41.value > 9) && (rowColor41.value.length != 0)) ||
        ((rowColor42.value <= 0 || rowColor42.value > 9) && (rowColor42.value.length != 0)) ||
        ((rowColor43.value <= 0 || rowColor43.value > 9) && (rowColor43.value.length != 0)) ||
        ((rowColor45.value <= 0 || rowColor45.value > 9) && (rowColor45.value.length != 0)) ||
        ((rowColor46.value <= 0 || rowColor46.value > 9) && (rowColor46.value.length != 0)) ||
        ((rowColor47.value <= 0 || rowColor47.value > 9) && (rowColor47.value.length != 0)) ||
        ((rowColor51.value <= 0 || rowColor51.value > 9) && (rowColor51.value.length != 0)) ||
        ((rowColor52.value <= 0 || rowColor52.value > 9) && (rowColor52.value.length != 0)) ||
        ((rowColor54.value <= 0 || rowColor54.value > 9) && (rowColor54.value.length != 0)) ||
        ((rowColor56.value <= 0 || rowColor56.value > 9) && (rowColor56.value.length != 0)) ||
        ((rowColor57.value <= 0 || rowColor57.value > 9) && (rowColor57.value.length != 0)) ||
        ((rowColor61.value <= 0 || rowColor61.value > 9) && (rowColor61.value.length != 0)) ||
        ((rowColor62.value <= 0 || rowColor62.value > 9) && (rowColor62.value.length != 0)) ||
        ((rowColor63.value <= 0 || rowColor63.value > 9) && (rowColor63.value.length != 0)) ||
        ((rowColor65.value <= 0 || rowColor65.value > 9) && (rowColor65.value.length != 0)) ||
        ((rowColor66.value <= 0 || rowColor66.value > 9) && (rowColor66.value.length != 0)) ||
        ((rowColor67.value <= 0 || rowColor67.value > 9) && (rowColor67.value.length != 0)) ||
        ((rowColor70.value <= 0 || rowColor70.value > 9) && (rowColor70.value.length != 0)) ||
        ((rowColor72.value <= 0 || rowColor72.value > 9) && (rowColor72.value.length != 0)) ||
        ((rowColor73.value <= 0 || rowColor73.value > 9) && (rowColor73.value.length != 0)) ||
        ((rowColor74.value <= 0 || rowColor74.value > 9) && (rowColor74.value.length != 0)) ||
        ((rowColor75.value <= 0 || rowColor75.value > 9) && (rowColor75.value.length != 0)) ||
        ((rowColor78.value <= 0 || rowColor78.value > 9) && (rowColor78.value.length != 0)) ||
        ((rowColor80.value <= 0 || rowColor80.value > 9) && (rowColor80.value.length != 0)) ||
        ((rowColor81.value <= 0 || rowColor81.value > 9) && (rowColor81.value.length != 0)) ||
        ((rowColor82.value <= 0 || rowColor82.value > 9) && (rowColor82.value.length != 0)) ||
        ((rowColor86.value <= 0 || rowColor86.value > 9) && (rowColor86.value.length != 0)) ||
        ((rowColor87.value <= 0 || rowColor87.value > 9) && (rowColor87.value.length != 0)) ||
        ((rowColor90.value <= 0 || rowColor90.value > 9) && (rowColor90.value.length != 0)) ||
        ((rowColor91.value <= 0 || rowColor91.value > 9) && (rowColor91.value.length != 0)) ||
        ((rowColor92.value <= 0 || rowColor92.value > 9) && (rowColor92.value.length != 0)) ||
        ((rowColor93.value <= 0 || rowColor93.value > 9) && (rowColor93.value.length != 0)) ||
        ((rowColor95.value <= 0 || rowColor95.value > 9) && (rowColor95.value.length != 0)) ||
        ((rowColor96.value <= 0 || rowColor96.value > 9) && (rowColor96.value.length != 0))) {

        alert("Please Enter A Numeric Value Between 1 and 9.");
        ColorInput();
        ClearRed();

    } else if((rowColor12.value.length == 0 && rowColor12.style.backgroundColor == "green") ||
            (rowColor13.value.length == 0 && rowColor13.style.backgroundColor == "green") || 
            (rowColor15.value.length == 0 && rowColor15.style.backgroundColor == "green") || 
            (rowColor16.value.length == 0 && rowColor16.style.backgroundColor == "green") || 
            (rowColor17.value.length == 0 && rowColor17.style.backgroundColor == "green") || 
            (rowColor18.value.length == 0 && rowColor18.style.backgroundColor == "green") || 
            (rowColor21.value.length == 0 && rowColor21.style.backgroundColor == "green") || 
            (rowColor22.value.length == 0 && rowColor22.style.backgroundColor == "green") || 
            (rowColor26.value.length == 0 && rowColor26.style.backgroundColor == "green") || 
            (rowColor27.value.length == 0 && rowColor27.style.backgroundColor == "green") || 
            (rowColor28.value.length == 0 && rowColor28.style.backgroundColor == "green") || 
            (rowColor30.value.length == 0 && rowColor30.style.backgroundColor == "green") ||
            (rowColor33.value.length == 0 && rowColor33.style.backgroundColor == "green") ||
            (rowColor34.value.length == 0 && rowColor34.style.backgroundColor == "green") ||
            (rowColor35.value.length == 0 && rowColor35.style.backgroundColor == "green") ||
            (rowColor36.value.length == 0 && rowColor36.style.backgroundColor == "green") ||
            (rowColor38.value.length == 0 && rowColor38.style.backgroundColor == "green") ||
            (rowColor41.value.length == 0 && rowColor41.style.backgroundColor == "green") ||
            (rowColor42.value.length == 0 && rowColor42.style.backgroundColor == "green") ||
            (rowColor43.value.length == 0 && rowColor43.style.backgroundColor == "green") ||
            (rowColor45.value.length == 0 && rowColor45.style.backgroundColor == "green") ||
            (rowColor46.value.length == 0 && rowColor46.style.backgroundColor == "green") ||
            (rowColor47.value.length == 0 && rowColor47.style.backgroundColor == "green") ||
            (rowColor51.value.length == 0 && rowColor51.style.backgroundColor == "green") ||
            (rowColor52.value.length == 0 && rowColor52.style.backgroundColor == "green") ||
            (rowColor54.value.length == 0 && rowColor54.style.backgroundColor == "green") ||
            (rowColor56.value.length == 0 && rowColor56.style.backgroundColor == "green") ||
            (rowColor57.value.length == 0 && rowColor57.style.backgroundColor == "green") ||
            (rowColor61.value.length == 0 && rowColor61.style.backgroundColor == "green") ||
            (rowColor62.value.length == 0 && rowColor62.style.backgroundColor == "green") ||
            (rowColor63.value.length == 0 && rowColor63.style.backgroundColor == "green") || 
            (rowColor65.value.length == 0 && rowColor65.style.backgroundColor == "green") ||
            (rowColor66.value.length == 0 && rowColor66.style.backgroundColor == "green") ||
            (rowColor67.value.length == 0 && rowColor67.style.backgroundColor == "green") ||
            (rowColor70.value.length == 0 && rowColor70.style.backgroundColor == "green") ||
            (rowColor72.value.length == 0 && rowColor72.style.backgroundColor == "green") ||
            (rowColor73.value.length == 0 && rowColor73.style.backgroundColor == "green") ||
            (rowColor74.value.length == 0 && rowColor74.style.backgroundColor == "green") ||
            (rowColor75.value.length == 0 && rowColor75.style.backgroundColor == "green") ||
            (rowColor78.value.length == 0 && rowColor78.style.backgroundColor == "green") ||
            (rowColor80.value.length == 0 && rowColor80.style.backgroundColor == "green") ||
            (rowColor81.value.length == 0 && rowColor81.style.backgroundColor == "green") ||
            (rowColor82.value.length == 0 && rowColor82.style.backgroundColor == "green") ||
            (rowColor86.value.length == 0 && rowColor86.style.backgroundColor == "green") ||
            (rowColor87.value.length == 0 && rowColor87.style.backgroundColor == "green") ||
            (rowColor90.value.length == 0 && rowColor90.style.backgroundColor == "green") ||
            (rowColor91.value.length == 0 && rowColor91.style.backgroundColor == "green") ||
            (rowColor92.value.length == 0 && rowColor92.style.backgroundColor == "green") ||
            (rowColor93.value.length == 0 && rowColor93.style.backgroundColor == "green") ||
            (rowColor95.value.length == 0 && rowColor95.style.backgroundColor == "green") ||
            (rowColor96.value.length == 0 && rowColor96.style.backgroundColor == "green")) {

                alert("You have attempted to change a correct answer. Please complete the empty green and/or lightblue box before completing " +
                "another red box.");
                count = 0;
    }else {
                    PlayCards();
    }
}

function PlayCards() {
    if (rowColor12.style.backgroundColor == "lightblue") {
        row1col2();
    } else if (rowColor13.style.backgroundColor == "lightblue") {
        row1col3();
    } else if (rowColor15.style.backgroundColor == "lightblue") {
        row1col5();
    } else if (rowColor16.style.backgroundColor == "lightblue") {
        row1col6();
    } else if (rowColor17.style.backgroundColor == "lightblue") {
        row1col7();
    } else if (rowColor18.style.backgroundColor == "lightblue") {
        row1col8();
    } else if (rowColor21.style.backgroundColor == "lightblue") {
        row2col1();
    } else if (rowColor22.style.backgroundColor == "lightblue") {
        row2col2();
    } else if (rowColor26.style.backgroundColor == "lightblue") {
        row2col6();
    } else if (rowColor27.style.backgroundColor == "lightblue") {
        row2col7();
    } else if (rowColor28.style.backgroundColor == "lightblue") {
        row2col8();
    } else if (rowColor30.style.backgroundColor == "lightblue") {
        row3col0();
    } else if (rowColor33.style.backgroundColor == "lightblue") {
        row3col3();
    } else if (rowColor34.style.backgroundColor == "lightblue") {
        row3col4();
    } else if (rowColor35.style.backgroundColor == "lightblue") {
        row3col5();
    } else if (rowColor36.style.backgroundColor == "lightblue") {
        row3col6();
    }
    else if (rowColor38.style.backgroundColor == "lightblue") {
        row3col8();
    } else if (rowColor41.style.backgroundColor == "lightblue") {
        row4col1();
    } else if (rowColor42.style.backgroundColor == "lightblue") {
        row4col2();
    } else if (rowColor43.style.backgroundColor == "lightblue") {
        row4col3();
    } else if (rowColor45.style.backgroundColor == "lightblue") {
        row4col5();
    } else if (rowColor46.style.backgroundColor == "lightblue") {
        row4col6();
    } else if (rowColor47.style.backgroundColor == "lightblue") {
        row4col7();
    } else if (rowColor51.style.backgroundColor == "lightblue") {
        row5col1();
    } else if (rowColor52.style.backgroundColor == "lightblue") {
        row5col2();
    } else if (rowColor54.style.backgroundColor == "lightblue") {
        row5col4();
    } else if (rowColor56.style.backgroundColor == "lightblue") {
        row5col6();
    } else if (rowColor57.style.backgroundColor == "lightblue") {
        row5col7();
    } else if (rowColor61.style.backgroundColor == "lightblue") {
        row6col1();
    } else if (rowColor62.style.backgroundColor == "lightblue") {
        row6col2();
    } else if (rowColor63.style.backgroundColor == "lightblue") {
        row6col3();
    } else if (rowColor65.style.backgroundColor == "lightblue") {
        row6col5();
    } else if (rowColor66.style.backgroundColor == "lightblue") {
        row6col6();
    } else if (rowColor67.style.backgroundColor == "lightblue") {
        row6col7();
    } else if (rowColor70.style.backgroundColor == "lightblue") {
        row7col0();
    } else if (rowColor72.style.backgroundColor == "lightblue") {
        row7col2();
    } else if (rowColor73.style.backgroundColor == "lightblue") {
        row7col3();
    } else if (rowColor74.style.backgroundColor == "lightblue") {
        row7col4();
    } else if (rowColor75.style.backgroundColor == "lightblue") {
        row7col5();
    } else if (rowColor78.style.backgroundColor == "lightblue") {
        row7col8();
    } else if (rowColor80.style.backgroundColor == "lightblue") {
        row8col0();
    } else if (rowColor81.style.backgroundColor == "lightblue") {
        row8col1();
    } else if (rowColor82.style.backgroundColor == "lightblue") {
        row8col2();
    } else if (rowColor86.style.backgroundColor == "lightblue") {
        row8col6();
    } else if (rowColor87.style.backgroundColor == "lightblue") {
        row8col7();
    } else if (rowColor90.style.backgroundColor == "lightblue") {
        row9col0();
    } else if (rowColor91.style.backgroundColor == "lightblue") {
        row9col1();
    } else if (rowColor92.style.backgroundColor == "lightblue") {
        row9col2();
    } else if (rowColor93.style.backgroundColor == "lightblue") {
        row9col3();
    } else if (rowColor95.style.backgroundColor == "lightblue") {
        row9col5();
    } else if (rowColor96.style.backgroundColor == "lightblue") {
        row9col6();
    }
    ColorInput();
    ClearRed();
    CheckWinner();
   
    function row1col2() {
        if (row12.value.length == 0) {
            alert("Please enter a value in row 1 column 3.");
            row12.style.backgroundColor = "lightblue";
            row12.focus();
        } else {
            var blnFound12 = false;
            for (var i = 0; i < sudRow1.length; i++) {
                if (i == 2) {
                    i += 1;
                }
                if (rowColor12.value == sudRow1[i]) {
                    alert(rowColor12.value + " can't be entered into row 1. This number is already here.");
                    blnFound12 = true;
                    if (blnSecondEntry == true) {
                        blnForceGreen = true;
                        rowColor12.focus();
                    }

                    if (blnFound12 == true) {
                        break;
                    }

                }
            }

            if (rowColor12.value == sudRow2[2]) {
                alert(rowColor12.value + " can't be entered into column 3. This number is already here.");
                blnFound12 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor12.focus();
                }
            }

            if (rowColor12.value == sudRow3[2]) {
                alert(rowColor12.value + " can't be entered into column 3. This number is already here.");
                blnFound12 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor12.focus();
                }
            }

            if (rowColor12.value == sudRow4[2]) {
                alert(rowColor12.value + " can't be entered into column 3. This number is already here.");
                blnFound12 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor12.focus();
                }
            }

            if (rowColor12.value == sudRow5[2]) {
                alert(rowColor12.value + " can't be entered into column 3. This number is already here.");
                blnFound12 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor12.focus();
                }
            }

            if (rowColor12.value == sudRow6[2]) {
                alert(rowColor12.value + " can't be entered into column 3. This number is already here.");
                blnFound12 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor12.focus();
                }
            }

            if (rowColor12.value == sudRow7[2]) {
                alert(rowColor12.value + " can't be entered into column 3. This number is already here.");
                blnFound12 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor12.focus();
                }
            }

            if (rowColor12.value == sudRow8[2]) {
                alert(rowColor12.value + " can't be entered into column 3. This number is already here.");
                blnFound12 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor12.focus();
                }
            }

            if (rowColor12.value == sudRow9[2]) {
                alert(rowColor12.value + " can't be entered into column 3. This number is already here.");
                blnFound12 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor12.focus();
                }
            }

            if (rowColor12.value == sudRow2[0]) {
                alert(rowColor12.value + " can't be entered into this section. This number is already here.");
                blnFound12 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor12.focus();
                }
            }

            if (rowColor12.value == sudRow2[1]) {
                alert(rowColor12.value + " can't be entered into this section. This number is already here.");
                blnFound12 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor12.focus();
                }
            }

            if (rowColor12.value == sudRow3[0]) {
                alert(rowColor12.value + " can't be entered into this section. This number is already here.");
                blnFound12 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor12.focus();
                }
            }

            if (rowColor12.value == sudRow3[1]) {
                alert(rowColor12.value + " can't be entered into this section. This number is already here.");
                blnFound12 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor12.focus();
                }
            }

            if (blnFound12 == false) {
                rowColor12.style.backgroundColor = "green";
                sudRow1[2] = rowColor12.value;
                count = 0;
            } else {
                rowColor12.value = "";
                sudRow1[2] = "";
                if (blnForceGreen == true) {
                    rowColor12.style.backgroundColor = "green";
                } else {
                    rowColor12.style.backgroundColor = "red";
                }
                blnForceGreen = false;
                rowColor12.focus();
                count = 0;
            }

        }   
    }    

    function row1col3() {
        if (row13.value.length == 0) {
            alert("Please enter a value in row 1 column 4.");
            row13.style.backgroundColor = "lightblue";
            row13.focus();
        } else {
            var blnFound13 = false;
            for (var i = 0; i < sudRow1.length; i++) {
                if (i == 3) {
                    i += 1;
                }
                if (rowColor13.value == sudRow1[i]) {
                    alert(rowColor13.value + " can't be entered into row 1. This number is already here.");
                    blnFound13 = true;
                    if (blnSecondEntry == true) {
                        blnForceGreen = true;
                        rowColor13.focus();
                    }
                    if (blnFound13 = true) {
                        break;
                    }
                }
            }

            if (rowColor13.value == sudRow2[3]) {
                alert(rowColor13.value + " can't be entered into column 4. This number is already here.");
                blnFound13 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor13.focus();
                }
            }

            if (rowColor13.value == sudRow3[3]) {
                alert(rowColor13.value + " can't be entered into column 4. This number is already here.");
                blnFound13 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor13.focus();
                }
            }

            if (rowColor13.value == sudRow4[3]) {
                alert(rowColor13.value + " can't be entered into column 4. This number is already here.");
                blnFound13 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor13.focus();
                }
            }

            if (rowColor13.value == sudRow5[3]) {
                alert(rowColor13.value + " can't be entered into column 4. This number is already here.");
                blnFound13 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor13.focus();
                }
            }

            if (rowColor13.value == sudRow6[3]) {
                alert(rowColor13.value + " can't be entered into column 4. This number is already here.");
                blnFound13 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor13.focus();
                }
            }

            if (rowColor13.value == sudRow7[3]) {
                alert(rowColor13.value + " can't be entered into column 4. This number is already here.");
                blnFound13 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor13.focus();
                }
            }

            if (rowColor13.value == sudRow8[3]) {
                alert(rowColor13.value + " can't be entered into column 4. This number is already here.");
                blnFound13 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor13.focus();
                }
            }

            if (rowColor13.value == sudRow9[3]) {
                alert(rowColor13.value + " can't be entered into column 4. This number is already here.");
                blnFound13 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor13.focus();
                }
            }

            if (rowColor13.value == sudRow2[4]) {
                alert(rowColor13.value + " can't be entered into this section. This number is already here.");
                blnFound13 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor13.focus();
                }
            }

            if (rowColor13.value == sudRow2[5]) {
                alert(rowColor13.value + " can't be entered into this section. This number is already here.");
                blnFound13 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor13.focus();
                }
            }

            if (rowColor13.value == sudRow3[4]) {
                alert(rowColor13.value + " can't be entered into this section. This number is already here.");
                blnFound13 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor13.focus();
                }
            }

            if (rowColor13.value == sudRow3[5]) {
                alert(rowColor13.value + " can't be entered into this section. This number is already here.");
                blnFound13 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor13.focus();
                }
            }


            if (blnFound13 == false) {
                rowColor13.style.backgroundColor = "green";
                sudRow1[3] = rowColor13.value;
                count = 0;
            } else {
                rowColor13.value = "";
                sudRow1[3] = "";
                if (blnForceGreen == true) {
                    rowColor13.style.backgroundColor = "green";
                } else {
                    rowColor13.style.backgroundColor = "red";
                }
                blnForceGreen = false;
                rowColor13.focus();
                count = 0;
            }
        }
    }

    function row1col5() {
        if (row15.value.length == 0) {
            alert("Please enter a value in row 1 column 6.");
            row15.style.backgroundColor = "lightblue";
            row15.focus();
        } else {
            var blnFound15 = false;
            for (var i = 0; i < sudRow1.length; i++) {
                if (i == 5) {
                    i += 1;
                }
                if (rowColor15.value == sudRow1[i]) {
                    alert(rowColor15.value + " can't be entered into row 1. This number is already here.");
                    blnFound15 = true;

                    if (blnSecondEntry == true) {
                        blnForceGreen = true;
                        rowColor15.focus();
                    }
                    if (blnFound15 == true) {
                        break;
                    }
                }
            }

            if (rowColor15.value == sudRow2[5]) {
                alert(rowColor15.value + " can't be entered into column 6. This number is already here.");
                blnFound15 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor15.focus();
                }
            }

            if (rowColor15.value == sudRow3[5]) {
                alert(rowColor15.value + " can't be entered into column 6. This number is already here.");
                blnFound15 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor15.focus();
                }
            }

            if (rowColor15.value == sudRow4[5]) {
                alert(rowColor15.value + " can't be entered into column 6. This number is already here.");
                blnFound15 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor15.focus();
                }
            }

            if (rowColor15.value == sudRow5[5]) {
                alert(rowColor15.value + " can't be entered into column 6. This number is already here.");
                blnFound15 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor15.focus();
                }
            }

            if (rowColor15.value == sudRow6[5]) {
                alert(rowColor15.value + " can't be entered into column 6. This number is already here.");
                blnFound15 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor15.focus();
                }
            }

            if (rowColor15.value == sudRow7[5]) {
                alert(rowColor15.value + " can't be entered into column 6. This number is already here.");
                blnFound15 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor15.focus();
                }
            }

            if (rowColor15.value == sudRow8[5]) {
                alert(rowColor15.value + " can't be entered into column 6. This number is already here.");
                blnFound15 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor15.focus();
                }
            }

            if (rowColor15.value == sudRow9[5]) {
                alert(rowColor15.value + " can't be entered into column 6. This number is already here.");
                blnFound15 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor15.focus();
                }
            }

            if (rowColor15.value == sudRow2[3]) {
                alert(rowColor15.value + " can't be entered into this section. This number is already here.");
                blnFound15 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor15.focus();
                }
            }

            if (rowColor15.value == sudRow2[4]) {
                alert(rowColor15.value + " can't be entered into this section. This number is already here.");
                blnFound15 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor15.focus();
                }
            }

            if (rowColor15.value == sudRow3[3]) {
                alert(rowColor15.value + " can't be entered into this section. This number is already here.");
                blnFound15 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor15.focus();
                }
            }

            if (rowColor15.value == sudRow3[4]) {
                alert(rowColor15.value + " can't be entered into this section. This number is already here.");
                blnFound15 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor15.focus();
                }
            }


            if (blnFound15 == false) {
                rowColor15.style.backgroundColor = "green";
                sudRow1[5] = rowColor15.value;
                count = 0;
            } else {
                rowColor15.value = "";
                sudRow1[5] = "";
                if (blnForceGreen == true) {
                    rowColor15.style.backgroundColor = "green";
                } else {
                    rowColor15.style.backgroundColor = "red";
                }
                blnForceGreen = false;
                rowColor15.focus();
                count = 0;
            }
        }
    }
    }

    function row1col6() {
        if (row16.value.length == 0) {
            alert("Please enter a value in row 1 column 7.");
            row16.style.backgroundColor = "lightblue";
            row16.focus();
        } else {
            var blnFound16 = false;
            for (var i = 0; i < sudRow1.length; i++) {
                if (i == 6) {
                    i += 1;
                }
                if (rowColor16.value == sudRow1[i]) {
                    alert(rowColor16.value + " can't be entered into row 1. This number is already here.");
                    blnFound16 = true;
                    if (blnSecondEntry == true) {
                        blnForceGreen = true;
                        rowColor16.focus();
                    }
                    if (blnFound16 == true) {
                        break;
                    }
                }
            }

            if (rowColor16.value == sudRow2[6]) {
                alert(rowColor16.value + " can't be entered into column 7. This number is already here.");
                blnFound16 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor16.focus();
                }
            }

            if (rowColor16.value == sudRow3[6]) {
                alert(rowColor16.value + " can't be entered into column 7. This number is already here.");
                blnFound16 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor16.focus();
                }
            }

            if (rowColor16.value == sudRow4[6]) {
                alert(rowColor16.value + " can't be entered into column 7. This number is already here.");
                blnFound16 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor16.focus();
                }
            }

            if (rowColor16.value == sudRow5[6]) {
                alert(rowColor16.value + " can't be entered into column 7. This number is already here.");
                blnFound16 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor16.focus();
                }
            }

            if (rowColor16.value == sudRow6[6]) {
                alert(rowColor16.value + " can't be entered into column 7. This number is already here.");
                blnFound16 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor16.focus();
                }
            }

            if (rowColor16.value == sudRow7[6]) {
                alert(rowColor16.value + " can't be entered into column 7. This number is already here.");
                blnFound16 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor16.focus();
                }
            }

            if (rowColor16.value == sudRow8[6]) {
                alert(rowColor16.value + " can't be entered into column 7. This number is already here.");
                blnFound16 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor16.focus();
                }
            }

            if (rowColor16.value == sudRow9[6]) {
                alert(rowColor16.value + " can't be entered into column 7. This number is already here.");
                blnFound16 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor16.focus();
                }
            }

            if (rowColor16.value == sudRow2[7]) {
                alert(rowColor16.value + " can't be entered into this section. This number is already here.");
                blnFound16 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor16.focus();
                }
            }

            if (rowColor16.value == sudRow2[8]) {
                alert(rowColor16.value + " can't be entered into this section. This number is already here.");
                blnFound16 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor16.focus();
                }
            }

            if (rowColor16.value == sudRow3[7]) {
                alert(rowColor16.value + " can't be entered into this section. This number is already here.");
                blnFound16 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor16.focus();
                }
            }

            if (rowColor16.value == sudRow3[8]) {
                alert(rowColor16.value + " can't be entered into this section. This number is already here.");
                blnFound16 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor16.focus();
                }
            }


            if (blnFound16 == false) {
                rowColor16.style.backgroundColor = "green";
                sudRow1[6] = rowColor16.value;
                count = 0;
            } else {
                rowColor16.value = "";
                sudRow1[6] = "";
                if (blnForceGreen == true) {
                    rowColor16.style.backgroundColor = "green";
                } else {
                    rowColor16.style.backgroundColor = "red";
                }
                count = 0;
                blnForceGreen = false;
                rowColor16.focus();
            }
        }
    }


function row1col7() {
    if (row17.value.length == 0) {
        alert("Please enter a value in row 1 column 8.");
        row17.style.backgroundColor = "lightblue";
        row17.focus();
    } else {
        var blnFound17 = false;
        for (var i = 0; i < sudRow1.length; i++) {
            if (i == 7) {
                i += 1;
            }
            if (rowColor17.value == sudRow1[i]) {
                alert(rowColor17.value + " can't be entered into row 1. This number is already here.");
                blnFound17 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor17.focus();
                }
                if (blnFound17 == true) {
                    break;
                }
            }
        }

        if (rowColor17.value == sudRow2[7]) {
            alert(rowColor17.value + " can't be entered into column 8. This number is already here.");
            blnFound17 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor17.focus();
            }
        }

        if (rowColor17.value == sudRow3[7]) {
            alert(rowColor17.value + " can't be entered into column 8. This number is already here.");
            blnFound17 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor17.focus();
            }
        }

        if (rowColor17.value == sudRow4[7]) {
            alert(rowColor17.value + " can't be entered into column 8. This number is already here.");
            blnFound17 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor17.focus();
            }
        }

        if (rowColor17.value == sudRow5[7]) {
            alert(rowColor17.value + " can't be entered into column 8. This number is already here.");
            blnFound17 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor17.focus();
            }
        }

        if (rowColor17.value == sudRow6[7]) {
            alert(rowColor17.value + " can't be entered into column 8. This number is already here.");
            blnFound17 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor17.focus();
            }
        }

        if (rowColor17.value == sudRow7[7]) {
            alert(rowColor17.value + " can't be entered into column 8. This number is already here.");
            blnFound17 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor17.focus();
            }
        }

        if (rowColor17.value == sudRow8[7]) {
            alert(rowColor17.value + " can't be entered into column 8. This number is already here.");
            blnFound17 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor17.focus();
            }
        }

        if (rowColor17.value == sudRow9[7]) {
            alert(rowColor17.value + " can't be entered into column 8. This number is already here.");
            blnFound17 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor17.focus();
            }
        }

        if (rowColor17.value == sudRow2[6]) {
            alert(rowColor17.value + " can't be entered into this section. This number is already here.");
            blnFound17 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor17.focus();
            }
        }

        if (rowColor17.value == sudRow2[8]) {
            alert(rowColor17.value + " can't be entered into this section. This number is already here.");
            blnFound17 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor17.focus();
            }
        }

        if (rowColor17.value == sudRow3[6]) {
            alert(rowColor17.value + " can't be entered into this section. This number is already here.");
            blnFound17 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor17.focus();
            }
        }

        if (rowColor17.value == sudRow3[8]) {
            alert(rowColor17.value + " can't be entered into this section. This number is already here.");
            blnFound17 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor17.focus();
            }
        }


        if (blnFound17 == false) {
            rowColor17.style.backgroundColor = "green";
            sudRow1[7] = rowColor17.value;
            count = 0;
        } else {
            rowColor17.value = "";
            sudRow1[7] = "";
            if (blnForceGreen == true) {
                rowColor17.style.backgroundColor = "green";
            } else {
                rowColor17.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor17.focus();
        }
    }
}

function row1col8() {
    if (row18.value.length == 0) {
        alert("Please enter a value in row 1 column 9.");
        row18.style.backgroundColor = "lightblue";
        row18.focus();
    } else {
        var blnFound18 = false;
        for (var i = 0; i < sudRow1.length; i++) {
            if (i == 8) {
                i += 1;
            }
            if (rowColor18.value == sudRow1[i]) {
                alert(rowColor18.value + " can't be entered into row 1. This number is already here.");
                blnFound18 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor18.focus();
                }
                if (blnFound18 == true) {
                    break;
                }
            }
        }

        if (rowColor18.value == sudRow2[8]) {
            alert(rowColor18.value + " can't be entered into column 9. This number is already here.");
            blnFound18 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor18.focus();
            }
        }

        if (rowColor18.value == sudRow3[8]) {
            alert(rowColor18.value + " can't be entered into column 9. This number is already here.");
            blnFound18 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor18.focus();
            }
        }

        if (rowColor18.value == sudRow4[8]) {
            alert(rowColor18.value + " can't be entered into column 9. This number is already here.");
            blnFound18 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor18.focus();
            }
        }

        if (rowColor18.value == sudRow5[8]) {
            alert(rowColor18.value + " can't be entered into column 9. This number is already here.");
            blnFound18 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor18.focus();
            }
        }

        if (rowColor18.value == sudRow6[8]) {
            alert(rowColor18.value + " can't be entered into column 9. This number is already here.");
            blnFound18 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor18.focus();
            }
        }

        if (rowColor18.value == sudRow7[8]) {
            alert(rowColor18.value + " can't be entered into column 9. This number is already here.");
            blnFound18 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor18.focus();
            }
        }

        if (rowColor18.value == sudRow8[8]) {
            alert(rowColor18.value + " can't be entered into column 9. This number is already here.");
            blnFound18 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor18.focus();
            }
        }

        if (rowColor18.value == sudRow9[8]) {
            alert(rowColor18.value + " can't be entered into column 9. This number is already here.");
            blnFound18 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor18.focus();
            }
        }

        if (rowColor18.value == sudRow2[6]) {
            alert(rowColor18.value + " can't be entered into this section. This number is already here.");
            blnFound18 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor18.focus();
            }
        }

        if (rowColor18.value == sudRow2[7]) {
            alert(rowColor18.value + " can't be entered into this section. This number is already here.");
            blnFound18 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor18.focus();
            }
        }

        if (rowColor18.value == sudRow3[6]) {
            alert(rowColor18.value + " can't be entered into this section. This number is already here.");
            blnFound18 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor18.focus();
            }
        }

        if (rowColor18.value == sudRow3[7]) {
            alert(rowColor18.value + " can't be entered into this section. This number is already here.");
            blnFound18 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor18.focus();
            }
        }


        if (blnFound18 == false) {
            rowColor18.style.backgroundColor = "green";
            sudRow1[8] = rowColor18.value;
            count = 0;
        } else {
            rowColor18.value = "";
            sudRow1[8] = "";
            if (blnForceGreen == true) {
                rowColor18.style.backgroundColor = "green";
            } else {
                rowColor18.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor18.focus();
        }
    }
}

function row2col1() {
    if (row21.value.length == 0) {
        alert("Please enter a value in row 2 column 2.");
        row21.style.backgroundColor = "lightblue";
        row21.focus();
    } else {
        var blnFound21 = false;
        for (var i = 0; i < sudRow2.length; i++) {
            if (i == 1) {
                i += 1;
            }
            if (rowColor21.value == sudRow2[i]) {
                alert(rowColor21.value + " can't be entered into row 2. This number is already here.");
                blnFound21 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor21.focus();
                }
                if (blnFound21 == true) {
                    break;
                }
            }
        }

        if (rowColor21.value == sudRow1[1]) {
            alert(rowColor21.value + " can't be entered into column 2. This number is already here.");
            blnFound21 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor21.focus();
            }
        }

        if (rowColor21.value == sudRow3[1]) {
            alert(rowColor21.value + " can't be entered into column 2. This number is already here.");
            blnFound21 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor21.focus();
            }
        }

        if (rowColor21.value == sudRow4[1]) {
            alert(rowColor21.value + " can't be entered into column 2. This number is already here.");
            blnFound21 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor21.focus();
            }
        }

        if (rowColor21.value == sudRow5[1]) {
            alert(rowColor21.value + " can't be entered into column 2. This number is already here.");
            blnFound21 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor21.focus();
            }
        }

        if (rowColor21.value == sudRow6[1]) {
            alert(rowColor21.value + " can't be entered into column 2. This number is already here.");
            blnFound21 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor21.focus();
            }
        }

        if (rowColor21.value == sudRow7[1]) {
            alert(rowColor21.value + " can't be entered into column 2. This number is already here.");
            blnFound21 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor21.focus();
            }
        }

        if (rowColor21.value == sudRow8[1]) {
            alert(rowColor21.value + " can't be entered into column 2. This number is already here.");
            blnFound21 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor21.focus();
            }
        }

        if (rowColor21.value == sudRow9[1]) {
            alert(rowColor21.value + " can't be entered into column 2. This number is already here.");
            blnFound21 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor21.focus();
            }
        }

        if (rowColor21.value == sudRow1[0]) {
            alert(rowColor21.value + " can't be entered into this section. This number is already here.");
            blnFound21 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor21.focus();
            }
        }

        if (rowColor21.value == sudRow1[2]) {
            alert(rowColor21.value + " can't be entered into this section. This number is already here.");
            blnFound21 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor21.focus();
            }
        }

        if (rowColor21.value == sudRow3[0]) {
            alert(rowColor21.value + " can't be entered into this section. This number is already here.");
            blnFound21 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor21.focus();
            }
        }

        if (rowColor21.value == sudRow3[2]) {
            alert(rowColor21.value + " can't be entered into this section. This number is already here.");
            blnFound21 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor21.focus();
            }
        }


        if (blnFound21 == false) {
            rowColor21.style.backgroundColor = "green";
            sudRow2[1] = rowColor21.value;
            count = 0;
        } else {
            rowColor21.value = "";
            sudRow2[1] = "";
            if (blnForceGreen == true) {
                rowColor21.style.backgroundColor = "green";
            } else {
                rowColor21.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor21.focus();
        }
    }

}

function row2col2() {
    if (row22.value.length == 0) {
        alert("Please enter a value in row 2 column 3.");
        row22.style.backgroundColor = "lightblue";
        row22.focus();
    } else {
        var blnFound22 = false;
        for (var i = 0; i < sudRow2.length; i++) {
            if (i == 2) {
                i += 1;
            }
            if (rowColor22.value == sudRow2[i]) {
                alert(rowColor22.value + " can't be entered into row 2. This number is already here.");
                blnFound22 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor22.focus();
                }
                if (blnFound22 == true) {
                    break;
                }
            }
        }

        if (rowColor22.value == sudRow1[2]) {
            alert(rowColor22.value + " can't be entered into column 3. This number is already here.");
            blnFound22 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor22.focus();
            }
        }

        if (rowColor22.value == sudRow3[2]) {
            alert(rowColor22.value + " can't be entered into column 3. This number is already here.");
            blnFound22 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor22.focus();
            }
        }

        if (rowColor22.value == sudRow4[2]) {
            alert(rowColor22.value + " can't be entered into column 3. This number is already here.");
            blnFound22 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor22.focus();
            }
        }

        if (rowColor22.value == sudRow5[2]) {
            alert(rowColor22.value + " can't be entered into column 3. This number is already here.");
            blnFound22 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor22.focus();
            }
        }

        if (rowColor22.value == sudRow6[2]) {
            alert(rowColor22.value + " can't be entered into column 3. This number is already here.");
            blnFound22 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor22.focus();
            }
        }

        if (rowColor22.value == sudRow7[2]) {
            alert(rowColor22.value + " can't be entered into column 3. This number is already here.");
            blnFound22 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor22.focus();
            }
        }

        if (rowColor22.value == sudRow8[2]) {
            alert(rowColor22.value + " can't be entered into column 3. This number is already here.");
            blnFound22 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor22.focus();
            }
        }

        if (rowColor22.value == sudRow9[2]) {
            alert(rowColor22.value + " can't be entered into column 3. This number is already here.");
            blnFound22 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor22.focus();
            }
        }

        if (rowColor22.value == sudRow1[0]) {
            alert(rowColor22.value + " can't be entered into this section. This number is already here.");
            blnFound22 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor22.focus();
            }
        }

        if (rowColor22.value == sudRow1[1]) {
            alert(rowColor22.value + " can't be entered into this section. This number is already here.");
            blnFound22 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor22.focus();
            }
        }

        if (rowColor22.value == sudRow3[0]) {
            alert(rowColor22.value + " can't be entered into this section. This number is already here.");
            blnFound22 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor22.focus();
            }
        }

        if (rowColor22.value == sudRow3[1]) {
            alert(rowColor22.value + " can't be entered into this section. This number is already here.");
            blnFound22 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor22.focus();
            }
        }


        if (blnFound22 == false) {
            rowColor22.style.backgroundColor = "green";
            sudRow2[2] = rowColor22.value;
            count = 0;
        } else {
            rowColor22.value = "";
            sudRow2[2] = "";
            if (blnForceGreen == true) {
                rowColor22.style.backgroundColor = "green";
            } else {
                rowColor22.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor22.focus();
        }
    }

}

function row2col6() {
    if (row26.value.length == 0) {
        alert("Please enter a value in row 2 column 7.");
        row26.style.backgroundColor = "lightblue";
        row26.focus();
    } else {
        var blnFound26 = false;
        for (var i = 0; i < sudRow2.length; i++) {
            if (i == 6) {
                i += 1;
            }
            if (rowColor26.value == sudRow2[i]) {
                alert(rowColor26.value + " can't be entered into row 2. This number is already here.");
                blnFound26 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor26.focus();
                }
                if (blnFound26 == true) {
                    break;
                }
            }
        }

        if (rowColor26.value == sudRow1[6]) {
            alert(rowColor26.value + " can't be entered into column 7. This number is already here.");
            blnFound26 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor26.focus();
            }
        }

        if (rowColor26.value == sudRow3[6]) {
            alert(rowColor26.value + " can't be entered into column 7. This number is already here.");
            blnFound26 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor26.focus();
            }
        }

        if (rowColor26.value == sudRow4[6]) {
            alert(rowColor26.value + " can't be entered into column 7. This number is already here.");
            blnFound26 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor26.focus();
            }
        }

        if (rowColor26.value == sudRow5[6]) {
            alert(rowColor26.value + " can't be entered into column 7. This number is already here.");
            blnFound26 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor26.focus();
            }
        }

        if (rowColor26.value == sudRow6[6]) {
            alert(rowColor26.value + " can't be entered into column 7. This number is already here.");
            blnFound26 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor26.focus();
            }
        }

        if (rowColor26.value == sudRow7[6]) {
            alert(rowColor26.value + " can't be entered into column 7. This number is already here.");
            blnFound26 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor26.focus();
            }
        }

        if (rowColor26.value == sudRow8[6]) {
            alert(rowColor26.value + " can't be entered into column 7. This number is already here.");
            blnFound26 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor26.focus();
            }
        }

        if (rowColor26.value == sudRow9[6]) {
            alert(rowColor26.value + " can't be entered into column 7. This number is already here.");
            blnFound26 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor26.focus();
            }
        }

        if (rowColor26.value == sudRow1[7]) {
            alert(rowColor26.value + " can't be entered into this section. This number is already here.");
            blnFound26 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor26.focus();
            }
        }

        if (rowColor26.value == sudRow1[8]) {
            alert(rowColor26.value + " can't be entered into this section. This number is already here.");
            blnFound26 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor26.focus();
            }
        }

        if (rowColor26.value == sudRow3[7]) {
            alert(rowColor26.value + " can't be entered into this section. This number is already here.");
            blnFound26 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor26.focus();
            }
        }

        if (rowColor26.value == sudRow3[8]) {
            alert(rowColor26.value + " can't be entered into this section. This number is already here.");
            blnFound26 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor26.focus();
            }
        }


        if (blnFound26 == false) {
            rowColor26.style.backgroundColor = "green";
            sudRow2[6] = rowColor26.value;
            count = 0;
        } else {
            rowColor26.value = "";
            sudRow2[6] = "";
            if (blnForceGreen == true) {
                rowColor26.style.backgroundColor = "green";
            } else {
                rowColor26.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor26.focus();
        }
    }

}

function row2col7() {
    if (row27.value.length == 0) {
        alert("Please enter a value in row 2 column 8.");
        row27.style.backgroundColor = "lightblue";
        row27.focus();
    } else {
        var blnFound27 = false;
        for (var i = 0; i < sudRow2.length; i++) {
            if (i == 7) {
                i += 1;
            }
            if (rowColor27.value == sudRow2[i]) {
                alert(rowColor27.value + " can't be entered into row 2. This number is already here.");
                blnFound27 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor27.focus();
                }
                if (blnFound27 == true) {
                    break;
                }
            }
        }

        if (rowColor27.value == sudRow1[7]) {
            alert(rowColor27.value + " can't be entered into column 8. This number is already here.");
            blnFound27 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor27.focus();
            }
        }

        if (rowColor27.value == sudRow3[7]) {
            alert(rowColor27.value + " can't be entered into column 8. This number is already here.");
            blnFound27 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor27.focus();
            }
        }

        if (rowColor27.value == sudRow4[7]) {
            alert(rowColor27.value + " can't be entered into column 8. This number is already here.");
            blnFound27 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor27.focus();
            }
        }

        if (rowColor27.value == sudRow5[7]) {
            alert(rowColor27.value + " can't be entered into column 8. This number is already here.");
            blnFound27 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor27.focus();
            }
        }

        if (rowColor27.value == sudRow6[7]) {
            alert(rowColor27.value + " can't be entered into column 8. This number is already here.");
            blnFound27 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor27.focus();
            }
        }

        if (rowColor27.value == sudRow7[7]) {
            alert(rowColor27.value + " can't be entered into column 8. This number is already here.");
            blnFound27 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor27.focus();
            }
        }

        if (rowColor27.value == sudRow8[7]) {
            alert(rowColor27.value + " can't be entered into column 8. This number is already here.");
            blnFound27 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor27.focus();
            }
        }

        if (rowColor27.value == sudRow9[7]) {
            alert(rowColor27.value + " can't be entered into column 8. This number is already here.");
            blnFound27 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor27.focus();
            }
        }

        if (rowColor27.value == sudRow1[6]) {
            alert(rowColor27.value + " can't be entered into this section. This number is already here.");
            blnFound27 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor27.focus();
            }
        }

        if (rowColor27.value == sudRow1[8]) {
            alert(rowColor27.value + " can't be entered into this section. This number is already here.");
            blnFound27 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor27.focus();
            }
        }

        if (rowColor27.value == sudRow3[6]) {
            alert(rowColor27.value + " can't be entered into this section. This number is already here.");
            blnFound27 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor27.focus();
            }
        }

        if (rowColor27.value == sudRow3[8]) {
            alert(rowColor27.value + " can't be entered into this section. This number is already here.");
            blnFound27 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor27.focus();
            }
        }


        if (blnFound27 == false) {
            rowColor27.style.backgroundColor = "green";
            sudRow2[7] = rowColor27.value;
            count = 0;
        } else {
            rowColor27.value = "";
            sudRow2[7] = "";
            if (blnForceGreen == true) {
                rowColor27.style.backgroundColor = "green";
            } else {
                rowColor27.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor27.focus();
        }
    }

}

function row2col8() {
    if (row28.value.length == 0) {
        alert("Please enter a value in row 2 column 9.");
        row28.style.backgroundColor = "lightblue";
        row28.focus();
    } else {
        var blnFound28 = false;
        for (var i = 0; i < sudRow2.length; i++) {
            if (i == 8) {
                i += 1;
            }
            if (rowColor28.value == sudRow2[i]) {
                alert(rowColor28.value + " can't be entered into row 2. This number is already here.");
                blnFound28 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor28.focus();
                }
                if (blnFound28 == true) {
                    break;
                }
            }
        }

        if (rowColor28.value == sudRow1[8]) {
            alert(rowColor28.value + " can't be entered into column 9. This number is already here.");
            blnFound28 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor28.focus();
            }
        }

        if (rowColor28.value == sudRow3[8]) {
            alert(rowColor28.value + " can't be entered into column 9. This number is already here.");
            blnFound28 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor28.focus();
            }
        }

        if (rowColor28.value == sudRow4[8]) {
            alert(rowColor28.value + " can't be entered into column 9. This number is already here.");
            blnFound28 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor28.focus();
            }
        }

        if (rowColor28.value == sudRow5[8]) {
            alert(rowColor28.value + " can't be entered into column 9. This number is already here.");
            blnFound28 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor28.focus();
            }
        }

        if (rowColor28.value == sudRow6[8]) {
            alert(rowColor28.value + " can't be entered into column 9. This number is already here.");
            blnFound28 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor28.focus();
            }
        }

        if (rowColor28.value == sudRow7[8]) {
            alert(rowColor28.value + " can't be entered into column 9. This number is already here.");
            blnFound28 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor28.focus();
            }
        }

        if (rowColor28.value == sudRow8[8]) {
            alert(rowColor28.value + " can't be entered into column 9. This number is already here.");
            blnFound28 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor28.focus();
            }
        }

        if (rowColor28.value == sudRow9[8]) {
            alert(rowColor28.value + " can't be entered into column 9. This number is already here.");
            blnFound28 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor28.focus();
            }
        }

        if (rowColor28.value == sudRow1[6]) {
            alert(rowColor28.value + " can't be entered into this section. This number is already here.");
            blnFound28 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor28.focus();
            }
        }

        if (rowColor28.value == sudRow1[7]) {
            alert(rowColor28.value + " can't be entered into this section. This number is already here.");
            blnFound28 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor28.focus();
            }
        }

        if (rowColor28.value == sudRow3[6]) {
            alert(rowColor28.value + " can't be entered into this section. This number is already here.");
            blnFound28 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor28.focus();
            }
        }

        if (rowColor28.value == sudRow3[7]) {
            alert(rowColor28.value + " can't be entered into this section. This number is already here.");
            blnFound28 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor28.focus();
            }
        }


        if (blnFound28 == false) {
            rowColor28.style.backgroundColor = "green";
            sudRow2[8] = rowColor28.value;
            count = 0;
        } else {
            rowColor28.value = "";
            sudRow2[8] = "";
            if (blnForceGreen == true) {
                rowColor28.style.backgroundColor = "green";
            } else {
                rowColor28.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor28.focus();
        }
    }

}

function row3col0() {
    if (row30.value.length == 0) {
        alert("Please enter a value in row 3 column 1.");
        row30.style.backgroundColor = "lightblue";
        row30.focus();
    } else {
        var blnFound30 = false;
        for (var i = 0; i < sudRow3.length; i++) {
            if (i == 0) {
                i += 1;
            }
            if (rowColor30.value == sudRow3[i]) {
                alert(rowColor30.value + " can't be entered into row 3. This number is already here.");
                blnFound30 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor30.focus();
                }
                if (blnFound30 == true) {
                    break;
                }
            }
        }

        if (rowColor30.value == sudRow1[0]) {
            alert(rowColor30.value + " can't be entered into column 1. This number is already here.");
            blnFound30 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor30.focus();
            }
        }

        if (rowColor30.value == sudRow2[0]) {
            alert(rowColor30.value + " can't be entered into column 1. This number is already here.");
            blnFound30 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor30.focus();
            }
        }

        if (rowColor30.value == sudRow4[0]) {
            alert(rowColor30.value + " can't be entered into column 1. This number is already here.");
            blnFound30 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor30.focus();
            }
        }

        if (rowColor30.value == sudRow5[0]) {
            alert(rowColor30.value + " can't be entered into column 1. This number is already here.");
            blnFound30 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor30.focus();
            }
        }

        if (rowColor30.value == sudRow6[0]) {
            alert(rowColor30.value + " can't be entered into column 1. This number is already here.");
            blnFound30 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor30.focus();
            }
        }

        if (rowColor30.value == sudRow7[0]) {
            alert(rowColor30.value + " can't be entered into column 1. This number is already here.");
            blnFound30 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor30.focus();
            }
        }

        if (rowColor30.value == sudRow8[0]) {
            alert(rowColor30.value + " can't be entered into column 1. This number is already here.");
            blnFound30 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor30.focus();
            }
        }

        if (rowColor30.value == sudRow9[0]) {
            alert(rowColor30.value + " can't be entered into column 1. This number is already here.");
            blnFound30 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor30.focus();
            }
        }

        if (rowColor30.value == sudRow1[1]) {
            alert(rowColor30.value + " can't be entered into this section. This number is already here.");
            blnFound30 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor30.focus();
            }
        }

        if (rowColor30.value == sudRow1[2]) {
            alert(rowColor30.value + " can't be entered into this section. This number is already here.");
            blnFound30 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor30.focus();
            }
        }

        if (rowColor30.value == sudRow2[1]) {
            alert(rowColor30.value + " can't be entered into this section. This number is already here.");
            blnFound30 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor30.focus();
            }
        }

        if (rowColor30.value == sudRow2[2]) {
            alert(rowColor30.value + " can't be entered into this section. This number is already here.");
            blnFound30 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor30.focus();
            }
        }


        if (blnFound30 == false) {
            rowColor30.style.backgroundColor = "green";
            sudRow3[0] = rowColor30.value;
            count = 0;
        } else {
            rowColor30.value = "";
            sudRow3[0] = "";
            if (blnForceGreen == true) {
                rowColor30.style.backgroundColor = "green";
            } else {
                rowColor30.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor30.focus();
        }
    }

}

function row3col3() {
    if (row33.value.length == 0) {
        alert("Please enter a value in row 3 column 4.");
        row33.style.backgroundColor = "lightblue";
        row33.focus();
    } else {
        var blnFound33 = false;
        for (var i = 0; i < sudRow3.length; i++) {
            if (i == 3) {
                i += 1;
            }
            if (rowColor33.value == sudRow3[i]) {
                alert(rowColor33.value + " can't be entered into row 4. This number is already here.");
                blnFound33 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor33.focus();
                }
                if (blnFound33 == true) {
                    break;
                }
            }
        }

        if (rowColor33.value == sudRow1[3]) {
            alert(rowColor33.value + " can't be entered into column 4. This number is already here.");
            blnFound33 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor33.focus();
            }
        }

        if (rowColor33.value == sudRow2[3]) {
            alert(rowColor33.value + " can't be entered into column 4. This number is already here.");
            blnFound33 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor33.focus();
            }
        }

        if (rowColor33.value == sudRow4[3]) {
            alert(rowColor33.value + " can't be entered into column 4. This number is already here.");
            blnFound33 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor33.focus();
            }
        }

        if (rowColor33.value == sudRow5[3]) {
            alert(rowColor33.value + " can't be entered into column 4. This number is already here.");
            blnFound33 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor33.focus();
            }
        }

        if (rowColor33.value == sudRow6[3]) {
            alert(rowColor33.value + " can't be entered into column 4. This number is already here.");
            blnFound33 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor33.focus();
            }
        }

        if (rowColor33.value == sudRow7[3]) {
            alert(rowColor33.value + " can't be entered into column 4. This number is already here.");
            blnFound33 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor33.focus();
            }
        }

        if (rowColor33.value == sudRow8[3]) {
            alert(rowColor33.value + " can't be entered into column 4. This number is already here.");
            blnFound33 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor33.focus();
            }
        }

        if (rowColor33.value == sudRow9[3]) {
            alert(rowColor33.value + " can't be entered into column 4. This number is already here.");
            blnFound33 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor33.focus();
            }
        }

        if (rowColor33.value == sudRow1[4]) {
            alert(rowColor33.value + " can't be entered into this section. This number is already here.");
            blnFound33 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor33.focus();
            }
        }

        if (rowColor33.value == sudRow1[5]) {
            alert(rowColor33.value + " can't be entered into this section. This number is already here.");
            blnFound33 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor33.focus();
            }
        }

        if (rowColor33.value == sudRow2[4]) {
            alert(rowColor33.value + " can't be entered into this section. This number is already here.");
            blnFound33 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor33.focus();
            }
        }

        if (rowColor33.value == sudRow2[5]) {
            alert(rowColor33.value + " can't be entered into this section. This number is already here.");
            blnFound33 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor33.focus();
            }
        }


        if (blnFound33 == false) {
            rowColor33.style.backgroundColor = "green";
            sudRow3[3] = rowColor33.value;
            count = 0;
        } else {
            rowColor33.value = "";
            sudRow3[3] = "";
            if (blnForceGreen == true) {
                rowColor33.style.backgroundColor = "green";
            } else {
                rowColor33.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor33.focus();
        }
    }

}

function row3col4() {
    if (row34.value.length == 0) {
        alert("Please enter a value in row 3 column 5.");
        row34.style.backgroundColor = "lightblue";
        row34.focus();
    } else {
        var blnFound34 = false;
        for (var i = 0; i < sudRow3.length; i++) {
            if (i == 4) {
                i += 1;
            }
            if (rowColor34.value == sudRow3[i]) {
                alert(rowColor34.value + " can't be entered into row 3. This number is already here.");
                blnFound34 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor34.focus();
                }
                if (blnFound34 == true) {
                    break;
                }
            }
        }

        if (rowColor34.value == sudRow1[4]) {
            alert(rowColor34.value + " can't be entered into column 5. This number is already here.");
            blnFound34 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor34.focus();
            }
        }

        if (rowColor34.value == sudRow2[4]) {
            alert(rowColor34.value + " can't be entered into column 5. This number is already here.");
            blnFound34 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor34.focus();
            }
        }

        if (rowColor34.value == sudRow4[4]) {
            alert(rowColor34.value + " can't be entered into column 5. This number is already here.");
            blnFound34 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor34.focus();
            }
        }

        if (rowColor34.value == sudRow5[4]) {
            alert(rowColor34.value + " can't be entered into column 5. This number is already here.");
            blnFound34 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor34.focus();
            }
        }

        if (rowColor34.value == sudRow6[4]) {
            alert(rowColor34.value + " can't be entered into column 5. This number is already here.");
            blnFound34 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor34.focus();
            }
        }

        if (rowColor34.value == sudRow7[4]) {
            alert(rowColor34.value + " can't be entered into column 5. This number is already here.");
            blnFound34 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor34.focus();
            }
        }

        if (rowColor34.value == sudRow8[4]) {
            alert(rowColor34.value + " can't be entered into column 5. This number is already here.");
            blnFound34 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor34.focus();
            }
        }

        if (rowColor34.value == sudRow9[4]) {
            alert(rowColor34.value + " can't be entered into column 5. This number is already here.");
            blnFound34 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor34.focus();
            }
        }

        if (rowColor34.value == sudRow1[3]) {
            alert(rowColor34.value + " can't be entered into this section. This number is already here.");
            blnFound34 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor34.focus();
            }
        }

        if (rowColor34.value == sudRow1[5]) {
            alert(rowColor34.value + " can't be entered into this section. This number is already here.");
            blnFound34 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor34.focus();
            }
        }

        if (rowColor34.value == sudRow2[3]) {
            alert(rowColor34.value + " can't be entered into this section. This number is already here.");
            blnFound34 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor34.focus();
            }
        }

        if (rowColor34.value == sudRow2[5]) {
            alert(rowColor34.value + " can't be entered into this section. This number is already here.");
            blnFound34 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor34.focus();
            }
        }


        if (blnFound34 == false) {
            rowColor34.style.backgroundColor = "green";
            sudRow3[4] = rowColor34.value;
            count = 0;
        } else {
            rowColor34.value = "";
            sudRow3[4] = "";
            if (blnForceGreen == true) {
                rowColor34.style.backgroundColor = "green";
            } else {
                rowColor34.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor34.focus();
        }
    }

}
function row3col5() {
    if (row35.value.length == 0) {
        alert("Please enter a value in row 3 column 6.");
        row35.style.backgroundColor = "lightblue";
        row35.focus();
    } else {
        var blnFound35 = false;
        for (var i = 0; i < sudRow3.length; i++) {
            if (i == 5) {
                i += 1;
            }
            if (rowColor35.value == sudRow3[i]) {
                alert(rowColor35.value + " can't be entered into row 3. This number is already here.");
                blnFound35 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor35.focus();
                }
                if (blnFound35 == true) {
                    break;
                }
            }
        }

        if (rowColor35.value == sudRow1[5]) {
            alert(rowColor35.value + " can't be entered into column 6. This number is already here.");
            blnFound35 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor35.focus();
            }
        }

        if (rowColor35.value == sudRow2[5]) {
            alert(rowColor35.value + " can't be entered into column 6. This number is already here.");
            blnFound35 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor35.focus();
            }
        }

        if (rowColor35.value == sudRow4[5]) {
            alert(rowColor35.value + " can't be entered into column 6. This number is already here.");
            blnFound35 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor35.focus();
            }
        }

        if (rowColor35.value == sudRow5[5]) {
            alert(rowColor35.value + " can't be entered into column 6. This number is already here.");
            blnFound35 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor35.focus();
            }
        }

        if (rowColor35.value == sudRow6[5]) {
            alert(rowColor35.value + " can't be entered into column 6. This number is already here.");
            blnFound35 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor35.focus();
            }
        }

        if (rowColor35.value == sudRow7[5]) {
            alert(rowColor35.value + " can't be entered into column 6. This number is already here.");
            blnFound35 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor35.focus();
            }
        }

        if (rowColor35.value == sudRow8[5]) {
            alert(rowColor35.value + " can't be entered into column 6. This number is already here.");
            blnFound35 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor35.focus();
            }
        }

        if (rowColor35.value == sudRow9[5]) {
            alert(rowColor35.value + " can't be entered into column 6. This number is already here.");
            blnFound35 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor35.focus();
            }
        }

        if (rowColor35.value == sudRow1[3]) {
            alert(rowColor35.value + " can't be entered into this section. This number is already here.");
            blnFound35 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor35.focus();
            }
        }

        if (rowColor35.value == sudRow1[4]) {
            alert(rowColor35.value + " can't be entered into this section. This number is already here.");
            blnFound35 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor35.focus();
            }
        }

        if (rowColor35.value == sudRow2[3]) {
            alert(rowColor35.value + " can't be entered into this section. This number is already here.");
            blnFound35 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor35.focus();
            }
        }

        if (rowColor35.value == sudRow2[4]) {
            alert(rowColor34.value + " can't be entered into this section. This number is already here.");
            blnFound35 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor35.focus();
            }
        }


        if (blnFound35 == false) {
            rowColor35.style.backgroundColor = "green";
            sudRow3[5] = rowColor35.value;
            count = 0;
        } else {
            rowColor35.value = "";
            sudRow3[5] = "";
            if (blnForceGreen == true) {
                rowColor35.style.backgroundColor = "green";
            } else {
                rowColor35.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor35.focus();
        }
    }

}

function row3col6() {
    if (row36.value.length == 0) {
        alert("Please enter a value in row 3 column 7.");
        row36.style.backgroundColor = "lightblue";
        row36.focus();
    } else {
        var blnFound36 = false;
        for (var i = 0; i < sudRow3.length; i++) {
            if (i == 6) {
                i += 1;
            }
            if (rowColor36.value == sudRow3[i]) {
                alert(rowColor36.value + " can't be entered into row 3. This number is already here.");
                blnFound36 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor36.focus();
                }
                if (blnFound36 == true) {
                    break;
                }
            }
        }

        if (rowColor36.value == sudRow1[6]) {
            alert(rowColor36.value + " can't be entered into column 7. This number is already here.");
            blnFound36 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor36.focus();
            }
        }

        if (rowColor36.value == sudRow2[6]) {
            alert(rowColor36.value + " can't be entered into column 7. This number is already here.");
            blnFound36 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor36.focus();
            }
        }

        if (rowColor36.value == sudRow4[6]) {
            alert(rowColor36.value + " can't be entered into column 7. This number is already here.");
            blnFound36 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor36.focus();
            }
        }

        if (rowColor36.value == sudRow5[6]) {
            alert(rowColor36.value + " can't be entered into column 7. This number is already here.");
            blnFound36 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor36.focus();
            }
        }

        if (rowColor36.value == sudRow6[6]) {
            alert(rowColor36.value + " can't be entered into column 7. This number is already here.");
            blnFound36 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor36.focus();
            }
        }

        if (rowColor36.value == sudRow7[6]) {
            alert(rowColor36.value + " can't be entered into column 7. This number is already here.");
            blnFound36 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor36.focus();
            }
        }

        if (rowColor36.value == sudRow8[6]) {
            alert(rowColor36.value + " can't be entered into column 7. This number is already here.");
            blnFound36 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor36.focus();
            }
        }

        if (rowColor36.value == sudRow9[6]) {
            alert(rowColor36.value + " can't be entered into column 7. This number is already here.");
            blnFound36 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor36.focus();
            }
        }

        if (rowColor36.value == sudRow1[7]) {
            alert(rowColor36.value + " can't be entered into this section. This number is already here.");
            blnFound36 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor36.focus();
            }
        }

        if (rowColor36.value == sudRow1[8]) {
            alert(rowColor36.value + " can't be entered into this section. This number is already here.");
            blnFound36 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor36.focus();
            }
        }

        if (rowColor36.value == sudRow2[7]) {
            alert(rowColor36.value + " can't be entered into this section. This number is already here.");
            blnFound36 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor36.focus();
            }
        }

        if (rowColor36.value == sudRow2[8]) {
            alert(rowColor36.value + " can't be entered into this section. This number is already here.");
            blnFound36 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor36.focus();
            }
        }


        if (blnFound36 == false) {
            rowColor36.style.backgroundColor = "green";
            sudRow3[6] = rowColor36.value;
            count = 0;
        } else {
            rowColor36.value = "";
            sudRow3[6] = "";
            if (blnForceGreen == true) {
                rowColor36.style.backgroundColor = "green";
            } else {
                rowColor36.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor36.focus();
        }
    }
}


function row3col8() {
    if (row38.value.length == 0) {
        alert("Please enter a value in row 3 column 9.");
        row38.style.backgroundColor = "lightblue";
        row38.focus();
    } else {
        var blnFound38 = false;
        for (var i = 0; i < sudRow3.length; i++) {
            if (i == 8) {
                i += 1;
            }
            if (rowColor38.value == sudRow3[i]) {
                alert(rowColor38.value + " can't be entered into row 3. This number is already here.");
                blnFound38 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor38.focus();
                }
                if (blnFound38 == true) {
                    break;
                }
            }
        }

        if (rowColor38.value == sudRow1[8]) {
            alert(rowColor38.value + " can't be entered into column 9. This number is already here.");
            blnFound38 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor38.focus();
            }
        }

        if (rowColor38.value == sudRow2[8]) {
            alert(rowColor38.value + " can't be entered into column 9. This number is already here.");
            blnFound38 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor38.focus();
            }
        }

        if (rowColor38.value == sudRow4[8]) {
            alert(rowColor38.value + " can't be entered into column 9. This number is already here.");
            blnFound38 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor38.focus();
            }
        }

        if (rowColor38.value == sudRow5[8]) {
            alert(rowColor38.value + " can't be entered into column 9. This number is already here.");
            blnFound38 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor38.focus();
            }
        }

        if (rowColor38.value == sudRow6[8]) {
            alert(rowColor38.value + " can't be entered into column 9. This number is already here.");
            blnFound38 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor38.focus();
            }
        }

        if (rowColor38.value == sudRow7[8]) {
            alert(rowColor38.value + " can't be entered into column 9. This number is already here.");
            blnFound38 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor38.focus();
            }
        }

        if (rowColor38.value == sudRow8[8]) {
            alert(rowColor38.value + " can't be entered into column 9. This number is already here.");
            blnFound38 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor38.focus();
            }
        }

        if (rowColor38.value == sudRow9[8]) {
            alert(rowColor38.value + " can't be entered into column 9. This number is already here.");
            blnFound38 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor38.focus();
            }
        }

        if (rowColor38.value == sudRow1[6]) {
            alert(rowColor38.value + " can't be entered into this section. This number is already here.");
            blnFound38 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor38.focus();
            }
        }

        if (rowColor38.value == sudRow1[7]) {
            alert(rowColor38.value + " can't be entered into this section. This number is already here.");
            blnFound38 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor38.focus();
            }
        }

        if (rowColor38.value == sudRow2[6]) {
            alert(rowColor38.value + " can't be entered into this section. This number is already here.");
            blnFound38 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor38.focus();
            }
        }

        if (rowColor38.value == sudRow2[7]) {
            alert(rowColor38.value + " can't be entered into this section. This number is already here.");
            blnFound38 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor38.focus();
            }
        }


        if (blnFound38 == false) {
            rowColor38.style.backgroundColor = "green";
            sudRow3[8] = rowColor38.value;
            count = 0;
        } else {
            rowColor38.value = "";
            sudRow3[8] = "";
            if (blnForceGreen == true) {
                rowColor38.style.backgroundColor = "green";
            } else {
                rowColor38.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor38.focus();
        }
    }

}

function row4col1() {
    if (row41.value.length == 0) {
        alert("Please enter a value in row 4 column 2.");
        row41.style.backgroundColor = "lightblue";
        row41.focus();
    } else {
        var blnFound41 = false;
        for (var i = 0; i < sudRow4.length; i++) {
            if (i == 1) {
                i += 1;
            }
            if (rowColor41.value == sudRow4[i]) {
                alert(rowColor41.value + " can't be entered into row 4. This number is already here.");
                blnFound41 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor41.focus();
                }
                if (blnFound41 == true) {
                    break;
                }
            }
        }

        if (rowColor41.value == sudRow1[1]) {
            alert(rowColor41.value + " can't be entered into column 2. This number is already here.");
            blnFound41 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor41.focus();
            }
        }

        if (rowColor41.value == sudRow2[1]) {
            alert(rowColor41.value + " can't be entered into column 2. This number is already here.");
            blnFound41 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor41.focus();
            }
        }

        if (rowColor41.value == sudRow3[1]) {
            alert(rowColor41.value + " can't be entered into column 2. This number is already here.");
            blnFound41 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor41.focus();
            }
        }

        if (rowColor41.value == sudRow5[1]) {
            alert(rowColor41.value + " can't be entered into column 2. This number is already here.");
            blnFound41 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor41.focus();
            }
        }

        if (rowColor41.value == sudRow6[1]) {
            alert(rowColor41.value + " can't be entered into column 2. This number is already here.");
            blnFound41 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor41.focus();
            }
        }

        if (rowColor41.value == sudRow7[1]) {
            alert(rowColor41.value + " can't be entered into column 2. This number is already here.");
            blnFound41 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor41.focus();
            }
        }

        if (rowColor41.value == sudRow8[1]) {
            alert(rowColor41.value + " can't be entered into column 2. This number is already here.");
            blnFound41 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor41.focus();
            }
        }

        if (rowColor41.value == sudRow9[1]) {
            alert(rowColor41.value + " can't be entered into column 1. This number is already here.");
            blnFound41 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor41.focus();
            }
        }

        if (rowColor41.value == sudRow5[0]) {
            alert(rowColor41.value + " can't be entered into this section. This number is already here.");
            blnFound41 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor41.focus();
            }
        }

        if (rowColor41.value == sudRow5[2]) {
            alert(rowColor41.value + " can't be entered into this section. This number is already here.");
            blnFound41 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor41.focus();
            }
        }

        if (rowColor41.value == sudRow6[0]) {
            alert(rowColor41.value + " can't be entered into this section. This number is already here.");
            blnFound41 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor41.focus();
            }
        }

        if (rowColor41.value == sudRow6[2]) {
            alert(rowColor41.value + " can't be entered into this section. This number is already here.");
            blnFound41 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor41.focus();
            }
        }


        if (blnFound41 == false) {
            rowColor41.style.backgroundColor = "green";
            sudRow4[1] = rowColor41.value;
            count = 0;
        } else {
            rowColor41.value = "";
            sudRow4[1] = "";
            if (blnForceGreen == true) {
                rowColor41.style.backgroundColor = "green";
            } else {
                rowColor41.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor41.focus();
        }
    }

}

function row4col2() {
    if (row42.value.length == 0) {
        alert("Please enter a value in row 4 column 3.");
        row42.style.backgroundColor = "lightblue";
        row42.focus();
    } else {
        var blnFound42 = false;
        for (var i = 0; i < sudRow4.length; i++) {
            if (i == 2) {
                i += 1;
            }
            if (rowColor42.value == sudRow4[i]) {
                alert(rowColor42.value + " can't be entered into row 4. This number is already here.");
                blnFound42 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor42.focus();
                }
                if (blnFound42 == true) {
                    break;
                }
            }
        }

        if (rowColor42.value == sudRow1[2]) {
            alert(rowColor42.value + " can't be entered into column 3. This number is already here.");
            blnFound42 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor42.focus();
            }
        }

        if (rowColor42.value == sudRow2[2]) {
            alert(rowColor42.value + " can't be entered into column 3. This number is already here.");
            blnFound42 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor42.focus();
            }
        }

        if (rowColor42.value == sudRow3[2]) {
            alert(rowColor42.value + " can't be entered into column 3. This number is already here.");
            blnFound42 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor42.focus();
            }
        }

        if (rowColor42.value == sudRow5[2]) {
            alert(rowColor42.value + " can't be entered into column 3. This number is already here.");
            blnFound42 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor42.focus();
            }
        }

        if (rowColor42.value == sudRow6[2]) {
            alert(rowColor42.value + " can't be entered into column 3. This number is already here.");
            blnFound42 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor42.focus();
            }
        }

        if (rowColor42.value == sudRow7[2]) {
            alert(rowColor42.value + " can't be entered into column 3. This number is already here.");
            blnFound42 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor42.focus();
            }
        }

        if (rowColor42.value == sudRow8[2]) {
            alert(rowColor42.value + " can't be entered into column 3. This number is already here.");
            blnFound42 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor42.focus();
            }
        }

        if (rowColor42.value == sudRow9[2]) {
            alert(rowColor42.value + " can't be entered into column 3. This number is already here.");
            blnFound42 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor42.focus();
            }
        }

        if (rowColor42.value == sudRow5[0]) {
            alert(rowColor42.value + " can't be entered into this section. This number is already here.");
            blnFound42 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor42.focus();
            }
        }

        if (rowColor42.value == sudRow5[1]) {
            alert(rowColor42.value + " can't be entered into this section. This number is already here.");
            blnFound42 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor42.focus();
            }
        }

        if (rowColor42.value == sudRow6[0]) {
            alert(rowColor42.value + " can't be entered into this section. This number is already here.");
            blnFound42 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor42.focus();
            }
        }

        if (rowColor42.value == sudRow6[1]) {
            alert(rowColor42.value + " can't be entered into this section. This number is already here.");
            blnFound42 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor42.focus();
            }
        }


        if (blnFound42 == false) {
            rowColor42.style.backgroundColor = "green";
            sudRow4[2] = rowColor42.value;
            count = 0;
        } else {
            rowColor42.value = "";
            sudRow4[2] = "";
            if (blnForceGreen == true) {
                rowColor42.style.backgroundColor = "green";
            } else {
                rowColor42.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor42.focus();
        }
    }

}

function row4col3() {
    if (row43.value.length == 0) {
        alert("Please enter a value in row 4 column 4.");
        row43.style.backgroundColor = "lightblue";
        row43.focus();
    } else {
        var blnFound43 = false;
        for (var i = 0; i < sudRow4.length; i++) {
            if (i == 3) {
                i += 1;
            }
            if (rowColor43.value == sudRow4[i]) {
                alert(rowColor43.value + " can't be entered into row 4. This number is already here.");
                blnFound43 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor43.focus();
                }
                if (blnFound43 == true) {
                    break;
                }
            }
        }

        if (rowColor43.value == sudRow1[3]) {
            alert(rowColor43.value + " can't be entered into column 4. This number is already here.");
            blnFound43 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor43.focus();
            }
        }

        if (rowColor43.value == sudRow2[3]) {
            alert(rowColor43.value + " can't be entered into column 4. This number is already here.");
            blnFound43 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor43.focus();
            }
        }

        if (rowColor43.value == sudRow3[3]) {
            alert(rowColor43.value + " can't be entered into column 4. This number is already here.");
            blnFound43 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor43.focus();
            }
        }

        if (rowColor43.value == sudRow5[3]) {
            alert(rowColor43.value + " can't be entered into column 4. This number is already here.");
            blnFound43 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor43.focus();
            }
        }

        if (rowColor43.value == sudRow6[3]) {
            alert(rowColor43.value + " can't be entered into column 4. This number is already here.");
            blnFound43 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor43.focus();
            }
        }

        if (rowColor43.value == sudRow7[3]) {
            alert(rowColor43.value + " can't be entered into column 4. This number is already here.");
            blnFound43 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor43.focus();
            }
        }

        if (rowColor43.value == sudRow8[3]) {
            alert(rowColor43.value + " can't be entered into column 4. This number is already here.");
            blnFound43 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor43.focus();
            }
        }

        if (rowColor43.value == sudRow9[3]) {
            alert(rowColor43.value + " can't be entered into column 4. This number is already here.");
            blnFound43 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor43.focus();
            }
        }

        if (rowColor43.value == sudRow5[4]) {
            alert(rowColor43.value + " can't be entered into this section. This number is already here.");
            blnFound43 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor43.focus();
            }
        }

        if (rowColor43.value == sudRow5[5]) {
            alert(rowColor43.value + " can't be entered into this section. This number is already here.");
            blnFound43 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor43.focus();
            }
        }

        if (rowColor43.value == sudRow6[4]) {
            alert(rowColor43.value + " can't be entered into this section. This number is already here.");
            blnFound43 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor43.focus();
            }
        }

        if (rowColor43.value == sudRow6[5]) {
            alert(rowColor43.value + " can't be entered into this section. This number is already here.");
            blnFound43 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor43.focus();
            }
        }


        if (blnFound43 == false) {
            rowColor43.style.backgroundColor = "green";
            sudRow4[3] = rowColor43.value;
            count = 0;
        } else {
            rowColor43.value = "";
            sudRow4[3] = "";
            if (blnForceGreen == true) {
                rowColor43.style.backgroundColor = "green";
            } else {
                rowColor43.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor43.focus();
        }
    }

}

function row4col5() {
    if (row45.value.length == 0) {
        alert("Please enter a value in row 4 column 6.");
        row45.style.backgroundColor = "lightblue";
        row45.focus();
    } else {
        var blnFound45 = false;
        for (var i = 0; i < sudRow4.length; i++) {
            if (i == 5) {
                i += 1;
            }
            if (rowColor45.value == sudRow4[i]) {
                alert(rowColor45.value + " can't be entered into row 4. This number is already here.");
                blnFound45 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor45.focus();
                }
                if (blnFound45 == true) {
                    break;
                }
            }
        }

        if (rowColor45.value == sudRow1[5]) {
            alert(rowColor45.value + " can't be entered into column 6. This number is already here.");
            blnFound45 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor45.focus();
            }
        }

        if (rowColor45.value == sudRow2[5]) {
            alert(rowColor45.value + " can't be entered into column 6. This number is already here.");
            blnFound45 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor45.focus();
            }
        }

        if (rowColor45.value == sudRow3[5]) {
            alert(rowColor45.value + " can't be entered into column 6. This number is already here.");
            blnFound45 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor45.focus();
            }
        }

        if (rowColor45.value == sudRow5[5]) {
            alert(rowColor45.value + " can't be entered into column 6. This number is already here.");
            blnFound45 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor45.focus();
            }
        }

        if (rowColor45.value == sudRow6[5]) {
            alert(rowColor45.value + " can't be entered into column 6. This number is already here.");
            blnFound45 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor45.focus();
            }
        }

        if (rowColor45.value == sudRow7[5]) {
            alert(rowColor45.value + " can't be entered into column 6. This number is already here.");
            blnFound45 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor45.focus();
            }
        }

        if (rowColor45.value == sudRow8[5]) {
            alert(rowColor45.value + " can't be entered into column 6. This number is already here.");
            blnFound45 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor45.focus();
            }
        }

        if (rowColor45.value == sudRow9[5]) {
            alert(rowColor45.value + " can't be entered into column 6. This number is already here.");
            blnFound45 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor45.focus();
            }
        }

        if (rowColor45.value == sudRow5[3]) {
            alert(rowColor45.value + " can't be entered into this section. This number is already here.");
            blnFound45 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor45.focus();
            }
        }

        if (rowColor45.value == sudRow5[4]) {
            alert(rowColor45.value + " can't be entered into this section. This number is already here.");
            blnFound45 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor45.focus();
            }
        }

        if (rowColor45.value == sudRow6[3]) {
            alert(rowColor45.value + " can't be entered into this section. This number is already here.");
            blnFound45 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor45.focus();
            }
        }

        if (rowColor45.value == sudRow6[4]) {
            alert(rowColor45.value + " can't be entered into this section. This number is already here.");
            blnFound45 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor45.focus();
            }
        }


        if (blnFound45 == false) {
            rowColor45.style.backgroundColor = "green";
            sudRow4[5] = rowColor45.value;
            count = 0;
        } else {
            rowColor45.value = "";
            sudRow4[5] = "";
            if (blnForceGreen == true) {
                rowColor45.style.backgroundColor = "green";
            } else {
                rowColor45.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor45.focus();
        }
    }

}

function row4col6() {
    if (row46.value.length == 0) {
        alert("Please enter a value in row 4 column 7.");
        row46.style.backgroundColor = "lightblue";
        row46.focus();
    } else {
        var blnFound46 = false;
        for (var i = 0; i < sudRow4.length; i++) {
            if (i == 6) {
                i += 1;
            }
            if (rowColor46.value == sudRow4[i]) {
                alert(rowColor46.value + " can't be entered into row 4. This number is already here.");
                blnFound46 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor46.focus();
                }
                if (blnFound46 == true) {
                    break;
                }
            }
        }

        if (rowColor46.value == sudRow1[6]) {
            alert(rowColor46.value + " can't be entered into column 7. This number is already here.");
            blnFound46 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor46.focus();
            }
        }

        if (rowColor46.value == sudRow2[6]) {
            alert(rowColor46.value + " can't be entered into column 7. This number is already here.");
            blnFound46 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor46.focus();
            }
        }

        if (rowColor46.value == sudRow3[6]) {
            alert(rowColor46.value + " can't be entered into column 7. This number is already here.");
            blnFound46 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor46.focus();
            }
        }

        if (rowColor46.value == sudRow5[6]) {
            alert(rowColor46.value + " can't be entered into column 7. This number is already here.");
            blnFound46 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor46.focus();
            }
        }

        if (rowColor46.value == sudRow6[6]) {
            alert(rowColor46.value + " can't be entered into column 7. This number is already here.");
            blnFound46 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor46.focus();
            }
        }

        if (rowColor46.value == sudRow7[6]) {
            alert(rowColor46.value + " can't be entered into column 7. This number is already here.");
            blnFound46 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor46.focus();
            }
        }

        if (rowColor46.value == sudRow8[6]) {
            alert(rowColor46.value + " can't be entered into column 7. This number is already here.");
            blnFound46 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor46.focus();
            }
        }

        if (rowColor46.value == sudRow9[6]) {
            alert(rowColor46.value + " can't be entered into column 7. This number is already here.");
            blnFound46 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor46.focus();
            }
        }

        if (rowColor46.value == sudRow5[7]) {
            alert(rowColor46.value + " can't be entered into this section. This number is already here.");
            blnFound46 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor46.focus();
            }
        }

        if (rowColor46.value == sudRow5[8]) {
            alert(rowColor46.value + " can't be entered into this section. This number is already here.");
            blnFound46 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor46.focus();
            }
        }

        if (rowColor46.value == sudRow6[7]) {
            alert(rowColor46.value + " can't be entered into this section. This number is already here.");
            blnFound46 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor46.focus();
            }
        }

        if (rowColor46.value == sudRow6[8]) {
            alert(rowColor46.value + " can't be entered into this section. This number is already here.");
            blnFound46 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor46.focus();
            }
        }


        if (blnFound46 == false) {
            rowColor46.style.backgroundColor = "green";
            sudRow4[6] = rowColor46.value;
            count = 0;
        } else {
            rowColor46.value = "";
            sudRow4[6] = "";
            if (blnForceGreen == true) {
                rowColor46.style.backgroundColor = "green";
            } else {
                rowColor46.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor46.focus();
        }
    }

}

function row4col7() {
    if (row47.value.length == 0) {
        alert("Please enter a value in row 4 column 8.");
        row47.style.backgroundColor = "lightblue";
        row47.focus();
    } else {
        var blnFound47 = false;
        for (var i = 0; i < sudRow4.length; i++) {
            if (i == 7) {
                i += 1;
            }
            if (rowColor47.value == sudRow4[i]) {
                alert(rowColor47.value + " can't be entered into row 4. This number is already here.");
                blnFound47 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor47.focus();
                }
                if (blnFound47 == true) {
                    break;
                }
            }
        }

        if (rowColor47.value == sudRow1[7]) {
            alert(rowColor47.value + " can't be entered into column 8. This number is already here.");
            blnFound47 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor47.focus();
            }
        }

        if (rowColor47.value == sudRow2[7]) {
            alert(rowColor47.value + " can't be entered into column 8. This number is already here.");
            blnFound47 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor47.focus();
            }
        }

        if (rowColor47.value == sudRow3[7]) {
            alert(rowColor47.value + " can't be entered into column 8. This number is already here.");
            blnFound47 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor47.focus();
            }
        }

        if (rowColor47.value == sudRow5[7]) {
            alert(rowColor47.value + " can't be entered into column 8. This number is already here.");
            blnFound47 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor47.focus();
            }
        }

        if (rowColor47.value == sudRow6[7]) {
            alert(rowColor47.value + " can't be entered into column 8. This number is already here.");
            blnFound47 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor47.focus();
            }
        }

        if (rowColor47.value == sudRow7[7]) {
            alert(rowColor47.value + " can't be entered into column 8. This number is already here.");
            blnFound47 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor47.focus();
            }
        }

        if (rowColor47.value == sudRow8[7]) {
            alert(rowColor47.value + " can't be entered into column 8. This number is already here.");
            blnFound47 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor47.focus();
            }
        }

        if (rowColor47.value == sudRow9[7]) {
            alert(rowColor47.value + " can't be entered into column 8. This number is already here.");
            blnFound47 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor47.focus();
            }
        }

        if (rowColor47.value == sudRow5[6]) {
            alert(rowColor47.value + " can't be entered into this section. This number is already here.");
            blnFound47 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor47.focus();
            }
        }

        if (rowColor47.value == sudRow5[8]) {
            alert(rowColor47.value + " can't be entered into this section. This number is already here.");
            blnFound47 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor47.focus();
            }
        }

        if (rowColor47.value == sudRow6[6]) {
            alert(rowColor47.value + " can't be entered into this section. This number is already here.");
            blnFound47 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor47.focus();
            }
        }

        if (rowColor47.value == sudRow6[8]) {
            alert(rowColor47.value + " can't be entered into this section. This number is already here.");
            blnFound47 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor47.focus();
            }
        }


        if (blnFound47 == false) {
            rowColor47.style.backgroundColor = "green";
            sudRow4[7] = rowColor47.value;
            count = 0;
        } else {
            rowColor47.value = "";
            sudRow4[7] = "";
            if (blnForceGreen == true) {
                rowColor47.style.backgroundColor = "green";
            } else {
                rowColor47.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor47.focus();
        }
    }

}

function row5col1() {
    if (row51.value.length == 0) {
        alert("Please enter a value in row 5 column 2.");
        row51.style.backgroundColor = "lightblue";
        row51.focus();
    } else {
        var blnFound51 = false;
        for (var i = 0; i < sudRow5.length; i++) {
            if (i == 1) {
                i += 1;
            }
            if (rowColor51.value == sudRow5[i]) {
                alert(rowColor51.value + " can't be entered into row 5. This number is already here.");
                blnFound51 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor51.focus();
                }
                if (blnFound51 == true) {
                    break;
                }
            }
        }

        if (rowColor51.value == sudRow1[1]) {
            alert(rowColor51.value + " can't be entered into column 2. This number is already here.");
            blnFound51 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor51.focus();
            }
        }

        if (rowColor51.value == sudRow2[1]) {
            alert(rowColor51.value + " can't be entered into column 2. This number is already here.");
            blnFound51 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor51.focus();
            }
        }

        if (rowColor51.value == sudRow3[1]) {
            alert(rowColor51.value + " can't be entered into column 2. This number is already here.");
            blnFound51 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor51.focus();
            }
        }

        if (rowColor51.value == sudRow4[1]) {
            alert(rowColor51.value + " can't be entered into column 2. This number is already here.");
            blnFound51 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor51.focus();
            }
        }

        if (rowColor51.value == sudRow6[1]) {
            alert(rowColor51.value + " can't be entered into column 2. This number is already here.");
            blnFound51 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor51.focus();
            }
        }

        if (rowColor51.value == sudRow7[1]) {
            alert(rowColor51.value + " can't be entered into column 2. This number is already here.");
            blnFound51 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor51.focus();
            }
        }

        if (rowColor51.value == sudRow8[1]) {
            alert(rowColor51.value + " can't be entered into column 2. This number is already here.");
            blnFound51 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor51.focus();
            }
        }

        if (rowColor51.value == sudRow9[1]) {
            alert(rowColor51.value + " can't be entered into column 2. This number is already here.");
            blnFound51 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor51.focus();
            }
        }

        if (rowColor51.value == sudRow4[0]) {
            alert(rowColor51.value + " can't be entered into this section. This number is already here.");
            blnFound51 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor51.focus();
            }
        }

        if (rowColor51.value == sudRow4[2]) {
            alert(rowColor51.value + " can't be entered into this section. This number is already here.");
            blnFound51 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor51.focus();
            }
        }

        if (rowColor51.value == sudRow6[0]) {
            alert(rowColor51.value + " can't be entered into this section. This number is already here.");
            blnFound51 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor51.focus();
            }
        }

        if (rowColor51.value == sudRow6[2]) {
            alert(rowColor51.value + " can't be entered into this section. This number is already here.");
            blnFound51 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor51.focus();
            }
        }


        if (blnFound51 == false) {
            rowColor51.style.backgroundColor = "green";
            sudRow5[1] = rowColor51.value;
            count = 0;
        } else {
            rowColor51.value = "";
            sudRow5[1] = "";
            if (blnForceGreen == true) {
                rowColor51.style.backgroundColor = "green";
            } else {
                rowColor51.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor51.focus();
        }
    }

}

function row5col2() {
    if (row52.value.length == 0) {
        alert("Please enter a value in row 5 column 3.");
        row52.style.backgroundColor = "lightblue";
        row52.focus();
    } else {
        var blnFound52 = false;
        for (var i = 0; i < sudRow5.length; i++) {
            if (i == 2) {
                i += 1;
            }
            if (rowColor52.value == sudRow5[i]) {
                alert(rowColor52.value + " can't be entered into row 5. This number is already here.");
                blnFound52 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor52.focus();
                }
                if (blnFound52 == true) {
                    break;
                }
            }
        }

        if (rowColor52.value == sudRow1[2]) {
            alert(rowColor52.value + " can't be entered into column 3. This number is already here.");
            blnFound52 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor52.focus();
            }
        }

        if (rowColor52.value == sudRow2[2]) {
            alert(rowColor52.value + " can't be entered into column 3. This number is already here.");
            blnFound52 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor52.focus();
            }
        }

        if (rowColor52.value == sudRow3[2]) {
            alert(rowColor52.value + " can't be entered into column 3. This number is already here.");
            blnFound52 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor52.focus();
            }
        }

        if (rowColor52.value == sudRow4[2]) {
            alert(rowColor52.value + " can't be entered into column 3. This number is already here.");
            blnFound52 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor52.focus();
            }
        }

        if (rowColor52.value == sudRow6[2]) {
            alert(rowColor52.value + " can't be entered into column 3. This number is already here.");
            blnFound52 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor52.focus();
            }
        }

        if (rowColor52.value == sudRow7[2]) {
            alert(rowColor52.value + " can't be entered into column 3. This number is already here.");
            blnFound52 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor52.focus();
            }
        }

        if (rowColor52.value == sudRow8[2]) {
            alert(rowColor52.value + " can't be entered into column 3. This number is already here.");
            blnFound52 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor52.focus();
            }
        }

        if (rowColor52.value == sudRow9[2]) {
            alert(rowColor52.value + " can't be entered into column 3. This number is already here.");
            blnFound52 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor52.focus();
            }
        }

        if (rowColor52.value == sudRow4[0]) {
            alert(rowColor52.value + " can't be entered into this section. This number is already here.");
            blnFound52 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor52.focus();
            }
        }

        if (rowColor52.value == sudRow4[1]) {
            alert(rowColor52.value + " can't be entered into this section. This number is already here.");
            blnFound52 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor52.focus();
            }
        }

        if (rowColor52.value == sudRow6[0]) {
            alert(rowColor52.value + " can't be entered into this section. This number is already here.");
            blnFound52 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor52.focus();
            }
        }

        if (rowColor52.value == sudRow6[1]) {
            alert(rowColor52.value + " can't be entered into this section. This number is already here.");
            blnFound52 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor52.focus();
            }
        }


        if (blnFound52 == false) {
            rowColor52.style.backgroundColor = "green";
            sudRow5[2] = rowColor52.value;
            count = 0;
        } else {
            rowColor52.value = "";
            sudRow5[2] = "";
            if (blnForceGreen == true) {
                rowColor52.style.backgroundColor = "green";
            } else {
                rowColor52.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor52.focus();
        }
    }

}

function row5col4() {
    if (row54.value.length == 0) {
        alert("Please enter a value in row 5 column 5.");
        row54.style.backgroundColor = "lightblue";
        row54.focus();
    } else {
        var blnFound54 = false;
        for (var i = 0; i < sudRow5.length; i++) {
            if (i == 4) {
                i += 1;
            }
            if (rowColor54.value == sudRow5[i]) {
                alert(rowColor54.value + " can't be entered into row 5. This number is already here.");
                blnFound54 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor54.focus();
                }
                if (blnFound54 == true) {
                    break;
                }
            }
        }

        if (rowColor54.value == sudRow1[4]) {
            alert(rowColor54.value + " can't be entered into column 5. This number is already here.");
            blnFound54 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor54.focus();
            }
        }

        if (rowColor54.value == sudRow2[4]) {
            alert(rowColor54.value + " can't be entered into column 5. This number is already here.");
            blnFound54 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor54.focus();
            }
        }

        if (rowColor54.value == sudRow3[4]) {
            alert(rowColor54.value + " can't be entered into column 5. This number is already here.");
            blnFound54 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor54.focus();
            }
        }

        if (rowColor54.value == sudRow4[4]) {
            alert(rowColor54.value + " can't be entered into column 5. This number is already here.");
            blnFound54 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor54.focus();
            }
        }

        if (rowColor54.value == sudRow6[4]) {
            alert(rowColor54.value + " can't be entered into column 5. This number is already here.");
            blnFound54 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor54.focus();
            }
        }

        if (rowColor54.value == sudRow7[4]) {
            alert(rowColor54.value + " can't be entered into column 5. This number is already here.");
            blnFound54 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor54.focus();
            }
        }

        if (rowColor54.value == sudRow8[4]) {
            alert(rowColor54.value + " can't be entered into column 5. This number is already here.");
            blnFound54 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor54.focus();
            }
        }

        if (rowColor54.value == sudRow9[4]) {
            alert(rowColor54.value + " can't be entered into column 5. This number is already here.");
            blnFound54 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor54.focus();
            }
        }

        if (rowColor54.value == sudRow4[3]) {
            alert(rowColor54.value + " can't be entered into this section. This number is already here.");
            blnFound54 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor54.focus();
            }
        }

        if (rowColor54.value == sudRow4[5]) {
            alert(rowColor54.value + " can't be entered into this section. This number is already here.");
            blnFound54 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor54.focus();
            }
        }

        if (rowColor54.value == sudRow6[3]) {
            alert(rowColor54.value + " can't be entered into this section. This number is already here.");
            blnFound54 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor54.focus();
            }
        }

        if (rowColor54.value == sudRow6[5]) {
            alert(rowColor54.value + " can't be entered into this section. This number is already here.");
            blnFound54 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor54.focus();
            }
        }


        if (blnFound54 == false) {
            rowColor54.style.backgroundColor = "green";
            sudRow5[4] = rowColor54.value;
            count = 0;
        } else {
            rowColor54.value = "";
            sudRow5[4] = "";
            if (blnForceGreen == true) {
                rowColor54.style.backgroundColor = "green";
            } else {
                rowColor54.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor54.focus();
        }
    }

}

function row5col6() {
    if (row56.value.length == 0) {
        alert("Please enter a value in row 5 column 7.");
        row56.style.backgroundColor = "lightblue";
        row56.focus();
    } else {
        var blnFound56 = false;
        for (var i = 0; i < sudRow5.length; i++) {
            if (i == 6) {
                i += 1;
            }
            if (rowColor56.value == sudRow5[i]) {
                alert(rowColor56.value + " can't be entered into row 5. This number is already here.");
                blnFound56 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor56.focus();
                }
                if (blnFound56 == true) {
                    break;
                }
            }
        }

        if (rowColor56.value == sudRow1[6]) {
            alert(rowColor56.value + " can't be entered into column 7. This number is already here.");
            blnFound56 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor56.focus();
            }
        }

        if (rowColor56.value == sudRow2[6]) {
            alert(rowColor56.value + " can't be entered into column 7. This number is already here.");
            blnFound56 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor56.focus();
            }
        }

        if (rowColor56.value == sudRow3[6]) {
            alert(rowColor56.value + " can't be entered into column 7. This number is already here.");
            blnFound56 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor56.focus();
            }
        }

        if (rowColor56.value == sudRow4[6]) {
            alert(rowColor56.value + " can't be entered into column 7. This number is already here.");
            blnFound56 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor56.focus();
            }
        }

        if (rowColor56.value == sudRow6[6]) {
            alert(rowColor56.value + " can't be entered into column 7. This number is already here.");
            blnFound56 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor56.focus();
            }
        }

        if (rowColor56.value == sudRow7[6]) {
            alert(rowColor56.value + " can't be entered into column 7. This number is already here.");
            blnFound56 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor56.focus();
            }
        }

        if (rowColor56.value == sudRow8[6]) {
            alert(rowColor56.value + " can't be entered into column 7. This number is already here.");
            blnFound56 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor56.focus();
            }
        }

        if (rowColor56.value == sudRow9[6]) {
            alert(rowColor56.value + " can't be entered into column 7. This number is already here.");
            blnFound56 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor56.focus();
            }
        }

        if (rowColor56.value == sudRow4[7]) {
            alert(rowColor56.value + " can't be entered into this section. This number is already here.");
            blnFound56 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor56.focus();
            }
        }

        if (rowColor56.value == sudRow4[8]) {
            alert(rowColor56.value + " can't be entered into this section. This number is already here.");
            blnFound56 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor56.focus();
            }
        }

        if (rowColor56.value == sudRow6[7]) {
            alert(rowColor56.value + " can't be entered into this section. This number is already here.");
            blnFound56 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor56.focus();
            }
        }

        if (rowColor56.value == sudRow6[8]) {
            alert(rowColor56.value + " can't be entered into this section. This number is already here.");
            blnFound56 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor56.focus();
            }
        }


        if (blnFound56 == false) {
            rowColor56.style.backgroundColor = "green";
            sudRow5[6] = rowColor56.value;
            count = 0;
        } else {
            rowColor56.value = "";
            sudRow5[6] = "";
            if (blnForceGreen == true) {
                rowColor56.style.backgroundColor = "green";
            } else {
                rowColor56.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor56.focus();
        }
    }

}

function row5col7() {
    if (row57.value.length == 0) {
        alert("Please enter a value in row 5 column 8.");
        row57.style.backgroundColor = "lightblue";
        row57.focus();
    } else {
        var blnFound57 = false;
        for (var i = 0; i < sudRow5.length; i++) {
            if (i == 7) {
                i += 1;
            }
            if (rowColor57.value == sudRow5[i]) {
                alert(rowColor57.value + " can't be entered into row 5. This number is already here.");
                blnFound57 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor57.focus();
                }
                if (blnFound57 == true) {
                    break;
                }
            }
        }

        if (rowColor57.value == sudRow1[7]) {
            alert(rowColor57.value + " can't be entered into column 8. This number is already here.");
            blnFound57 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor57.focus();
            }
        }

        if (rowColor57.value == sudRow2[7]) {
            alert(rowColor57.value + " can't be entered into column 8. This number is already here.");
            blnFound57 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor57.focus();
            }
        }

        if (rowColor57.value == sudRow3[7]) {
            alert(rowColor57.value + " can't be entered into column 8. This number is already here.");
            blnFound57 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor57.focus();
            }
        }

        if (rowColor57.value == sudRow4[7]) {
            alert(rowColor57.value + " can't be entered into column 8. This number is already here.");
            blnFound57 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor57.focus();
            }
        }

        if (rowColor57.value == sudRow6[7]) {
            alert(rowColor57.value + " can't be entered into column 8. This number is already here.");
            blnFound57 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor57.focus();
            }
        }

        if (rowColor57.value == sudRow7[7]) {
            alert(rowColor57.value + " can't be entered into column 8. This number is already here.");
            blnFound57 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor57.focus();
            }
        }

        if (rowColor57.value == sudRow8[7]) {
            alert(rowColor57.value + " can't be entered into column 8. This number is already here.");
            blnFound57 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor57.focus();
            }
        }

        if (rowColor57.value == sudRow9[7]) {
            alert(rowColor57.value + " can't be entered into column 8. This number is already here.");
            blnFound57 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor57.focus();
            }
        }

        if (rowColor57.value == sudRow4[6]) {
            alert(rowColor57.value + " can't be entered into this section. This number is already here.");
            blnFound57 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor57.focus();
            }
        }

        if (rowColor57.value == sudRow4[8]) {
            alert(rowColor57.value + " can't be entered into this section. This number is already here.");
            blnFound57 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor57.focus();
            }
        }

        if (rowColor57.value == sudRow6[6]) {
            alert(rowColor57.value + " can't be entered into this section. This number is already here.");
            blnFound57 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor57.focus();
            }
        }

        if (rowColor57.value == sudRow6[8]) {
            alert(rowColor57.value + " can't be entered into this section. This number is already here.");
            blnFound57 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor57.focus();
            }
        }


        if (blnFound57 == false) {
            rowColor57.style.backgroundColor = "green";
            sudRow5[7] = rowColor57.value;
            count = 0;
        } else {
            rowColor57.value = "";
            sudRow5[7] = "";
            if (blnForceGreen == true) {
                rowColor57.style.backgroundColor = "green";
            } else {
                rowColor57.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor57.focus();
        }
    }

}

function row6col1() {
    if (row61.value.length == 0) {
        alert("Please enter a value in row 6 column 2.");
        row61.style.backgroundColor = "lightblue";
        row61.focus();
    } else {
        var blnFound61 = false;
        for (var i = 0; i < sudRow6.length; i++) {
            if (i == 1) {
                i += 1;
            }
            if (rowColor61.value == sudRow6[i]) {
                alert(rowColor61.value + " can't be entered into row 6. This number is already here.");
                blnFound61 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor61.focus();
                }
                if (blnFound61 == true) {
                    break;
                }
            }
        }

        if (rowColor61.value == sudRow1[1]) {
            alert(rowColor61.value + " can't be entered into column 2. This number is already here.");
            blnFound61 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor61.focus();
            }
        }

        if (rowColor61.value == sudRow2[1]) {
            alert(rowColor61.value + " can't be entered into column 2. This number is already here.");
            blnFound61 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor61.focus();
            }
        }

        if (rowColor61.value == sudRow3[1]) {
            alert(rowColor61.value + " can't be entered into column 2. This number is already here.");
            blnFound61 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor61.focus();
            }
        }

        if (rowColor61.value == sudRow4[1]) {
            alert(rowColor61.value + " can't be entered into column 2. This number is already here.");
            blnFound61 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor61.focus();
            }
        }

        if (rowColor61.value == sudRow5[1]) {
            alert(rowColor61.value + " can't be entered into column 2. This number is already here.");
            blnFound61 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor61.focus();
            }
        }

        if (rowColor61.value == sudRow7[1]) {
            alert(rowColor61.value + " can't be entered into column 2. This number is already here.");
            blnFound61 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor61.focus();
            }
        }

        if (rowColor61.value == sudRow8[1]) {
            alert(rowColor61.value + " can't be entered into column 2. This number is already here.");
            blnFound61 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor61.focus();
            }
        }

        if (rowColor61.value == sudRow9[1]) {
            alert(rowColor61.value + " can't be entered into column 2. This number is already here.");
            blnFound61 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor61.focus();
            }
        }

        if (rowColor61.value == sudRow4[0]) {
            alert(rowColor61.value + " can't be entered into this section. This number is already here.");
            blnFound61 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor61.focus();
            }
        }

        if (rowColor61.value == sudRow4[2]) {
            alert(rowColor61.value + " can't be entered into this section. This number is already here.");
            blnFound61 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor61.focus();
            }
        }

        if (rowColor61.value == sudRow5[0]) {
            alert(rowColor61.value + " can't be entered into this section. This number is already here.");
            blnFound61 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor61.focus();
            }
        }

        if (rowColor61.value == sudRow5[2]) {
            alert(rowColor61.value + " can't be entered into this section. This number is already here.");
            blnFound61 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor61.focus();
            }
        }


        if (blnFound61 == false) {
            rowColor61.style.backgroundColor = "green";
            sudRow6[1] = rowColor61.value;
            count = 0;
        } else {
            rowColor61.value = "";
            sudRow6[1] = "";
            if (blnForceGreen == true) {
                rowColor61.style.backgroundColor = "green";
            } else {
                rowColor61.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor61.focus();
        }
    }

}

function row6col2() {
    if (row62.value.length == 0) {
        alert("Please enter a value in row 6 column 3.");
        row62.style.backgroundColor = "lightblue";
        row62.focus();
    } else {
        var blnFound62 = false;
        for (var i = 0; i < sudRow6.length; i++) {
            if (i == 2) {
                i += 1;
            }
            if (rowColor62.value == sudRow6[i]) {
                alert(rowColor62.value + " can't be entered into row 6. This number is already here.");
                blnFound62 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor62.focus();
                }
                if (blnFound62 == true) {
                    break;
                }
            }
        }

        if (rowColor62.value == sudRow1[2]) {
            alert(rowColor62.value + " can't be entered into column 3. This number is already here.");
            blnFound62 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor62.focus();
            }
        }

        if (rowColor62.value == sudRow2[2]) {
            alert(rowColor62.value + " can't be entered into column 3. This number is already here.");
            blnFound62 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor62.focus();
            }
        }

        if (rowColor62.value == sudRow3[2]) {
            alert(rowColor62.value + " can't be entered into column 3. This number is already here.");
            blnFound62 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor62.focus();
            }
        }

        if (rowColor62.value == sudRow4[2]) {
            alert(rowColor62.value + " can't be entered into column 3. This number is already here.");
            blnFound62 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor62.focus();
            }
        }

        if (rowColor62.value == sudRow5[2]) {
            alert(rowColor62.value + " can't be entered into column 3. This number is already here.");
            blnFound62 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor62.focus();
            }
        }

        if (rowColor62.value == sudRow7[2]) {
            alert(rowColor62.value + " can't be entered into column 3. This number is already here.");
            blnFound62 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor62.focus();
            }
        }

        if (rowColor62.value == sudRow8[2]) {
            alert(rowColor62.value + " can't be entered into column 3. This number is already here.");
            blnFound62 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor62.focus();
            }
        }

        if (rowColor62.value == sudRow9[2]) {
            alert(rowColor62.value + " can't be entered into column 3. This number is already here.");
            blnFound62 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor62.focus();
            }
        }

        if (rowColor62.value == sudRow4[0]) {
            alert(rowColor62.value + " can't be entered into this section. This number is already here.");
            blnFound62 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor62.focus();
            }
        }

        if (rowColor62.value == sudRow4[1]) {
            alert(rowColor62.value + " can't be entered into this section. This number is already here.");
            blnFound62 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor62.focus();
            }
        }

        if (rowColor62.value == sudRow5[0]) {
            alert(rowColor62.value + " can't be entered into this section. This number is already here.");
            blnFound62 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor62.focus();
            }
        }

        if (rowColor62.value == sudRow5[1]) {
            alert(rowColor62.value + " can't be entered into this section. This number is already here.");
            blnFound62 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor62.focus();
            }
        }


        if (blnFound62 == false) {
            rowColor62.style.backgroundColor = "green";
            sudRow6[2] = rowColor62.value;
            count = 0;
        } else {
            rowColor62.value = "";
            sudRow6[2] = "";
            if (blnForceGreen == true) {
                rowColor62.style.backgroundColor = "green";
            } else {
                rowColor62.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor62.focus();
        }
    }

}

function row6col3() {
    if (row63.value.length == 0) {
        alert("Please enter a value in row 6 column 4.");
        row63.style.backgroundColor = "lightblue";
        row63.focus();
    } else {
        var blnFound63 = false;
        for (var i = 0; i < sudRow6.length; i++) {
            if (i == 3) {
                i += 1;
            }
            if (rowColor63.value == sudRow6[i]) {
                alert(rowColor63.value + " can't be entered into row 6. This number is already here.");
                blnFound63 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor63.focus();
                }
                if (blnFound63 == true) {
                    break;
                }
            }
        }

        if (rowColor63.value == sudRow1[3]) {
            alert(rowColor63.value + " can't be entered into column 4. This number is already here.");
            blnFound63 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor63.focus();
            }
        }

        if (rowColor63.value == sudRow2[3]) {
            alert(rowColor63.value + " can't be entered into column 4. This number is already here.");
            blnFound63 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor63.focus();
            }
        }

        if (rowColor63.value == sudRow3[3]) {
            alert(rowColor63.value + " can't be entered into column 4. This number is already here.");
            blnFound63 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor63.focus();
            }
        }

        if (rowColor63.value == sudRow4[3]) {
            alert(rowColor63.value + " can't be entered into column 4. This number is already here.");
            blnFound63 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor63.focus();
            }
        }

        if (rowColor63.value == sudRow5[3]) {
            alert(rowColor63.value + " can't be entered into column 4. This number is already here.");
            blnFound63 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor63.focus();
            }
        }

        if (rowColor63.value == sudRow7[3]) {
            alert(rowColor63.value + " can't be entered into column 4. This number is already here.");
            blnFound63 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor63.focus();
            }
        }

        if (rowColor63.value == sudRow8[3]) {
            alert(rowColor63.value + " can't be entered into column 4. This number is already here.");
            blnFound63 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor63.focus();
            }
        }

        if (rowColor63.value == sudRow9[3]) {
            alert(rowColor63.value + " can't be entered into column 4. This number is already here.");
            blnFound63 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor63.focus();
            }
        }

        if (rowColor63.value == sudRow4[4]) {
            alert(rowColor63.value + " can't be entered into this section. This number is already here.");
            blnFound63 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor63.focus();
            }
        }

        if (rowColor63.value == sudRow4[5]) {
            alert(rowColor63.value + " can't be entered into this section. This number is already here.");
            blnFound63 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor63.focus();
            }
        }

        if (rowColor63.value == sudRow5[4]) {
            alert(rowColor63.value + " can't be entered into this section. This number is already here.");
            blnFound63 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor63.focus();
            }
        }

        if (rowColor63.value == sudRow5[5]) {
            alert(rowColor63.value + " can't be entered into this section. This number is already here.");
            blnFound63 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor63.focus();
            }
        }


        if (blnFound63 == false) {
            rowColor63.style.backgroundColor = "green";
            sudRow6[3] = rowColor63.value;
            count = 0;
        } else {
            rowColor63.value = "";
            sudRow6[3] = "";
            if (blnForceGreen == true) {
                rowColor63.style.backgroundColor = "green";
            } else {
                rowColor63.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor63.focus();
        }
    }

}

function row6col5() {
    if (row65.value.length == 0) {
        alert("Please enter a value in row 6 column 6.");
        row65.style.backgroundColor = "lightblue";
        row65.focus();
    } else {
        var blnFound65 = false;
        for (var i = 0; i < sudRow6.length; i++) {
            if (i == 5) {
                i += 1;
            }
            if (rowColor65.value == sudRow6[i]) {
                alert(rowColor65.value + " can't be entered into row 6. This number is already here.");
                blnFound65 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor65.focus();
                }
                if (blnFound65 == true) {
                    break;
                }
            }
        }

        if (rowColor65.value == sudRow1[5]) {
            alert(rowColor65.value + " can't be entered into column 6. This number is already here.");
            blnFound65 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor65.focus();
            }
        }

        if (rowColor65.value == sudRow2[5]) {
            alert(rowColor65.value + " can't be entered into column 6. This number is already here.");
            blnFound65 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor65.focus();
            }
        }

        if (rowColor65.value == sudRow3[5]) {
            alert(rowColor65.value + " can't be entered into column 6. This number is already here.");
            blnFound65 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor65.focus();
            }
        }

        if (rowColor65.value == sudRow4[5]) {
            alert(rowColor65.value + " can't be entered into column 6. This number is already here.");
            blnFound65 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor65.focus();
            }
        }

        if (rowColor65.value == sudRow5[5]) {
            alert(rowColor65.value + " can't be entered into column 6. This number is already here.");
            blnFound65 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor65.focus();
            }
        }

        if (rowColor65.value == sudRow7[5]) {
            alert(rowColor65.value + " can't be entered into column 6. This number is already here.");
            blnFound65 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor65.focus();
            }
        }

        if (rowColor65.value == sudRow8[5]) {
            alert(rowColor65.value + " can't be entered into column 6. This number is already here.");
            blnFound65 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor65.focus();
            }
        }

        if (rowColor65.value == sudRow9[5]) {
            alert(rowColor65.value + " can't be entered into column 6. This number is already here.");
            blnFound65 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor65.focus();
            }
        }

        if (rowColor65.value == sudRow4[3]) {
            alert(rowColor65.value + " can't be entered into this section. This number is already here.");
            blnFound65 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor65.focus();
            }
        }

        if (rowColor65.value == sudRow4[4]) {
            alert(rowColor65.value + " can't be entered into this section. This number is already here.");
            blnFound65 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor65.focus();
            }
        }

        if (rowColor65.value == sudRow5[3]) {
            alert(rowColor65.value + " can't be entered into this section. This number is already here.");
            blnFound65 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor65.focus();
            }
        }

        if (rowColor65.value == sudRow5[4]) {
            alert(rowColor65.value + " can't be entered into this section. This number is already here.");
            blnFound65 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor65.focus();
            }
        }


        if (blnFound65 == false) {
            rowColor65.style.backgroundColor = "green";
            sudRow6[5] = rowColor65.value;
            count = 0;
        } else {
            rowColor65.value = "";
            sudRow6[5] = "";
            if (blnForceGreen == true) {
                rowColor65.style.backgroundColor = "green";
            } else {
                rowColor65.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor65.focus();
        }
    }

}

function row6col6() {
    if (row66.value.length == 0) {
        alert("Please enter a value in row 6 column 7.");
        row66.style.backgroundColor = "lightblue";
        row66.focus();
    } else {
        var blnFound66 = false;
        for (var i = 0; i < sudRow6.length; i++) {
            if (i == 6) {
                i += 1;
            }
            if (rowColor66.value == sudRow6[i]) {
                alert(rowColor66.value + " can't be entered into row 6. This number is already here.");
                blnFound66 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor66.focus();
                }
                if (blnFound66 == true) {
                    break;
                }
            }
        }

        if (rowColor66.value == sudRow1[6]) {
            alert(rowColor66.value + " can't be entered into column 7. This number is already here.");
            blnFound66 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor66.focus();
            }
        }

        if (rowColor66.value == sudRow2[6]) {
            alert(rowColor66.value + " can't be entered into column 7. This number is already here.");
            blnFound66 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor66.focus();
            }
        }

        if (rowColor66.value == sudRow3[6]) {
            alert(rowColor66.value + " can't be entered into column 7. This number is already here.");
            blnFound66 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor66.focus();
            }
        }

        if (rowColor66.value == sudRow4[6]) {
            alert(rowColor66.value + " can't be entered into column 7. This number is already here.");
            blnFound66 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor66.focus();
            }
        }

        if (rowColor66.value == sudRow5[6]) {
            alert(rowColor66.value + " can't be entered into column 7. This number is already here.");
            blnFound66 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor66.focus();
            }
        }

        if (rowColor66.value == sudRow7[6]) {
            alert(rowColor66.value + " can't be entered into column 7. This number is already here.");
            blnFound66 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor66.focus();
            }
        }

        if (rowColor66.value == sudRow8[6]) {
            alert(rowColor66.value + " can't be entered into column 7. This number is already here.");
            blnFound66 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor66.focus();
            }
        }

        if (rowColor66.value == sudRow9[6]) {
            alert(rowColor66.value + " can't be entered into column 7. This number is already here.");
            blnFound66 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor66.focus();
            }
        }

        if (rowColor66.value == sudRow4[7]) {
            alert(rowColor66.value + " can't be entered into this section. This number is already here.");
            blnFound66 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor66.focus();
            }
        }

        if (rowColor66.value == sudRow4[8]) {
            alert(rowColor66.value + " can't be entered into this section. This number is already here.");
            blnFound66 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor66.focus();
            }
        }

        if (rowColor66.value == sudRow5[7]) {
            alert(rowColor66.value + " can't be entered into this section. This number is already here.");
            blnFound66 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor66.focus();
            }
        }

        if (rowColor66.value == sudRow5[8]) {
            alert(rowColor66.value + " can't be entered into this section. This number is already here.");
            blnFound66 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor66.focus();
            }
        }


        if (blnFound66 == false) {
            rowColor66.style.backgroundColor = "green";
            sudRow6[6] = rowColor66.value;
            count = 0;
        } else {
            rowColor66.value = "";
            sudRow6[6] = "";
            if (blnForceGreen == true) {
                rowColor66.style.backgroundColor = "green";
            } else {
                rowColor66.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor66.focus();
        }
    }

}

function row6col7() {
    if (row67.value.length == 0) {
        alert("Please enter a value in row 6 column 8.");
        row67.style.backgroundColor = "lightblue";
        row67.focus();
    } else {
        var blnFound67 = false;
        for (var i = 0; i < sudRow6.length; i++) {
            if (i == 7) {
                i += 1;
            }
            if (rowColor67.value == sudRow6[i]) {
                alert(rowColor67.value + " can't be entered into row 6. This number is already here.");
                blnFound67 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor67.focus();
                }
                if (blnFound67 == true) {
                    break;
                }
            }
        }

        if (rowColor67.value == sudRow1[7]) {
            alert(rowColor67.value + " can't be entered into column 8. This number is already here.");
            blnFound67 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor67.focus();
            }
        }

        if (rowColor67.value == sudRow2[7]) {
            alert(rowColor67.value + " can't be entered into column 8. This number is already here.");
            blnFound67 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor67.focus();
            }
        }

        if (rowColor67.value == sudRow3[7]) {
            alert(rowColor67.value + " can't be entered into column 8. This number is already here.");
            blnFound67 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor67.focus();
            }
        }

        if (rowColor67.value == sudRow4[7]) {
            alert(rowColor67.value + " can't be entered into column 8. This number is already here.");
            blnFound67 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor67.focus();
            }
        }

        if (rowColor67.value == sudRow5[7]) {
            alert(rowColor67.value + " can't be entered into column 8. This number is already here.");
            blnFound67 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor67.focus();
            }
        }

        if (rowColor67.value == sudRow7[7]) {
            alert(rowColor67.value + " can't be entered into column 8. This number is already here.");
            blnFound67 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor67.focus();
            }
        }

        if (rowColor67.value == sudRow8[7]) {
            alert(rowColor67.value + " can't be entered into column 8. This number is already here.");
            blnFound67 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor67.focus();
            }
        }

        if (rowColor67.value == sudRow9[7]) {
            alert(rowColor67.value + " can't be entered into column 8. This number is already here.");
            blnFound67 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor67.focus();
            }
        }

        if (rowColor67.value == sudRow4[6]) {
            alert(rowColor67.value + " can't be entered into this section. This number is already here.");
            blnFound67 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor67.focus();
            }
        }

        if (rowColor67.value == sudRow4[8]) {
            alert(rowColor67.value + " can't be entered into this section. This number is already here.");
            blnFound67 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor67.focus();
            }
        }

        if (rowColor67.value == sudRow5[6]) {
            alert(rowColor67.value + " can't be entered into this section. This number is already here.");
            blnFound67 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor67.focus();
            }
        }

        if (rowColor67.value == sudRow5[8]) {
            alert(rowColor67.value + " can't be entered into this section. This number is already here.");
            blnFound67 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor67.focus();
            }
        }


        if (blnFound67 == false) {
            rowColor67.style.backgroundColor = "green";
            sudRow6[7] = rowColor67.value;
            count = 0;
        } else {
            rowColor67.value = "";
            sudRow6[7] = "";
            if (blnForceGreen == true) {
                rowColor67.style.backgroundColor = "green";
            } else {
                rowColor67.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor67.focus();
        }
    }

}

function row7col0() {
    if (row70.value.length == 0) {
        alert("Please enter a value in row 7 column 1.");
        row70.style.backgroundColor = "lightblue";
        row70.focus();
    } else {
        var blnFound70 = false;
        for (var i = 0; i < sudRow7.length; i++) {
            if (i == 0) {
                i += 1;
            }
            if (rowColor70.value == sudRow7[i]) {
                alert(rowColor70.value + " can't be entered into row 7. This number is already here.");
                blnFound70 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor70.focus();
                }
                if (blnFound70 == true) {
                    break;
                }
            }
        }

        if (rowColor70.value == sudRow1[0]) {
            alert(rowColor70.value + " can't be entered into column 1. This number is already here.");
            blnFound70 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor70.focus();
            }
        }

        if (rowColor70.value == sudRow2[0]) {
            alert(rowColor70.value + " can't be entered into column 1. This number is already here.");
            blnFound70 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor70.focus();
            }
        }

        if (rowColor70.value == sudRow3[0]) {
            alert(rowColor70.value + " can't be entered into column 1. This number is already here.");
            blnFound70 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor70.focus();
            }
        }

        if (rowColor70.value == sudRow4[0]) {
            alert(rowColor70.value + " can't be entered into column 1. This number is already here.");
            blnFound70 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor70.focus();
            }
        }

        if (rowColor70.value == sudRow5[0]) {
            alert(rowColor70.value + " can't be entered into column 1. This number is already here.");
            blnFound70 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor70.focus();
            }
        }

        if (rowColor70.value == sudRow6[0]) {
            alert(rowColor70.value + " can't be entered into column 1. This number is already here.");
            blnFound70 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor70.focus();
            }
        }

        if (rowColor70.value == sudRow8[0]) {
            alert(rowColor70.value + " can't be entered into column 1. This number is already here.");
            blnFound70 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor70.focus();
            }
        }

        if (rowColor70.value == sudRow9[0]) {
            alert(rowColor70.value + " can't be entered into column 1. This number is already here.");
            blnFound70 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor70.focus();
            }
        }

        if (rowColor70.value == sudRow8[1]) {
            alert(rowColor70.value + " can't be entered into this section. This number is already here.");
            blnFound70 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor70.focus();
            }
        }

        if (rowColor70.value == sudRow8[2]) {
            alert(rowColor70.value + " can't be entered into this section. This number is already here.");
            blnFound70 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor70.focus();
            }
        }

        if (rowColor70.value == sudRow9[1]) {
            alert(rowColor70.value + " can't be entered into this section. This number is already here.");
            blnFound70 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor70.focus();
            }
        }

        if (rowColor70.value == sudRow9[2]) {
            alert(rowColor70.value + " can't be entered into this section. This number is already here.");
            blnFound70 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor70.focus();
            }
        }


        if (blnFound70 == false) {
            rowColor70.style.backgroundColor = "green";
            sudRow7[0] = rowColor70.value;
            count = 0;
        } else {
            rowColor70.value = "";
            sudRow7[0] = "";
            if (blnForceGreen == true) {
                rowColor70.style.backgroundColor = "green";
            } else {
                rowColor70.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor70.focus();
        }
    }
}

function row7col2() {
    if (row72.value.length == 0) {
        alert("Please enter a value in row 7 column 3.");
        row72.style.backgroundColor = "lightblue";
        row72.focus();
    } else {
        var blnFound72 = false;
        for (var i = 0; i < sudRow7.length; i++) {
            if (i == 2) {
                i += 1;
            }
            if (rowColor72.value == sudRow7[i]) {
                alert(rowColor72.value + " can't be entered into row 7. This number is already here.");
                blnFound72 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor72.focus();
                }
                if (blnFound72 == true) {
                    break;
                }
            }
        }

        if (rowColor72.value == sudRow1[2]) {
            alert(rowColor72.value + " can't be entered into column 3. This number is already here.");
            blnFound72 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor72.focus();
            }
        }

        if (rowColor72.value == sudRow2[2]) {
            alert(rowColor72.value + " can't be entered into column 3. This number is already here.");
            blnFound72 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor72.focus();
            }
        }

        if (rowColor72.value == sudRow3[2]) {
            alert(rowColor72.value + " can't be entered into column 3. This number is already here.");
            blnFound72 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor72.focus();
            }
        }

        if (rowColor72.value == sudRow4[2]) {
            alert(rowColor72.value + " can't be entered into column 3. This number is already here.");
            blnFound72 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor72.focus();
            }
        }

        if (rowColor72.value == sudRow5[2]) {
            alert(rowColor72.value + " can't be entered into column 3. This number is already here.");
            blnFound72 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor72.focus();
            }
        }

        if (rowColor72.value == sudRow6[2]) {
            alert(rowColor72.value + " can't be entered into column 3. This number is already here.");
            blnFound72 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor72.focus();
            }
        }

        if (rowColor72.value == sudRow8[2]) {
            alert(rowColor72.value + " can't be entered into column 3. This number is already here.");
            blnFound72 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor72.focus();
            }
        }

        if (rowColor72.value == sudRow9[2]) {
            alert(rowColor72.value + " can't be entered into column 3. This number is already here.");
            blnFound72 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor72.focus();
            }
        }

        if (rowColor72.value == sudRow8[0]) {
            alert(rowColor72.value + " can't be entered into this section. This number is already here.");
            blnFound72 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor72.focus();
            }
        }

        if (rowColor72.value == sudRow8[1]) {
            alert(rowColor72.value + " can't be entered into this section. This number is already here.");
            blnFound72 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor72.focus();
            }
        }

        if (rowColor72.value == sudRow9[0]) {
            alert(rowColor72.value + " can't be entered into this section. This number is already here.");
            blnFound72 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor72.focus();
            }
        }

        if (rowColor72.value == sudRow9[1]) {
            alert(rowColor72.value + " can't be entered into this section. This number is already here.");
            blnFound72 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor72.focus();
            }
        }


        if (blnFound72 == false) {
            rowColor72.style.backgroundColor = "green";
            sudRow7[2] = rowColor72.value;
            count = 0;
        } else {
            rowColor72.value = "";
            sudRow7[2] = "";
            if (blnForceGreen == true) {
                rowColor72.style.backgroundColor = "green";
            } else {
                rowColor72.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor72.focus();
        }
    }

}

function row7col3() {
    if (row73.value.length == 0) {
        alert("Please enter a value in row 7 column 4.");
        row73.style.backgroundColor = "lightblue";
        row73.focus();
    } else {
        var blnFound73 = false;
        for (var i = 0; i < sudRow7.length; i++) {
            if (i == 3) {
                i += 1;
            }
            if (rowColor73.value == sudRow7[i]) {
                alert(rowColor73.value + " can't be entered into row 7. This number is already here.");
                blnFound73 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor73.focus();
                }
                if (blnFound73 == true) {
                    break;
                }
            }
        }

        if (rowColor73.value == sudRow1[3]) {
            alert(rowColor73.value + " can't be entered into column 4 This number is already here.");
            blnFound73 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor73.focus();
            }
        }

        if (rowColor73.value == sudRow2[3]) {
            alert(rowColor73.value + " can't be entered into column 4. This number is already here.");
            blnFound73 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor73.focus();
            }
        }

        if (rowColor73.value == sudRow3[3]) {
            alert(rowColor73.value + " can't be entered into column 4. This number is already here.");
            blnFound73 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor73.focus();
            }
        }

        if (rowColor73.value == sudRow4[3]) {
            alert(rowColor73.value + " can't be entered into column 4. This number is already here.");
            blnFound73 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor73.focus();
            }
        }

        if (rowColor73.value == sudRow5[3]) {
            alert(rowColor73.value + " can't be entered into column 4. This number is already here.");
            blnFound73 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor73.focus();
            }
        }

        if (rowColor73.value == sudRow6[3]) {
            alert(rowColor73.value + " can't be entered into column 4. This number is already here.");
            blnFound73 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor73.focus();
            }
        }

        if (rowColor73.value == sudRow8[3]) {
            alert(rowColor73.value + " can't be entered into column 4. This number is already here.");
            blnFound73 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor73.focus();
            }
        }

        if (rowColor73.value == sudRow9[3]) {
            alert(rowColor73.value + " can't be entered into column 4. This number is already here.");
            blnFound73 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor73.focus();
            }
        }

        if (rowColor73.value == sudRow8[4]) {
            alert(rowColor73.value + " can't be entered into this section. This number is already here.");
            blnFound73 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor73.focus();
            }
        }

        if (rowColor73.value == sudRow8[5]) {
            alert(rowColor73.value + " can't be entered into this section. This number is already here.");
            blnFound73 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor73.focus();
            }
        }

        if (rowColor73.value == sudRow9[4]) {
            alert(rowColor73.value + " can't be entered into this section. This number is already here.");
            blnFound73 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor73.focus();
            }
        }

        if (rowColor73.value == sudRow9[5]) {
            alert(rowColor73.value + " can't be entered into this section. This number is already here.");
            blnFound73 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor73.focus();
            }
        }


        if (blnFound73 == false) {
            rowColor73.style.backgroundColor = "green";
            sudRow7[3] = rowColor73.value;
            count = 0;
        } else {
            rowColor73.value = "";
            sudRow7[3] = "";

            if (blnForceGreen == true) {
                rowColor73.style.backgroundColor = "green";
            } else {
                rowColor73.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor73.focus();
        }
    }

}

function row7col4() {
    if (row74.value.length == 0) {
        alert("Please enter a value in row 7 column 5.");
        row74.style.backgroundColor = "lightblue";
        row74.focus();
    } else {
        var blnFound74 = false;
        for (var i = 0; i < sudRow7.length; i++) {
            if (i == 4) {
                i += 1;
            }

            if (rowColor74.value == sudRow7[i]) {
                alert(rowColor74.value + " can't be entered into row 7. This number is already here.");
                blnFound74 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor74.focus();
                }
                if (blnFound74 == true) {
                    break;
                }
            }
        }

        if (rowColor74.value == sudRow1[4]) {
            alert(rowColor74.value + " can't be entered into column 5 This number is already here.");
            blnFound74 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor74.focus();
            }
        }

        if (rowColor74.value == sudRow2[4]) {
            alert(rowColor74.value + " can't be entered into column 5. This number is already here.");
            blnFound74 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor74.focus();
            }
        }

        if (rowColor74.value == sudRow3[4]) {
            alert(rowColor74.value + " can't be entered into column 5. This number is already here.");
            blnFound74 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor74.focus();
            }
        }

        if (rowColor74.value == sudRow4[4]) {
            alert(rowColor74.value + " can't be entered into column 5. This number is already here.");
            blnFound74 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor74.focus();
            }
        }

        if (rowColor74.value == sudRow5[4]) {
            alert(rowColor74.value + " can't be entered into column 5. This number is already here.");
            blnFound74 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor74.focus();
            }
        }

        if (rowColor74.value == sudRow6[4]) {
            alert(rowColor74.value + " can't be entered into column 5. This number is already here.");
            blnFound74 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor74.focus();
            }
        }

        if (rowColor74.value == sudRow8[4]) {
            alert(rowColor74.value + " can't be entered into column 5. This number is already here.");
            blnFound74 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor74.focus();
            }
        }

        if (rowColor74.value == sudRow9[4]) {
            alert(rowColor74.value + " can't be entered into column 5. This number is already here.");
            blnFound74 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor74.focus();
            }
        }

        if (rowColor74.value == sudRow8[3]) {
            alert(rowColor74.value + " can't be entered into this section. This number is already here.");
            blnFound74 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor74.focus();
            }
        }

        if (rowColor74.value == sudRow8[5]) {
            alert(rowColor74.value + " can't be entered into this section. This number is already here.");
            blnFound74 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor74.focus();
            }
        }

        if (rowColor74.value == sudRow9[3]) {
            alert(rowColor74.value + " can't be entered into this section. This number is already here.");
            blnFound74 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor74.focus();
            }
        }

        if (rowColor74.value == sudRow9[5]) {
            alert(rowColor74.value + " can't be entered into this section. This number is already here.");
            blnFound74 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor74.focus();
            }
        }


        if (blnFound74 == false) {
            rowColor74.style.backgroundColor = "green";
            sudRow7[4] = rowColor74.value;
            count = 0;
        } else {
            rowColor74.value = "";
            sudRow7[4] = "";
            if (blnForceGreen == true) {
                rowColor74.style.backgroundColor = "green";
            } else {
                rowColor74.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor74.focus();
        }
    }

}

function row7col5() {
    if (row75.value.length == 0) {
        alert("Please enter a value in row 7 column 6.");
        row75.style.backgroundColor = "lightblue";
        row75.focus();
    } else {
        var blnFound75 = false;
        for (var i = 0; i < sudRow7.length; i++) {
            if (i == 5) {
                i += 1;
            }
            if (rowColor75.value == sudRow7[i]) {
                alert(rowColor75.value + " can't be entered into row 7. This number is already here.");
                blnFound75 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor75.focus();
                }
                if (blnFound75 == true) {
                    break;
                }
            }
        }

        if (rowColor75.value == sudRow1[5]) {
            alert(rowColor75.value + " can't be entered into column 6 This number is already here.");
            blnFound75 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor75.focus();
            }
        }

        if (rowColor75.value == sudRow2[5]) {
            alert(rowColor75.value + " can't be entered into column 6. This number is already here.");
            blnFound75 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor75.focus();
            }
        }

        if (rowColor75.value == sudRow3[5]) {
            alert(rowColor75.value + " can't be entered into column 6. This number is already here.");
            blnFound75 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor75.focus();
            }
        }

        if (rowColor75.value == sudRow4[5]) {
            alert(rowColor75.value + " can't be entered into column 6. This number is already here.");
            blnFound75 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor75.focus();
            }
        }

        if (rowColor75.value == sudRow5[5]) {
            alert(rowColor75.value + " can't be entered into column 6. This number is already here.");
            blnFound75 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor75.focus();
            }
        }

        if (rowColor75.value == sudRow6[5]) {
            alert(rowColor75.value + " can't be entered into column 6. This number is already here.");
            blnFound75 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor75.focus();
            }
        }

        if (rowColor75.value == sudRow8[5]) {
            alert(rowColor75.value + " can't be entered into column 6. This number is already here.");
            blnFound75 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor75.focus();
            }
        }

        if (rowColor75.value == sudRow9[5]) {
            alert(rowColor75.value + " can't be entered into column 6. This number is already here.");
            blnFound75 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor75.focus();
            }
        }

        if (rowColor75.value == sudRow8[3]) {
            alert(rowColor75.value + " can't be entered into this section. This number is already here.");
            blnFound75 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor75.focus();
            }
        }

        if (rowColor75.value == sudRow8[4]) {
            alert(rowColor75.value + " can't be entered into this section. This number is already here.");
            blnFound75 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor75.focus();
            }
        }

        if (rowColor75.value == sudRow9[3]) {
            alert(rowColor75.value + " can't be entered into this section. This number is already here.");
            blnFound75 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor75.focus();
            }
        }

        if (rowColor75.value == sudRow9[4]) {
            alert(rowColor75.value + " can't be entered into this section. This number is already here.");
            blnFound75 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor75.focus();
            }
        }


        if (blnFound75 == false) {
            rowColor75.style.backgroundColor = "green";
            sudRow7[5] = rowColor75.value;
            count = 0;
        } else {
            rowColor75.value = "";
            sudRow7[5] = "";
            if (blnForceGreen == true) {
                rowColor75.style.backgroundColor = "green";
            } else {
                rowColor75.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor75.focus();
        }
    }

}

function row7col8() {
    if (row78.value.length == 0) {
        alert("Please enter a value in row 7 column 9.");
        row78.style.backgroundColor = "lightblue";
        row78.focus();
    } else {
        var blnFound78 = false;
        for (var i = 0; i < sudRow7.length; i++) {
            if (i == 8) {
                i += 1;
            }
            if (rowColor78.value == sudRow7[i]) {
                alert(rowColor78.value + " can't be entered into row 7. This number is already here.");
                blnFound78 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor78.focus();
                }
                if (blnFound78 == true) {
                    break;
                }
            }
        }

        if (rowColor78.value == sudRow1[8]) {
            alert(rowColor78.value + " can't be entered into column 9 This number is already here.");
            blnFound78 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor78.focus();
            }
        }

        if (rowColor78.value == sudRow2[8]) {
            alert(rowColor78.value + " can't be entered into column 9. This number is already here.");
            blnFound78 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor78.focus();
            }
        }

        if (rowColor78.value == sudRow3[8]) {
            alert(rowColor78.value + " can't be entered into column 9. This number is already here.");
            blnFound78 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor78.focus();
            }
        }

        if (rowColor78.value == sudRow4[8]) {
            alert(rowColor78.value + " can't be entered into column 9. This number is already here.");
            blnFound78 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor78.focus();
            }
        }

        if (rowColor78.value == sudRow5[8]) {
            alert(rowColor78.value + " can't be entered into column 9. This number is already here.");
            blnFound78 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor78.focus();
            }
        }

        if (rowColor78.value == sudRow6[8]) {
            alert(rowColor78.value + " can't be entered into column 9. This number is already here.");
            blnFound78 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor78.focus();
            }
        }

        if (rowColor78.value == sudRow8[8]) {
            alert(rowColor78.value + " can't be entered into column 9. This number is already here.");
            blnFound78 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor78.focus();
            }
        }

        if (rowColor78.value == sudRow9[8]) {
            alert(rowColor78.value + " can't be entered into column 9. This number is already here.");
            blnFound78 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor78.focus();
            }
        }

        if (rowColor78.value == sudRow8[6]) {
            alert(rowColor78.value + " can't be entered into this section. This number is already here.");
            blnFound78 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor78.focus();
            }
        }

        if (rowColor78.value == sudRow8[7]) {
            alert(rowColor78.value + " can't be entered into this section. This number is already here.");
            blnFound78 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor78.focus();
            }
        }

        if (rowColor78.value == sudRow9[6]) {
            alert(rowColor78.value + " can't be entered into this section. This number is already here.");
            blnFound78 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor78.focus();
            }
        }

        if (rowColor78.value == sudRow9[7]) {
            alert(rowColor78.value + " can't be entered into this section. This number is already here.");
            blnFound78 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor78.focus();
            }
        }


        if (blnFound78 == false) {
            rowColor78.style.backgroundColor = "green";
            sudRow7[8] = rowColor78.value;
            count = 0;
        } else {
            rowColor78.value = "";
            sudRow7[8] = "";
            if (blnForceGreen == true) {
                rowColor78.style.backgroundColor = "green";
            } else {
                rowColor78.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor78.focus();
        }
    }

}

function row8col0() {
    if (row80.value.length == 0) {
        alert("Please enter a value in row 8 column 1.");
        row80.style.backgroundColor = "lightblue";
        row80.focus();
    } else {
        var blnFound80 = false;
        for (var i = 0; i < sudRow8.length; i++) {
            if (i == 0) {
                i += 1;
            }
            if (rowColor80.value == sudRow8[i]) {
                alert(rowColor80.value + " can't be entered into row 8. This number is already here.");
                blnFound80 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor80.focus();
                }
                if (blnFound80 == true) {
                    break;
                }
            }
        }

        if (rowColor80.value == sudRow1[0]) {
            alert(rowColor80.value + " can't be entered into column 1 This number is already here.");
            blnFound80 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor80.focus();
            }
        }

        if (rowColor80.value == sudRow2[0]) {
            alert(rowColor80.value + " can't be entered into column 1. This number is already here.");
            blnFound80 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor80.focus();
            }
        }

        if (rowColor80.value == sudRow3[0]) {
            alert(rowColor80.value + " can't be entered into column 1. This number is already here.");
            blnFound80 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor80.focus();
            }
        }

        if (rowColor80.value == sudRow4[0]) {
            alert(rowColor80.value + " can't be entered into column 1. This number is already here.");
            blnFound80 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor80.focus();
            }
        }

        if (rowColor80.value == sudRow5[0]) {
            alert(rowColor80.value + " can't be entered into column 1. This number is already here.");
            blnFound80 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor80.focus();
            }
        }

        if (rowColor80.value == sudRow6[0]) {
            alert(rowColor80.value + " can't be entered into column 1. This number is already here.");
            blnFound80 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor80.focus();
            }
        }

        if (rowColor80.value == sudRow7[0]) {
            alert(rowColor80.value + " can't be entered into column 1. This number is already here.");
            blnFound80 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor80.focus();
            }
        }

        if (rowColor80.value == sudRow9[0]) {
            alert(rowColor80.value + " can't be entered into column 1. This number is already here.");
            blnFound80 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor80.focus();
            }
        }

        if (rowColor80.value == sudRow7[1]) {
            alert(rowColor80.value + " can't be entered into this section. This number is already here.");
            blnFound80 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor80.focus();
            }
        }

        if (rowColor80.value == sudRow7[2]) {
            alert(rowColor80.value + " can't be entered into this section. This number is already here.");
            blnFound80 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor80.focus();
            }
        }

        if (rowColor80.value == sudRow9[1]) {
            alert(rowColor80.value + " can't be entered into this section. This number is already here.");
            blnFound80 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor80.focus();
            }
        }

        if (rowColor80.value == sudRow9[2]) {
            alert(rowColor80.value + " can't be entered into this section. This number is already here.");
            blnFound80 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor80.focus();
            }
        }


        if (blnFound80 == false) {
            rowColor80.style.backgroundColor = "green";
            sudRow8[0] = rowColor80.value;
            count = 0;
        } else {
            rowColor80.value = "";
            sudRow8[0] = "";
            if (blnForceGreen == true) {
                rowColor80.style.backgroundColor = "green";
            } else {
                rowColor80.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor80.focus();
        }
    }

}

function row8col1() {
    if (row81.value.length == 0) {
        alert("Please enter a value in row 8 column 2.");
        row81.style.backgroundColor = "lightblue";
        row81.focus();
    } else {
        var blnFound81 = false;
        for (var i = 0; i < sudRow8.length; i++) {
            if (i == 1) {
                i += 1;
            }
            if (rowColor81.value == sudRow8[i]) {
                alert(rowColor81.value + " can't be entered into row 8. This number is already here.");
                blnFound81 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor81.focus();
                }
                if (blnFound81 == true) {
                    break;
                }
            }
        }

        if (rowColor81.value == sudRow1[1]) {
            alert(rowColor81.value + " can't be entered into column 2 This number is already here.");
            blnFound81 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor81.focus();
            }
        }

        if (rowColor81.value == sudRow2[1]) {
            alert(rowColor81.value + " can't be entered into column 2. This number is already here.");
            blnFound81 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor81.focus();
            }
        }

        if (rowColor81.value == sudRow3[1]) {
            alert(rowColor81.value + " can't be entered into column 2. This number is already here.");
            blnFound81 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor81.focus();
            }
        }

        if (rowColor81.value == sudRow4[1]) {
            alert(rowColor81.value + " can't be entered into column 2. This number is already here.");
            blnFound81 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor81.focus();
            }
        }

        if (rowColor81.value == sudRow5[1]) {
            alert(rowColor81.value + " can't be entered into column 2. This number is already here.");
            blnFound81 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor81.focus();
            }
        }

        if (rowColor81.value == sudRow6[1]) {
            alert(rowColor81.value + " can't be entered into column 2. This number is already here.");
            blnFound81 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor81.focus();
            }
        }

        if (rowColor81.value == sudRow7[1]) {
            alert(rowColor81.value + " can't be entered into column 2. This number is already here.");
            blnFound81 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor81.focus();
            }
        }

        if (rowColor81.value == sudRow9[1]) {
            alert(rowColor81.value + " can't be entered into column 2. This number is already here.");
            blnFound81 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor81.focus();
            }
        }

        if (rowColor81.value == sudRow7[0]) {
            alert(rowColor81.value + " can't be entered into this section. This number is already here.");
            blnFound81 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor81.focus();
            }
        }

        if (rowColor81.value == sudRow7[2]) {
            alert(rowColor81.value + " can't be entered into this section. This number is already here.");
            blnFound81 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor81.focus();
            }
        }

        if (rowColor81.value == sudRow9[0]) {
            alert(rowColor81.value + " can't be entered into this section. This number is already here.");
            blnFound81 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor81.focus();
            }
        }

        if (rowColor81.value == sudRow9[2]) {
            alert(rowColor81.value + " can't be entered into this section. This number is already here.");
            blnFound81 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor81.focus();
            }
        }


        if (blnFound81 == false) {
            rowColor81.style.backgroundColor = "green";
            sudRow8[1] = rowColor81.value;
            count = 0;
        } else {
            rowColor81.value = "";
            sudRow8[1] = "";
            if (blnForceGreen == true) {
                rowColor81.style.backgroundColor = "green";
            } else {
                rowColor81.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor81.focus();
        }
    }

}

function row8col2() {
    if (row82.value.length == 0) {
        alert("Please enter a value in row 8 column 3.");
        row82.style.backgroundColor = "lightblue";
        row82.focus();
    } else {
        var blnFound82 = false;
        for (var i = 0; i < sudRow8.length; i++) {
            if (i == 2) {
                i += 1;
            }
            if (rowColor82.value == sudRow8[i]) {
                alert(rowColor82.value + " can't be entered into row 8. This number is already here.");
                blnFound82 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor82.focus();
                }
                if (blnFound82 == true) {
                    break;
                }
            }
        }

        if (rowColor82.value == sudRow1[2]) {
            alert(rowColor82.value + " can't be entered into column 3 This number is already here.");
            blnFound82 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor82.focus();
            }
        }

        if (rowColor82.value == sudRow2[2]) {
            alert(rowColor82.value + " can't be entered into column 3. This number is already here.");
            blnFound82 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor82.focus();
            }
        }

        if (rowColor82.value == sudRow3[2]) {
            alert(rowColor82.value + " can't be entered into column 3. This number is already here.");
            blnFound82 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor82.focus();
            }
        }

        if (rowColor82.value == sudRow4[2]) {
            alert(rowColor82.value + " can't be entered into column 3. This number is already here.");
            blnFound82 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor82.focus();
            }
        }

        if (rowColor82.value == sudRow5[2]) {
            alert(rowColor82.value + " can't be entered into column 3. This number is already here.");
            blnFound82 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor82.focus();
            }
        }

        if (rowColor82.value == sudRow6[2]) {
            alert(rowColor82.value + " can't be entered into column 3. This number is already here.");
            blnFound82 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor82.focus();
            }
        }

        if (rowColor82.value == sudRow7[2]) {
            alert(rowColor82.value + " can't be entered into column 3. This number is already here.");
            blnFound82 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor82.focus();
            }
        }

        if (rowColor82.value == sudRow9[2]) {
            alert(rowColor82.value + " can't be entered into column 3. This number is already here.");
            blnFound82 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor82.focus();
            }
        }

        if (rowColor82.value == sudRow7[0]) {
            alert(rowColor82.value + " can't be entered into this section. This number is already here.");
            blnFound82 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor82.focus();
            }
        }

        if (rowColor82.value == sudRow7[1]) {
            alert(rowColor82.value + " can't be entered into this section. This number is already here.");
            blnFound82 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor82.focus();
            }
        }

        if (rowColor82.value == sudRow9[0]) {
            alert(rowColor82.value + " can't be entered into this section. This number is already here.");
            blnFound82 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor82.focus();
            }
        }

        if (rowColor82.value == sudRow9[1]) {
            alert(rowColor82.value + " can't be entered into this section. This number is already here.");
            blnFound82 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor82.focus();
            }
        }


        if (blnFound82 == false) {
            rowColor82.style.backgroundColor = "green";
            sudRow8[2] = rowColor82.value;
            count = 0;
        } else {
            rowColor82.value = "";
            sudRow8[2] = "";
            if (blnForceGreen == true) {
                rowColor82.style.backgroundColor = "green";
            } else {
                rowColor82.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor82.focus();
        }
    }

}

function row8col6() {
    if (row86.value.length == 0) {
        alert("Please enter a value in row 8 column 7.");
        row86.style.backgroundColor = "lightblue";
        row86.focus();
    } else {
    var blnFound86 = false;
    for (var i = 0; i < sudRow8.length; i++) {
        if (i == 6) {
            i += 1;
        }
        if (rowColor86.value == sudRow8[i]) {
            alert(rowColor86.value + " can't be entered into row 8. This number is already here.");
            blnFound86 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor86.focus();
            }
            if (blnFound86 == true) {
                break;
            }
        }
    }

    if (rowColor86.value == sudRow1[6]) {
        alert(rowColor86.value + " can't be entered into column 7 This number is already here.");
        blnFound86 = true;
        if (blnSecondEntry == true) {
            blnForceGreen = true;
            rowColor86.focus();
        }
    }

    if (rowColor86.value == sudRow2[6]) {
        alert(rowColor86.value + " can't be entered into column 7. This number is already here.");
        blnFound86 = true;
        if (blnSecondEntry == true) {
            blnForceGreen = true;
            rowColor86.focus();
        }
    }

    if (rowColor86.value == sudRow3[6]) {
        alert(rowColor86.value + " can't be entered into column 7. This number is already here.");
        blnFound86 = true;
        if (blnSecondEntry == true) {
            blnForceGreen = true;
            rowColor86.focus();
        }
    }

    if (rowColor86.value == sudRow4[6]) {
        alert(rowColor86.value + " can't be entered into column 7. This number is already here.");
        blnFound86 = true;
        if (blnSecondEntry == true) {
            blnForceGreen = true;
            rowColor86.focus();
        }
    }

    if (rowColor86.value == sudRow5[6]) {
        alert(rowColor86.value + " can't be entered into column 7. This number is already here.");
        blnFound86 = true;
        if (blnSecondEntry == true) {
            blnForceGreen = true;
           rowColor86.focus();
        }
    }

    if (rowColor86.value == sudRow6[6]) {
        alert(rowColor86.value + " can't be entered into column 7. This number is already here.");
        blnFound86 = true;
        if (blnSecondEntry == true) {
            blnForceGreen = true;
            rowColor86.focus();
        }
    }

    if (rowColor86.value == sudRow7[6]) {
        alert(rowColor86.value + " can't be entered into column 7. This number is already here.");
        blnFound86 = true;
        if (blnSecondEntry == true) {
            blnForceGreen = true;
            rowColor86.focus();
        }
    }

    if (rowColor86.value == sudRow9[6]) {
        alert(rowColor86.value + " can't be entered into column 7. This number is already here.");
        blnFound86 = true;
        if (blnSecondEntry == true) {
            blnForceGreen = true;
            rowColor86.focus();
        }
    }

    if (rowColor86.value == sudRow7[7]) {
        alert(rowColor86.value + " can't be entered into this section. This number is already here.");
        blnFound86 = true;
        if (blnSecondEntry == true) {
            blnForceGreen = true;
            rowColor86.focus();
        }
    }

    if (rowColor86.value == sudRow7[8]) {
        alert(rowColor86.value + " can't be entered into this section. This number is already here.");
        blnFound86 = true;
        if (blnSecondEntry == true) {
            blnForceGreen = true;
            rowColor86.focus();
        }
    }

    if (rowColor86.value == sudRow9[7]) {
        alert(rowColor86.value + " can't be entered into this section. This number is already here.");
        blnFound86 = true;
        if (blnSecondEntry == true) {
            blnForceGreen = true;
            rowColor86.focus();
        }
    }

    if (rowColor86.value == sudRow9[8]) {
        alert(rowColor86.value + " can't be entered into this section. This number is already here.");
        blnFound86 = true;
        if (blnSecondEntry == true) {
            blnForceGreen = true;
            rowColor86.focus();
        }
    }


    if (blnFound86 == false) {
        rowColor86.style.backgroundColor = "green";
        sudRow8[6] = rowColor86.value;
        count = 0;
    } else {
        rowColor86.value = "";
        sudRow8[6] = "";
        if (blnForceGreen == true) {
            rowColor86.style.backgroundColor = "green";
        } else {
            rowColor86.style.backgroundColor = "red";
        }
        count = 0;
        blnForceGreen = false;
        rowColor86.focus();
        }
    }
}

function row8col7() {
    if (row87.value.length == 0) {
        alert("Please enter a value in row 8 column 8.");
        row87.style.backgroundColor = "lightblue";
        row87.focus();
    } else {
        var blnFound87 = false;
        for (var i = 0; i < sudRow8.length; i++) {
            if (i == 7) {
                i += 1;
            }
            if (rowColor87.value == sudRow8[i]) {
                alert(rowColor87.value + " can't be entered into row 8. This number is already here.");
                blnFound87 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor87.focus();
                }
                if (blnFound87 == true) {
                    break;
                }
            }
        }

        if (rowColor87.value == sudRow1[7]) {
            alert(rowColor87.value + " can't be entered into column 8. This number is already here.");
            blnFound87 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor87.focus();
            }
        }

        if (rowColor87.value == sudRow2[7]) {
            alert(rowColor87.value + " can't be entered into column 8. This number is already here.");
            blnFound87 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor87.focus();
            }
        }

        if (rowColor87.value == sudRow3[7]) {
            alert(rowColor87.value + " can't be entered into column 8. This number is already here.");
            blnFound87 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor87.focus();
            }
        }

        if (rowColor87.value == sudRow4[7]) {
            alert(rowColor87.value + " can't be entered into column 8. This number is already here.");
            blnFound87 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor87.focus();
            }
        }

        if (rowColor87.value == sudRow5[7]) {
            alert(rowColor87.value + " can't be entered into column 8. This number is already here.");
            blnFound87 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                alert("You have changed a box that was onced answered correctly." +
                    "You must entered a correct answer before continuing to another box.");
                rowColor87.focus();
            }
        }

        if (rowColor87.value == sudRow6[7]) {
            alert(rowColor87.value + " can't be entered into column 8. This number is already here.");
            blnFound87 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor87.focus();
            }
        }

        if (rowColor87.value == sudRow7[7]) {
            alert(rowColor87.value + " can't be entered into column 8. This number is already here.");
            blnFound87 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor87.focus();
            }
        }

        if (rowColor87.value == sudRow9[7]) {
            alert(rowColor87.value + " can't be entered into column 8. This number is already here.");
            blnFound87 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor87.focus();
            }
        }

        if (rowColor87.value == sudRow7[6]) {
            alert(rowColor87.value + " can't be entered into this section. This number is already here.");
            blnFound87 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor87.focus();
            }
        }

        if (rowColor87.value == sudRow7[8]) {
            alert(rowColor87.value + " can't be entered into this section. This number is already here.");
            blnFound87 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor87.focus();
            }
        }

        if (rowColor87.value == sudRow9[6]) {
            alert(rowColor87.value + " can't be entered into this section. This number is already here.");
            blnFound87 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor87.focus();
            }
        }

        if (rowColor87.value == sudRow9[8]) {
            alert(rowColor87.value + " can't be entered into this section. This number is already here.");
            blnFound87 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor87.focus();
            }
        }


        if (blnFound87 == false) {
            rowColor87.style.backgroundColor = "green";
            sudRow8[7] = rowColor87.value;
            count = 0;
        } else {
            rowColor87.value = "";
            sudRow8[7] = "";
            if (blnForceGreen == true) {
                rowColor87.style.backgroundColor = "green";
            } else {
                rowColor87.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor87.focus();
        }
    }

}

function row9col0() {
    if (row90.value.length == 0) {
        alert("Please enter a value in row 9 column 1.");
        row90.style.backgroundColor = "lightblue";
        row90.focus();
    } else {
        var blnFound90 = false;
        for (var i = 0; i < sudRow9.length; i++) {
            if (i == 0) {
                i += 1;
            }
            if (rowColor90.value == sudRow9[i]) {
                alert(rowColor90.value + " can't be entered into row 9. This number is already here.");
                blnFound90 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor90.focus();
                }
                if (blnFound90 == true) {
                    break;
                }
            }
        }

        if (rowColor90.value == sudRow1[0]) {
            alert(rowColor90.value + " can't be entered into column 1. This number is already here.");
            blnFound90 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor90.focus();
            }
        }

        if (rowColor90.value == sudRow2[0]) {
            alert(rowColor90.value + " can't be entered into column 1. This number is already here.");
            blnFound90 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor90.focus();
            }
        }

        if (rowColor90.value == sudRow3[0]) {
            alert(rowColor90.value + " can't be entered into column 1. This number is already here.");
            blnFound90 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor90.focus();
            }
        }

        if (rowColor90.value == sudRow4[0]) {
            alert(rowColor90.value + " can't be entered into column 1. This number is already here.");
            blnFound90 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor90.focus();
            }
        }

        if (rowColor90.value == sudRow5[0]) {
            alert(rowColor90.value + " can't be entered into column 1. This number is already here.");
            blnFound90 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor90.focus();
            }
        }

        if (rowColor90.value == sudRow6[0]) {
            alert(rowColor90.value + " can't be entered into column 1. This number is already here.");
            blnFound90 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor90.focus();
            }
        }

        if (rowColor90.value == sudRow7[0]) {
            alert(rowColor90.value + " can't be entered into column 1. This number is already here.");
            blnFound90 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor90.focus();
            }
        }

        if (rowColor90.value == sudRow8[0]) {
            alert(rowColor90.value + " can't be entered into column 1. This number is already here.");
            blnFound90 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor90.focus();
            }
        }

        if (rowColor90.value == sudRow7[1]) {
            alert(rowColor90.value + " can't be entered into this section. This number is already here.");
            blnFound90 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor90.focus();
            }
        }

        if (rowColor90.value == sudRow7[2]) {
            alert(rowColor90.value + " can't be entered into this section. This number is already here.");
            blnFound90 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor90.focus();
            }
        }

        if (rowColor90.value == sudRow8[1]) {
            alert(rowColor90.value + " can't be entered into this section. This number is already here.");
            blnFound90 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor90.focus();
            }
        }

        if (rowColor90.value == sudRow8[2]) {
            alert(rowColor90.value + " can't be entered into this section. This number is already here.");
            blnFound90 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor90.focus();
            }
        }


        if (blnFound90 == false) {
            rowColor90.style.backgroundColor = "green";
            sudRow9[0] = rowColor90.value;
            count = 0;
        } else {
            rowColor90.value = "";
            sudRow9[0] = "";
            if (blnForceGreen == true) {
                rowColor90.style.backgroundColor = "green";
            } else {
                rowColor90.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor90.focus();
        }
    }

}

function row9col1() {
    if (row91.value.length == 0) {
        alert("Please enter a value in row 9 column 2.");
        row91.style.backgroundColor = "lightblue";
        row91.focus();
    } else {
        var blnFound91 = false;
        for (var i = 0; i < sudRow9.length; i++) {
            if (i == 1) {
                i += 1;
            }
            if (rowColor91.value == sudRow9[i]) {
                alert(rowColor91.value + " can't be entered into row 9. This number is already here.");
                blnFound91 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor91.focus();
                }
                if (blnFound91 == true) {
                    break;
                }
            }
        }

        if (rowColor91.value == sudRow1[1]) {
            alert(rowColor91.value + " can't be entered into column 2. This number is already here.");
            blnFound91 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor91.focus();
            }
        }

        if (rowColor91.value == sudRow2[1]) {
            alert(rowColor91.value + " can't be entered into column 2. This number is already here.");
            blnFound91 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor91.focus();
            }
        }

        if (rowColor91.value == sudRow3[1]) {
            alert(rowColor91.value + " can't be entered into column 2. This number is already here.");
            blnFound91 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor91.focus();
            }
        }

        if (rowColor91.value == sudRow4[1]) {
            alert(rowColor91.value + " can't be entered into column 2. This number is already here.");
            blnFound91 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor91.focus();
            }
        }

        if (rowColor91.value == sudRow5[1]) {
            alert(rowColor91.value + " can't be entered into column 2. This number is already here.");
            blnFound91 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor91.focus();
            }
        }

        if (rowColor91.value == sudRow6[1]) {
            alert(rowColor91.value + " can't be entered into column 2. This number is already here.");
            blnFound91 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor91.focus();
            }
        }

        if (rowColor91.value == sudRow7[1]) {
            alert(rowColor91.value + " can't be entered into column 2. This number is already here.");
            blnFound91 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor91.focus();
            }
        }

        if (rowColor91.value == sudRow8[1]) {
            alert(rowColor91.value + " can't be entered into column 2. This number is already here.");
            blnFound91 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor91.focus();
            }
        }

        if (rowColor91.value == sudRow7[0]) {
            alert(rowColor91.value + " can't be entered into this section. This number is already here.");
            blnFound91 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor91.focus();
            }
        }

        if (rowColor91.value == sudRow7[2]) {
            alert(rowColor91.value + " can't be entered into this section. This number is already here.");
            blnFound91 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor91.focus();
            }
        }

        if (rowColor91.value == sudRow8[0]) {
            alert(rowColor91.value + " can't be entered into this section. This number is already here.");
            blnFound91 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor91.focus();
            }
        }

        if (rowColor91.value == sudRow8[2]) {
            alert(rowColor91.value + " can't be entered into this section. This number is already here.");
            blnFound91 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor91.focus();
            }
        }


        if (blnFound91 == false) {
            rowColor91.style.backgroundColor = "green";
            sudRow9[1] = rowColor91.value;
            count = 0;
        } else {
            rowColor91.value = "";
            sudRow9[1] = "";
            if (blnForceGreen == true) {
                rowColor91.style.backgroundColor = "green";
            } else {
                rowColor91.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor91.focus();
        }
    }

}

function row9col2() {
    if (row92.value.length == 0) {
        alert("Please enter a value in row 9 column 3.");
        row92.style.backgroundColor = "lightblue";
        row92.focus();
    } else {
        var blnFound92 = false;
        for (var i = 0; i < sudRow9.length; i++) {
            if (i == 2) {
                i += 1;
            }
            if (rowColor92.value == sudRow9[i]) {
                alert(rowColor92.value + " can't be entered into row 9. This number is already here.");
                blnFound92 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor92.focus();
                }
                if (blnFound92 == true) {
                    break;
                }
            }
        }

        if (rowColor92.value == sudRow1[2]) {
            alert(rowColor92.value + " can't be entered into column 3. This number is already here.");
            blnFound92 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor92.focus();
            }
        }

        if (rowColor92.value == sudRow2[2]) {
            alert(rowColor92.value + " can't be entered into column 3. This number is already here.");
            blnFound92 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor92.focus();
            }
        }

        if (rowColor92.value == sudRow3[2]) {
            alert(rowColor92.value + " can't be entered into column 3. This number is already here.");
            blnFound92 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor92.focus();
            }
        }

        if (rowColor92.value == sudRow4[2]) {
            alert(rowColor92.value + " can't be entered into column 3. This number is already here.");
            blnFound92 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor92.focus();
            }
        }

        if (rowColor92.value == sudRow5[2]) {
            alert(rowColor92.value + " can't be entered into column 3. This number is already here.");
            blnFound92 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor92.focus();
            }
        }

        if (rowColor92.value == sudRow6[2]) {
            alert(rowColor92.value + " can't be entered into column 3. This number is already here.");
            blnFound92 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor92.focus();
            }
        }

        if (rowColor92.value == sudRow7[2]) {
            alert(rowColor92.value + " can't be entered into column 3. This number is already here.");
            blnFound92 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor92.focus();
            }
        }

        if (rowColor92.value == sudRow8[2]) {
            alert(rowColor92.value + " can't be entered into column 3. This number is already here.");
            blnFound92 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor92.focus();
            }
        }

        if (rowColor92.value == sudRow7[0]) {
            alert(rowColor92.value + " can't be entered into this section. This number is already here.");
            blnFound92 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor92.focus();
            }
        }

        if (rowColor92.value == sudRow7[1]) {
            alert(rowColor92.value + " can't be entered into this section. This number is already here.");
            blnFound92 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor92.focus();
            }
        }

        if (rowColor92.value == sudRow8[0]) {
            alert(rowColor92.value + " can't be entered into this section. This number is already here.");
            blnFound92 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor92.focus();
            }
        }

        if (rowColor92.value == sudRow8[1]) {
            alert(rowColor92.value + " can't be entered into this section. This number is already here.");
            blnFound92 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor92.focus();
            }
        }


        if (blnFound92 == false) {
            rowColor92.style.backgroundColor = "green";
            sudRow9[2] = rowColor92.value;
            count = 0;
        } else {
            rowColor92.value = "";
            sudRow9[2] = "";
            if (blnForceGreen == true) {
                rowColor92.style.backgroundColor = "green";
            } else {
                rowColor92.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor92.focus();
        }
    }

}

function row9col3() {
    if (row93.value.length == 0) {
        alert("Please enter a value in row 9 column 4.");
        row93.style.backgroundColor = "lightblue";
        row93.focus();
    } else {
        var blnFound93 = false;
        for (var i = 0; i < sudRow9.length; i++) {
            if (i == 3) {
                i += 1;
            }
            if (rowColor93.value == sudRow9[i]) {
                alert(rowColor93.value + " can't be entered into row 9. This number is already here.");
                blnFound93 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor93.focus();
                }
                if (blnFound93 == true) {
                    break;
                }
            }
        }

        if (rowColor93.value == sudRow1[3]) {
            alert(rowColor93.value + " can't be entered into column 4. This number is already here.");
            blnFound93 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor93.focus();
            }
        }

        if (rowColor93.value == sudRow2[3]) {
            alert(rowColor93.value + " can't be entered into column 4. This number is already here.");
            blnFound93 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor93.focus();
            }
        }

        if (rowColor93.value == sudRow3[3]) {
            alert(rowColor93.value + " can't be entered into column 4. This number is already here.");
            blnFound93 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor93.focus();
            }
        }

        if (rowColor93.value == sudRow4[3]) {
            alert(rowColor93.value + " can't be entered into column 4. This number is already here.");
            blnFound93 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor93.focus();
            }
        }

        if (rowColor93.value == sudRow5[3]) {
            alert(rowColor93.value + " can't be entered into column 4. This number is already here.");
            blnFound93 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor93.focus();
            }
        }

        if (rowColor93.value == sudRow6[3]) {
            alert(rowColor93.value + " can't be entered into column 4. This number is already here.");
            blnFound93 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor93.focus();
            }
        }

        if (rowColor93.value == sudRow7[3]) {
            alert(rowColor93.value + " can't be entered into column 4. This number is already here.");
            blnFound93 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor93.focus();
            }
        }

        if (rowColor93.value == sudRow8[3]) {
            alert(rowColor93.value + " can't be entered into column 4. This number is already here.");
            blnFound93 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor93.focus();
            }
        }

        if (rowColor93.value == sudRow7[4]) {
            alert(rowColor93.value + " can't be entered into this section. This number is already here.");
            blnFound93 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor93.focus();
            }
        }

        if (rowColor93.value == sudRow7[5]) {
            alert(rowColor93.value + " can't be entered into this section. This number is already here.");
            blnFound93 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor93.focus();
            }
        }

        if (rowColor93.value == sudRow8[4]) {
            alert(rowColor93.value + " can't be entered into this section. This number is already here.");
            blnFound93 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor93.focus();
            }
        }

        if (rowColor93.value == sudRow8[5]) {
            alert(rowColor93.value + " can't be entered into this section. This number is already here.");
            blnFound93 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor93.focus();
            }
        }


        if (blnFound93 == false) {
            rowColor93.style.backgroundColor = "green";
            sudRow9[3] = rowColor93.value;
            count = 0;
        } else {
            rowColor93.value = "";
            sudRow9[3] = "";
            if (blnForceGreen == true) {
                rowColor93.style.backgroundColor = "green";
            } else {
                rowColor93.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor93.focus();
        }
    }

}

function row9col5() {
    if (row95.value.length == 0) {
        alert("Please enter a value in row 9 column 6.");
        row95.style.backgroundColor = "lightblue";
        row95.focus();
    } else {
        var blnFound95 = false;
        for (var i = 0; i < sudRow9.length; i++) {
            if (i == 5) {
                i += 1;
            }
            if (rowColor95.value == sudRow9[i]) {
                alert(rowColor95.value + " can't be entered into row 9. This number is already here.");
                blnFound95 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor95.focus();
                }
                if (blnFound95 == true) {
                    break;
                }
            }
        }

        if (rowColor95.value == sudRow1[5]) {
            alert(rowColor95.value + " can't be entered into column 6. This number is already here.");
            blnFound95 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor95.focus();
            }
        }

        if (rowColor95.value == sudRow2[5]) {
            alert(rowColor95.value + " can't be entered into column 6. This number is already here.");
            blnFound95 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor95.focus();
            }
        }

        if (rowColor95.value == sudRow3[5]) {
            alert(rowColor95.value + " can't be entered into column 6. This number is already here.");
            blnFound95 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor95.focus();
            }
        }

        if (rowColor95.value == sudRow4[5]) {
            alert(rowColor95.value + " can't be entered into column 6. This number is already here.");
            blnFound95 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor95.focus();
            }
        }

        if (rowColor95.value == sudRow5[5]) {
            alert(rowColor95.value + " can't be entered into column 6. This number is already here.");
            blnFound95 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor95.focus();
            }
        }

        if (rowColor95.value == sudRow6[5]) {
            alert(rowColor95.value + " can't be entered into column 6. This number is already here.");
            blnFound95 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor95.focus();
            }
        }

        if (rowColor95.value == sudRow7[5]) {
            alert(rowColor95.value + " can't be entered into column 6. This number is already here.");
            blnFound95 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor95.focus();
            }
        }

        if (rowColor95.value == sudRow8[5]) {
            alert(rowColor95.value + " can't be entered into column 6. This number is already here.");
            blnFound95 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor95.focus();
            }
        }

        if (rowColor95.value == sudRow7[3]) {
            alert(rowColor95.value + " can't be entered into this section. This number is already here.");
            blnFound95 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor95.focus();
            }
        }

        if (rowColor95.value == sudRow7[4]) {
            alert(rowColor95.value + " can't be entered into this section. This number is already here.");
            blnFound95 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor95.focus();
            }
        }

        if (rowColor95.value == sudRow8[3]) {
            alert(rowColor95.value + " can't be entered into this section. This number is already here.");
            blnFound95 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor95.focus();
            }
        }

        if (rowColor95.value == sudRow8[4]) {
            alert(rowColor95.value + " can't be entered into this section. This number is already here.");
            blnFound95 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor95.focus();
            }
        }


        if (blnFound95 == false) {
            rowColor95.style.backgroundColor = "green";
            sudRow9[5] = rowColor95.value;
            count = 0;
        } else {
            rowColor95.value = "";
            sudRow9[5] = "";
            if (blnForceGreen == true) {
                rowColor95.style.backgroundColor = "green";
            } else {
                rowColor95.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor95.focus();
        }
    }

}

function row9col6() {
    if (row96.value.length == 0) {
        alert("Please enter a value in row 9 column 7.");
        row96.style.backgroundColor = "lightblue";
        row96.focus();
    } else {
        var blnFound96 = false;
        for (var i = 0; i < sudRow9.length; i++) {
            if (i == 6) {
                i += 1;
            }
            if (rowColor96.value == sudRow9[i]) {
                alert(rowColor96.value + " can't be entered into row 9. This number is already here.");
                blnFound96 = true;
                if (blnSecondEntry == true) {
                    blnForceGreen = true;
                    rowColor96.focus();
                }
                if (blnFound96 == true) {
                    break;
                }
            }
        }

        if (rowColor96.value == sudRow1[6]) {
            alert(rowColor96.value + " can't be entered into column 7. This number is already here.");
            blnFound96 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor96.focus();
            }
        }

        if (rowColor96.value == sudRow2[6]) {
            alert(rowColor96.value + " can't be entered into column 7. This number is already here.");
            blnFound96 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor96.focus();
            }
        }

        if (rowColor96.value == sudRow3[6]) {
            alert(rowColor96.value + " can't be entered into column 7. This number is already here.");
            blnFound96 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor96.focus();
            }
        }

        if (rowColor96.value == sudRow4[6]) {
            alert(rowColor96.value + " can't be entered into column 7. This number is already here.");
            blnFound96 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor96.focus();
            }
        }

        if (rowColor96.value == sudRow5[6]) {
            alert(rowColor96.value + " can't be entered into column 7. This number is already here.");
            blnFound96 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor96.focus();
            }
        }

        if (rowColor96.value == sudRow6[6]) {
            alert(rowColor96.value + " can't be entered into column 7. This number is already here.");
            blnFound96 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor96.focus();
            }
        }

        if (rowColor96.value == sudRow7[6]) {
            alert(rowColor96.value + " can't be entered into column 7. This number is already here.");
            blnFound96 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor96.focus();
            }
        }

        if (rowColor96.value == sudRow8[6]) {
            alert(rowColor96.value + " can't be entered into column 7. This number is already here.");
            blnFound96 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor96.focus();
            }
        }

        if (rowColor96.value == sudRow7[7]) {
            alert(rowColor96.value + " can't be entered into this section. This number is already here.");
            blnFound96 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor96.focus();
            }
        }

        if (rowColor96.value == sudRow7[8]) {
            alert(rowColor96.value + " can't be entered into this section. This number is already here.");
            blnFound96 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor96.focus();
            }
        }

        if (rowColor96.value == sudRow8[7]) {
            alert(rowColor96.value + " can't be entered into this section. This number is already here.");
            blnFound96 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor96.focus();
            }
        }

        if (rowColor96.value == sudRow8[8]) {
            alert(rowColor96.value + " can't be entered into this section. This number is already here.");
            blnFound96 = true;
            if (blnSecondEntry == true) {
                blnForceGreen = true;
                rowColor96.focus();
            }
        }


        if (blnFound96 == false) {
            rowColor96.style.backgroundColor = "green";
            sudRow9[6] = rowColor96.value;
            count = 0;
        } else {
            rowColor96.value = "";
            sudRow9[6] = "";
            if (blnForceGreen == true) {
                rowColor96.style.backgroundColor = "green";
            } else {
                rowColor96.style.backgroundColor = "red";
            }
            count = 0;
            blnForceGreen = false;
            rowColor96.focus();
        }
    }

}


function ColorInput() {
    if (rowColor12.style.backgroundColor != "green") {
        rowColor12.style.backgroundColor = "red";
    }

    if (rowColor13.style.backgroundColor != "green") {
        rowColor13.style.backgroundColor = "red";
    }

    if (rowColor15.style.backgroundColor != "green") {
        rowColor15.style.backgroundColor = "red";
    }

    if (rowColor16.style.backgroundColor != "green") {
        rowColor16.style.backgroundColor = "red";
    }

    if (rowColor17.style.backgroundColor != "green") {
        rowColor17.style.backgroundColor = "red";
    }

    if (rowColor18.style.backgroundColor != "green") {
        rowColor18.style.backgroundColor = "red";
    }

    if (rowColor21.style.backgroundColor != "green") {
        rowColor21.style.backgroundColor = "red";
    }

    if (rowColor22.style.backgroundColor != "green") {
        rowColor22.style.backgroundColor = "red";
    }

    if (rowColor26.style.backgroundColor != "green") {
        rowColor26.style.backgroundColor = "red";
    }

    if (rowColor27.style.backgroundColor != "green") {
        rowColor27.style.backgroundColor = "red";
    }

    if (rowColor28.style.backgroundColor != "green") {
        rowColor28.style.backgroundColor = "red";
    }

    if (rowColor30.style.backgroundColor != "green") {
        rowColor30.style.backgroundColor = "red";
    }

    if (rowColor33.style.backgroundColor != "green") {
        rowColor33.style.backgroundColor = "red";
    }

    if (rowColor34.style.backgroundColor != "green") {
        rowColor34.style.backgroundColor = "red";
    }

    if (rowColor35.style.backgroundColor != "green") {
        rowColor35.style.backgroundColor = "red";
    }

    if (rowColor36.style.backgroundColor != "green") {
        rowColor36.style.backgroundColor = "red";
    }

    if (rowColor38.style.backgroundColor != "green") {
        rowColor38.style.backgroundColor = "red";
    }

    if (rowColor41.style.backgroundColor != "green") {
        rowColor41.style.backgroundColor = "red";
    }

    if (rowColor42.style.backgroundColor != "green") {
        rowColor42.style.backgroundColor = "red";
    }

    if (rowColor43.style.backgroundColor != "green") {
        rowColor43.style.backgroundColor = "red";
    }

    if (rowColor45.style.backgroundColor != "green") {
        rowColor45.style.backgroundColor = "red";
    }

    if (rowColor46.style.backgroundColor != "green") {
        rowColor46.style.backgroundColor = "red";
    }

    if (rowColor47.style.backgroundColor != "green") {
        rowColor47.style.backgroundColor = "red";
    }

    if (rowColor51.style.backgroundColor != "green") {
        rowColor51.style.backgroundColor = "red";
    }

    if (rowColor52.style.backgroundColor != "green") {
        rowColor52.style.backgroundColor = "red";
    }

    if (rowColor54.style.backgroundColor != "green") {
        rowColor54.style.backgroundColor = "red";
    }

    if (rowColor56.style.backgroundColor != "green") {
        rowColor56.style.backgroundColor = "red";
    }

    if (rowColor57.style.backgroundColor != "green") {
        rowColor57.style.backgroundColor = "red";
    }

    if (rowColor61.style.backgroundColor != "green") {
        rowColor61.style.backgroundColor = "red";
    }

    if (rowColor62.style.backgroundColor != "green") {
        rowColor62.style.backgroundColor = "red";
    }

    if (rowColor63.style.backgroundColor != "green") {
        rowColor63.style.backgroundColor = "red";
    }

    if (rowColor65.style.backgroundColor != "green") {
        rowColor65.style.backgroundColor = "red";
    }

    if (rowColor66.style.backgroundColor != "green") {
        rowColor66.style.backgroundColor = "red";
    }

    if (rowColor67.style.backgroundColor != "green") {
        rowColor67.style.backgroundColor = "red";
    }

    if (rowColor70.style.backgroundColor != "green") {
        rowColor70.style.backgroundColor = "red";
    }

    if (rowColor72.style.backgroundColor != "green") {
        rowColor72.style.backgroundColor = "red";
    }

    if (rowColor73.style.backgroundColor != "green") {
        rowColor73.style.backgroundColor = "red";
    }

    if (rowColor74.style.backgroundColor != "green") {
        rowColor74.style.backgroundColor = "red";
    }

    if (rowColor75.style.backgroundColor != "green") {
        rowColor75.style.backgroundColor = "red";
    }

    if (rowColor78.style.backgroundColor != "green") {
        rowColor78.style.backgroundColor = "red";
    }

    if (rowColor80.style.backgroundColor != "green") {
        rowColor80.style.backgroundColor = "red";
    }

    if (rowColor81.style.backgroundColor != "green") {
        rowColor81.style.backgroundColor = "red";
    }

    if (rowColor82.style.backgroundColor != "green") {
        rowColor82.style.backgroundColor = "red";
    }

    if (rowColor86.style.backgroundColor != "green") {
        rowColor86.style.backgroundColor = "red";
    }

    if (rowColor87.style.backgroundColor != "green") {
        rowColor87.style.backgroundColor = "red";
    }

    if (rowColor90.style.backgroundColor != "green") {
        rowColor90.style.backgroundColor = "red";
    }

    if (rowColor91.style.backgroundColor != "green") {
        rowColor91.style.backgroundColor = "red";
    }

    if (rowColor92.style.backgroundColor != "green") {
        rowColor92.style.backgroundColor = "red";
    }

    if (rowColor93.style.backgroundColor != "green") {
        rowColor93.style.backgroundColor = "red";
    }

    if (rowColor95.style.backgroundColor != "green") {
        rowColor95.style.backgroundColor = "red";
    }

    if (rowColor96.style.backgroundColor != "green") {
        rowColor96.style.backgroundColor = "red";
    }
    count = 0;
}

function ClearRed() {
    if (rowColor12.style.backgroundColor == "red") {
        rowColor12.value = "";
    }

    if (rowColor13.style.backgroundColor == "red") {
        rowColor13.value = "";
    }

    if (rowColor15.style.backgroundColor == "red") {
        rowColor15.value = "";
    }

    if (rowColor16.style.backgroundColor == "red") {
        rowColor16.value = "";
    }

    if (rowColor17.style.backgroundColor == "red") {
        rowColor17.value = "";
    }

    if (rowColor18.style.backgroundColor == "red") {
        rowColor18.value = "";
    }

    if (rowColor21.style.backgroundColor == "red") {
        rowColor21.value = "";
    }

    if (rowColor22.style.backgroundColor == "red") {
        rowColor22.value = "";
    }

    if (rowColor26.style.backgroundColor == "red") {
        rowColor26.value = "";
    }

    if (rowColor27.style.backgroundColor == "red") {
        rowColor27.value = "";
    }

    if (rowColor28.style.backgroundColor == "red") {
        rowColor28.value = "";
    }

    if (rowColor30.style.backgroundColor == "red") {
        rowColor30.value = "";
    }

    if (rowColor33.style.backgroundColor == "red") {
        rowColor33.value = "";
    }

    if (rowColor34.style.backgroundColor == "red") {
        rowColor34.value = "";
    }


    if (rowColor35.style.backgroundColor == "red") {
        rowColor35.value = "";
    }

    if (rowColor36.style.backgroundColor == "red") {
        rowColor36.value = "";
    }

    if (rowColor38.style.backgroundColor == "red") {
        rowColor38.value = "";
    }

    if (rowColor41.style.backgroundColor == "red") {
        rowColor41.value = "";
    }

    if (rowColor42.style.backgroundColor == "red") {
        rowColor42.value = "";
    }

    if (rowColor43.style.backgroundColor == "red") {
        rowColor43.value = "";
    }

    if (rowColor45.style.backgroundColor == "red") {
        rowColor45.value = "";
    }

    if (rowColor46.style.backgroundColor == "red") {
        rowColor46.value = "";
    }

    if (rowColor47.style.backgroundColor == "red") {
        rowColor47.value = "";
    }

    if (rowColor51.style.backgroundColor == "red") {
        rowColor51.value = "";
    }

    if (rowColor52.style.backgroundColor == "red") {
        rowColor52.value = "";
    }

    if (rowColor54.style.backgroundColor == "red") {
        rowColor54.value = "";
    }

    if (rowColor56.style.backgroundColor == "red") {
        rowColor56.value = "";
    }

    if (rowColor57.style.backgroundColor == "red") {
        rowColor57.value = "";
    }

    if (rowColor61.style.backgroundColor == "red") {
        rowColor61.value = "";
    }

    if (rowColor62.style.backgroundColor == "red") {
        rowColor62.value = "";
    }

    if (rowColor63.style.backgroundColor == "red") {
        rowColor63.value = "";
    }

    if (rowColor65.style.backgroundColor == "red") {
        rowColor65.value = "";
    }

    if (rowColor66.style.backgroundColor == "red") {
        rowColor66.value = "";
    }

    if (rowColor67.style.backgroundColor == "red") {
        rowColor67.value = "";
    }

    if (rowColor70.style.backgroundColor == "red") {
        rowColor70.value = "";
    }

    if (rowColor72.style.backgroundColor == "red") {
        rowColor72.value = "";
    }

    if (rowColor73.style.backgroundColor == "red") {
        rowColor73.value = "";
    }

    if (rowColor74.style.backgroundColor == "red") {
        rowColor74.value = "";
    }

    if (rowColor75.style.backgroundColor == "red") {
        rowColor75.value = "";
    }

    if (rowColor78.style.backgroundColor == "red") {
        rowColor78.value = "";
    }

    if (rowColor80.style.backgroundColor == "red") {
        rowColor80.value = "";
    }

    if (rowColor81.style.backgroundColor == "red") {
        rowColor81.value = "";
    }

    if (rowColor82.style.backgroundColor == "red") {
        rowColor82.value = "";
    }

    if (rowColor86.style.backgroundColor == "red") {
        rowColor86.value = "";
    }

    if (rowColor87.style.backgroundColor == "red") {
        rowColor87.value = "";
    }

    if (rowColor90.style.backgroundColor == "red") {
        rowColor90.value = "";
    }

    if (rowColor91.style.backgroundColor == "red") {
        rowColor91.value = "";
    }

    if (rowColor92.style.backgroundColor == "red") {
        rowColor92.value = "";
    }

    if (rowColor93.style.backgroundColor == "red") {
        rowColor93.value = "";
    }

    if (rowColor95.style.backgroundColor == "red") {
        rowColor95.value = "";
    }

    if (rowColor96.style.backgroundColor == "red") {
        rowColor96.value = "";
    }
}

function ClearItems() {
    if (rowColor12.style.backgroundColor == "lightblue" && rowColor12.value.length != 0) {
        rowColor12.value = "";
        sudRow1[2] = "";
        rowColor12.style.backgroundColor = "red";

    }
    if (rowColor13.style.backgroundColor == "lightblue" && rowColor13.value.length != 0) {
        rowColor13.value = "";
        sudRow1[3] = "";
        rowColor13.style.backgroundColor = "red";
    }

    if (rowColor15.style.backgroundColor == "lightblue" && rowColor15.value.length != 0) {
        rowColor15.value = "";
        sudRow1[5] = "";
        rowColor15.style.backgroundColor = "red";
    }

    if (rowColor16.style.backgroundColor == "lightblue" && rowColor16.value.length != 0) {
        rowColor16.value = "";
        sudRow1[6] = "";
        rowColor16.style.backgroundColor = "red";
    }

    if (rowColor17.style.backgroundColor == "lightblue" && rowColor17.value.length != 0) {
        rowColor17.value = "";
        sudRow1[7] = "";
        rowColor17.style.backgroundColor = "red";
    }

    if (rowColor18.style.backgroundColor == "lightblue" && rowColor18.value.length != 0) {
        rowColor18.value = "";
        sudRow1[8] = "";
        rowColor18.style.backgroundColor = "red";
    }

    if (rowColor21.style.backgroundColor == "lightblue" && rowColor21.value.length != 0) {
        rowColor21.value = "";
        sudRow2[1] = "";
        rowColor21.style.backgroundColor = "red";
    }

    if (rowColor22.style.backgroundColor == "lightblue" && rowColor22.value.length != 0) {
        rowColor22.value = "";
        sudRow2[2] = "";
        rowColor22.style.backgroundColor = "red";
    }

    if (rowColor26.style.backgroundColor == "lightblue" && rowColor26.value.length != 0) {
        rowColor26.value = "";
        sudRow2[6] = "";
        rowColor26.style.backgroundColor = "red";
    }

    if (rowColor27.style.backgroundColor == "lightblue" && rowColor27.value.length != 0) {
        rowColor27.value = "";
        sudRow2[7] = "";
        rowColor27.style.backgroundColor = "red";
    }

    if (rowColor28.style.backgroundColor == "lightblue" && rowColor28.value.length != 0) {
        rowColor28.value = "";
        sudRow2[8] = "";
        rowColor28.style.backgroundColor = "red";
    }

    if (rowColor30.style.backgroundColor == "lightblue" && rowColor30.value.length != 0) {
        rowColor30.value = "";
        sudRow3[0] = "";
        rowColor30.style.backgroundColor = "red";
    }

    if (rowColor33.style.backgroundColor == "lightblue" && rowColor33.value.length != 0) {
        rowColor33.value = "";
        sudRow3[3] = "";
        rowColor33.style.backgroundColor = "red";
    }

    if (rowColor34.style.backgroundColor == "lightblue" && rowColor34.value.length != 0) {
        rowColor34.value = "";
        sudRow3[4] = "";
        rowColor34.style.backgroundColor = "red";
    }

    if (rowColor35.style.backgroundColor == "lightblue" && rowColor35.value.length != 0) {
        rowColor35.value = "";
        sudRow3[5] = "";
        rowColor35.style.backgroundColor = "red";
    }

    if (rowColor36.style.backgroundColor == "lightblue" && rowColor36.value.length != 0) {
        rowColor36.value = "";
        sudRow3[6] = "";
        rowColor36.style.backgroundColor = "red";
    }

    if (rowColor38.style.backgroundColor == "lightblue" && rowColor38.value.length != 0) {
        rowColor38.value = "";
        sudRow3[8] = "";
        rowColor38.style.backgroundColor = "red";
    }

    if (rowColor41.style.backgroundColor == "lightblue" && rowColor41.value.length != 0) {
        rowColor41.value = "";
        sudRow4[1] = "";
        rowColor41.style.backgroundColor = "red";
    }

    if (rowColor42.style.backgroundColor == "lightblue" && rowColor42.value.length != 0) {
        rowColor42.value = "";
        sudRow4[2] = "";
        rowColor42.style.backgroundColor = "red";
    }

    if (rowColor43.style.backgroundColor == "lightblue" && rowColor43.value.length != 0) {
        rowColor43.value = "";
        sudRow4[3] = "";
        rowColor43.style.backgroundColor = "red";
    }

    if (rowColor45.style.backgroundColor == "lightblue" && rowColor45.value.length != 0) {
        rowColor45.value = "";
        sudRow4[5] = "";
        rowColor45.style.backgroundColor = "red";
    }

    if (rowColor46.style.backgroundColor == "lightblue" && rowColor46.value.length != 0) {
        rowColor46.value = "";
        sudRow4[6] = "";
        rowColor46.style.backgroundColor = "red";
    }

    if (rowColor47.style.backgroundColor == "lightblue" && rowColor47.value.length != 0) {
        rowColor47.value = "";
        sudRow4[7] = "";
        rowColor47.style.backgroundColor = "red";
    }

    if (rowColor51.style.backgroundColor == "lightblue" && rowColor51.value.length != 0) {
        rowColor51.value = "";
        sudRow5[1] = "";
        rowColor51.style.backgroundColor = "red";
    }

    if (rowColor52.style.backgroundColor == "lightblue" && rowColor52.value.length != 0) {
        rowColor52.value = "";
        sudRow5[2] = "";
        rowColor52.style.backgroundColor = "red";
    }

    if (rowColor54.style.backgroundColor == "lightblue" && rowColor54.value.length != 0) {
        rowColor54.value = "";
        sudRow5[4] = "";
        rowColor54.style.backgroundColor = "red";
    }

    if (rowColor56.style.backgroundColor == "lightblue" && rowColor56.value.length != 0) {
        rowColor56.value = "";
        sudRow5[6] = "";
        rowColor56.style.backgroundColor = "red";
    }

    if (rowColor57.style.backgroundColor == "lightblue" && rowColor57.value.length != 0) {
        rowColor57.value = "";
        sudRow5[7] = "";
        rowColor57.style.backgroundColor = "red";
    }

    if (rowColor61.style.backgroundColor == "lightblue" && rowColor61.value.length != 0) {
        rowColor61.value = "";
        sudRow6[1] = "";
        rowColor61.style.backgroundColor = "red";
    }

    if (rowColor62.style.backgroundColor == "lightblue" && rowColor62.value.length != 0) {
        rowColor62.value = "";
        sudRow6[2] = "";
        rowColor62.style.backgroundColor = "red";
    }

    if (rowColor63.style.backgroundColor == "lightblue" && rowColor63.value.length != 0) {
        rowColor63.value = "";
        sudRow6[3] = "";
        rowColor63.style.backgroundColor = "red";
    }

    if (rowColor65.style.backgroundColor == "lightblue" && rowColor65.value.length != 0) {
        rowColor65.value = "";
        sudRow6[5] = "";
        rowColor65.style.backgroundColor = "red";
    }

    if (rowColor66.style.backgroundColor == "lightblue" && rowColor66.value.length != 0) {
        rowColor66.value = "";
        sudRow6[6] = "";
        rowColor66.style.backgroundColor = "red";
    }

    if (rowColor67.style.backgroundColor == "lightblue" && rowColor67.value.length != 0) {
        rowColor67.value = "";
        sudRow6[7] = "";
        rowColor67.style.backgroundColor = "red";
    }

    if (rowColor70.style.backgroundColor == "lightblue" && rowColor70.value.length != 0) {
        rowColor70.value = "";
        sudRow7[0] = "";
        rowColor70.style.backgroundColor = "red";
    }

    if (rowColor72.style.backgroundColor == "lightblue" && rowColor72.value.length != 0) {
        rowColor72.value = "";
        sudRow7[2] = "";
        rowColor72.style.backgroundColor = "red";
    }


    if(rowColor73.style.backgroundColor == "lightblue" && rowColor73.value.length != 0) {
        rowColor73.value = "";
        sudRow7[3] = "";
        rowColor73.style.backgroundColor = "red";
    }

    if (rowColor74.style.backgroundColor == "lightblue" && rowColor74.value.length != 0) {
        rowColor74.value = "";
        sudRow7[4] = "";
        rowColor74.style.backgroundColor = "red";
    }

    if (rowColor75.style.backgroundColor == "lightblue" && rowColor75.value.length != 0) {
        rowColor75.value = "";
        sudRow7[5] = "";
        rowColor75.style.backgroundColor = "red";
    }

    if (rowColor78.style.backgroundColor == "lightblue" && rowColor78.value.length != 0) {
        rowColor78.value = "";
        sudRow7[8] = "";
        rowColor78.style.backgroundColor = "red";
    }

    if (rowColor80.style.backgroundColor == "lightblue" && rowColor80.value.length != 0) {
        rowColor80.value = "";
        sudRow8[0] = "";
        rowColor80.style.backgroundColor = "red";
    }

    if (rowColor81.style.backgroundColor == "lightblue" && rowColor81.value.length != 0) {
        rowColor81.value = "";
        sudRow8[1] = "";
        rowColor81.style.backgroundColor = "red";
    }

    if (rowColor82.style.backgroundColor == "lightblue" && rowColor82.value.length != 0) {
        rowColor82.value = "";
        sudRow8[2] = "";
        rowColor82.style.backgroundColor = "red";
    }

    if (rowColor86.style.backgroundColor == "lightblue" && rowColor86.value.length != 0) {
        rowColor86.value = "";
        sudRow8[6] = "";
        rowColor86.style.backgroundColor = "red";
    }

    if (rowColor87.style.backgroundColor == "lightblue" && rowColor87.value.length != 0) {
        rowColor87.value = "";
        sudRow8[7] = "";
        rowColor87.style.backgroundColor = "red";
    }

    if (rowColor90.style.backgroundColor == "lightblue" && rowColor90.value.length != 0) {
        rowColor90.value = "";
        sudRow9[0] = "";
        rowColor90.style.backgroundColor = "red";
    }

    if (rowColor91.style.backgroundColor == "lightblue" && rowColor91.value.length != 0) {
        rowColor91.value = "";
        sudRow9[1] = "";
        rowColor91.style.backgroundColor = "red";
    }

    if (rowColor92.style.backgroundColor == "lightblue" && rowColor92.value.length != 0) {
        rowColor92.value = "";
        sudRow9[2] = "";
        rowColor92.style.backgroundColor = "red";
    }

    if (rowColor93.style.backgroundColor == "lightblue" && rowColor93.value.length != 0) {
        rowColor93.value = "";
        sudRow9[3] = "";
        rowColor93.style.backgroundColor = "red";
    }

    if (rowColor95.style.backgroundColor == "lightblue" && rowColor95.value.length != 0) {
        rowColor95.value = "";
        sudRow9[5] = "";
        rowColor95.style.backgroundColor = "red";
    }

    if(rowColor96.style.backgroundColor == "lightblue" && rowColor96.value.length != 0) {
        rowColor96.value = "";
        sudRow9[6] = "";
        rowColor96.style.backgroundColor = "red";
    }

    count = 0;
}

    function CheckWinner() {
        if ((rowColor12.style.backgroundColor == "green" && rowColor12.value.length != 0) &&
            (rowColor13.style.backgroundColor == "green" && rowColor13.value.length != 0) &&
            (rowColor15.style.backgroundColor == "green" && rowColor15.value.length != 0) &&
            (rowColor16.style.backgroundColor == "green" && rowColor16.value.length != 0) &&
            (rowColor17.style.backgroundColor == "green" && rowColor17.value.length != 0) &&
            (rowColor18.style.backgroundColor == "green" && rowColor18.value.length != 0) &&
            (rowColor21.style.backgroundColor == "green" && rowColor21.value.length != 0) &&
            (rowColor22.style.backgroundColor == "green" && rowColor22.value.length != 0) &&
            (rowColor26.style.backgroundColor == "green" && rowColor26.value.length != 0) &&
            (rowColor27.style.backgroundColor == "green" && rowColor27.value.length != 0) &&
            (rowColor28.style.backgroundColor == "green" && rowColor28.value.length != 0) &&
            (rowColor30.style.backgroundColor == "green" && rowColor30.value.length != 0) &&
            (rowColor33.style.backgroundColor == "green" && rowColor33.value.length != 0) &&
            (rowColor34.style.backgroundColor == "green" && rowColor34.value.length != 0) &&
            (rowColor35.style.backgroundColor == "green" && rowColor35.value.length != 0) &&
            (rowColor36.style.backgroundColor == "green" && rowColor36.value.length != 0) &&
            (rowColor38.style.backgroundColor == "green" && rowColor38.value.length != 0) &&
            (rowColor41.style.backgroundColor == "green" && rowColor41.value.length != 0) &&
            (rowColor42.style.backgroundColor == "green" && rowColor42.value.length != 0) &&
            (rowColor43.style.backgroundColor == "green" && rowColor43.value.length != 0) &&
            (rowColor45.style.backgroundColor == "green" && rowColor45.value.length != 0) &&
            (rowColor46.style.backgroundColor == "green" && rowColor46.value.length != 0) &&
            (rowColor47.style.backgroundColor == "green" && rowColor47.value.length != 0) &&
            (rowColor51.style.backgroundColor == "green" && rowColor51.value.length != 0) &&
            (rowColor52.style.backgroundColor == "green" && rowColor52.value.length != 0) &&
            (rowColor54.style.backgroundColor == "green" && rowColor54.value.length != 0) &&
            (rowColor56.style.backgroundColor == "green" && rowColor56.value.length != 0) &&
            (rowColor57.style.backgroundColor == "green" && rowColor57.value.length != 0) &&
            (rowColor61.style.backgroundColor == "green" && rowColor61.value.length != 0) &&
            (rowColor62.style.backgroundColor == "green" && rowColor62.value.length != 0) &&
            (rowColor63.style.backgroundColor == "green" && rowColor63.value.length != 0) &&
            (rowColor65.style.backgroundColor == "green" && rowColor65.value.length != 0) &&
            (rowColor66.style.backgroundColor == "green" && rowColor66.value.length != 0) &&
            (rowColor67.style.backgroundColor == "green" && rowColor67.value.length != 0) &&
            (rowColor70.style.backgroundColor == "green" && rowColor70.value.length != 0) &&
            (rowColor72.style.backgroundColor == "green" && rowColor72.value.length != 0) &&
            (rowColor73.style.backgroundColor == "green" && rowColor73.value.length != 0) &&
            (rowColor74.style.backgroundColor == "green" && rowColor74.value.length != 0) &&
            (rowColor75.style.backgroundColor == "green" && rowColor75.value.length != 0) &&
            (rowColor78.style.backgroundColor == "green" && rowColor78.value.length != 0) &&
            (rowColor80.style.backgroundColor == "green" && rowColor80.value.length != 0) &&
            (rowColor81.style.backgroundColor == "green" && rowColor81.value.length != 0) &&
            (rowColor82.style.backgroundColor == "green" && rowColor82.value.length != 0) &&
            (rowColor86.style.backgroundColor == "green" && rowColor86.value.length != 0) &&
            (rowColor87.style.backgroundColor == "green" && rowColor87.value.length != 0) &&
            (rowColor90.style.backgroundColor == "green" && rowColor90.value.length != 0) &&
            (rowColor91.style.backgroundColor == "green" && rowColor91.value.length != 0) &&
            (rowColor92.style.backgroundColor == "green" && rowColor92.value.length != 0) &&
            (rowColor93.style.backgroundColor == "green" && rowColor93.value.length != 0) &&
            (rowColor95.style.backgroundColor == "green" && rowColor95.value.length != 0) &&
            (rowColor96.style.backgroundColor == "green" && rowColor96.value.length != 0)) {

                alert("Congratulations!! You've Won!!");
                alert("Click Restart to begin a new game.");
        }
    }

   
    
   


    
    
   

        