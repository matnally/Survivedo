
function gridCreate(intRows, intColumns) {
  //creates multi dimensional array to use as a grid to create a map
  var arrTemp = [];
  var i = 0;
  for (var r=0;r<intRows;r++) {
    arrTemp[r] = []; // Create subArray
    for(var c=0;c<intColumns;c++) {
      arrTemp[r].push([i,null]);
      i++;
    } //for
  } //for
  return arrTemp;
} //function


function gridMove(strDirection, intRoom) {
  var intGridPositionsNew = [];
  var intGridPositionsNewRow = 0;
  var intGridPositionsNewColumn = 0;
  intGridPositionsNew = gridGetGridPositionFromMove(strDirection, intRoom);
    intGridPositionsNewRow = intGridPositionsNew.intGridPositionsNewRow;
    intGridPositionsNewColumn = intGridPositionsNew.intGridPositionsNewColumn;
  return arrGird[intGridPositionsNewRow][intGridPositionsNewColumn][0];
  } //function


function gridCheckIfOffGrid(strDirection, intRoom) {
  //check if can move to the direction

  var intCurrentGridPositions = [];
  var intCurrentGridRow = 0;
  var intCurrentGridColumn = 0;

  intCurrentGridPositions = gridGetGridPositionFromRoom(intRoom);
    intCurrentGridRow = intCurrentGridPositions.intCurrentGridRow;
    intCurrentGridColumn = intCurrentGridPositions.intCurrentGridColumn;

  var boolTemp = false;
  switch (strDirection) {
    case "N":
      if ((intCurrentGridRow - 1) < 0) { // console.log("Gone too far NORTH");
        boolTemp = true;
      } //if
    break;
    case "E":
      if ((intCurrentGridColumn + 1) >= arrGird[intCurrentGridRow].length) { // console.log("Gone too far EAST");
        boolTemp = true;
      } //if
    break;
    case "S":
      if ((intCurrentGridRow + 1) > (arrGird.length-1)) { // console.log("Gone too far SOUTH");
        boolTemp = true;
      } //if
    break;
    case "W":
      if ((intCurrentGridColumn - 1) < 0) { // console.log("Gone too far WEST");
        boolTemp = true;
      } //if
    break;
    default:
      console.log("Error - gridCheckIfOffGrid: Why not direction?");
  } //switch
  return boolTemp;
} //function



//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function gridGetGridPositionFromRoom(intRoom) {
  var intCurrentGridRow = 0;
  var intCurrentGridColumn = 0;
  for (g in arrGird) {
    for (gs in arrGird[g]) {
      if (arrGird[g][gs][0] == intRoom) {
        intCurrentGridRow = g;
        intCurrentGridColumn = gs;
      } //if
    } //for
  } //for
  return {
    "intCurrentGridRow": parseInt(intCurrentGridRow)
    ,"intCurrentGridColumn": parseInt(intCurrentGridColumn)
  } //return
} //function

function gridGetGridPositionFromMove(strDirection, intRoom) {
  var intCurrentGridPositions = gridGetGridPositionFromRoom(intRoom);
  var intCurrentGridRow = intCurrentGridPositions.intCurrentGridRow;
  var intCurrentGridColumn = intCurrentGridPositions.intCurrentGridColumn;
  switch (strDirection) {
    case "N":
      intCurrentGridRow--;
    break;
    case "E":
      intCurrentGridColumn++;
    break;
    case "S":
      intCurrentGridRow++;
    break;
    case "W":
      intCurrentGridColumn--;
    break;
  } //switch
  return {
    "intGridPositionsNewRow": parseInt(intCurrentGridRow)
    ,"intGridPositionsNewColumn": parseInt(intCurrentGridColumn)
  } //return
} //function

function gridGetRandomPosition() {
  return Math.floor(Math.random() * Math.floor(16)); // 0 - 15
} //function
