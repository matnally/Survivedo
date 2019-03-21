
function gridCreate() {
  //create global grid
  arrGird = [
    [[0,null],[1,null],[2,null],[3,null]]
    ,[[4,null],[5,null],[6,null],[7,null]]
    ,[[8,null],[9,null],[10,null],[11,null]]
    ,[[12,null],[13,null],[14,null],[15,null]]
    ,[[16,null],[17,null],[18,null],[19,null]]
    ,[[20,null],[21,null],[22,null],[23,null]]
  ];
} //function


function gridMove(strDirection) {

  if (gridCheckIfOffGrid(strDirection) == true) {
    // console.log("Can't move " + strDirection);
  } else {

    var intCurrentGridPositions = gridGetGridPosition(JSONplayer[0].roomCurrent);
        intCurrentGridRow = intCurrentGridPositions.intCurrentGridRow;
        intCurrentGridColumn = intCurrentGridPositions.intCurrentGridColumn;

    //move
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

    JSONplayer[0].roomCurrent = arrGird[intCurrentGridRow][intCurrentGridColumn][0];

  } //if

} //function


function gridCheckIfOffGrid(strDirection) {
  //check if can move to the direction

  var intCurrentGridPositions = gridGetGridPosition(JSONplayer[0].roomCurrent);
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

function gridGetRandomPosition() {
  return Math.floor(Math.random() * Math.floor(16)); // 0 - 15
} //function

function gridGetGridPosition(intRoomCurrent) {
  //find grid position
  var intCurrentGridRow = 0;
  var intCurrentGridColumn = 0;
  for (g in arrGird) {
    for (gs in arrGird[g]) {
      if (arrGird[g][gs][0] == intRoomCurrent) {
        intCurrentGridRow = g;
        intCurrentGridColumn = gs;
      } //if
    } //for
  } //for
  return {
    "intCurrentGridRow": parseInt(intCurrentGridRow)
    ,"intCurrentGridColumn": parseInt(intCurrentGridColumn)
  }
} //function
