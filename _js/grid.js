
function gridCreate(intRows, intColumns) {
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

function gridMove(strDirection, intGridPosition) {
  var intGridPositionsNew = [];
  var intGridPositionsNewRow = 0;
  var intGridPositionsNewColumn = 0;
  intGridPositionsNew = gridGetGridPositionFromMove(strDirection, intGridPosition);
    intGridPositionsNewRow = intGridPositionsNew.intGridPositionsNewRow;
    intGridPositionsNewColumn = intGridPositionsNew.intGridPositionsNewColumn;
  return arrGird[intGridPositionsNewRow][intGridPositionsNewColumn][0];
} //function

function gridCheckIfOffGrid(strDirection, intGridPosition) {
  var boolTemp = false;
  var intGridPositionsCurrent = [];
  var intGridRowCurrent = 0;
  var intGridColumnCurrent = 0;
  intGridPositionsCurrent = gridGetGridPositionsFromGridPosition(intGridPosition);
    intGridRowCurrent = intGridPositionsCurrent.intGridRowCurrent;
    intGridColumnCurrent = intGridPositionsCurrent.intGridColumnCurrent;
  switch (strDirection) {
    case "N":
      if ((intGridRowCurrent - 1) < 0) boolTemp = true; //too far NORTH
    break;
    case "E":
      if ((intGridColumnCurrent + 1) >= arrGird[intGridRowCurrent].length) boolTemp = true; //too far EAST
    break;
    case "S":
      if ((intGridRowCurrent + 1) > (arrGird.length-1)) boolTemp = true; //too far SOUTH
    break;
    case "W":
      if ((intGridColumnCurrent - 1) < 0) boolTemp = true; //too far WEST
    break;
    default:
      console.log("Error - gridCheckIfOffGrid");
  } //switch
  return boolTemp;
} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function gridGetRoomFromGridPosition(intGridPosition) {
  var intTemp = 0;
  for (g in arrGird) {
    for (gs in arrGird[g]) {
      if (arrGird[g][gs][0] == intGridPosition)
        intTemp = arrGird[g][gs][1];
    } //for
  } //for
  return intTemp;
} //function

function gridGetGridPositionsFromGridPosition(intGridPosition) {
  var intGridRowCurrent = 0;
  var intGridColumnCurrent = 0;
  for (g in arrGird) {
    for (gs in arrGird[g]) {
      if (arrGird[g][gs][0] == intGridPosition) {
        intGridRowCurrent = g;
        intGridColumnCurrent = gs;
      } //if
    } //for
  } //for
  return {
    "intGridRowCurrent": parseInt(intGridRowCurrent)
    ,"intGridColumnCurrent": parseInt(intGridColumnCurrent)
  } //return
} //function

function gridGetGridPositionFromMove(strDirection, intGridPosition) {
  var intGridPositionsCurrent = gridGetGridPositionsFromGridPosition(intGridPosition);
  var intGridRowCurrent = intGridPositionsCurrent.intGridRowCurrent;
  var intGridColumnCurrent = intGridPositionsCurrent.intGridColumnCurrent;
  switch (strDirection) {
    case "N":
      intGridRowCurrent--;
    break;
    case "E":
      intGridColumnCurrent++;
    break;
    case "S":
      intGridRowCurrent++;
    break;
    case "W":
      intGridColumnCurrent--;
    break;
  } //switch
  return {
    "intGridPositionsNewRow": parseInt(intGridRowCurrent)
    ,"intGridPositionsNewColumn": parseInt(intGridColumnCurrent)
  } //return
} //function

function gridGetGridPositionRandom() {
  return Math.floor(Math.random() * Math.floor(arrGird.length));
} //function
