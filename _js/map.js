
function mapCreate() {
  var strDirection = "";
  var intGridPositionsCurrent = [];
  var intGridRowCurrent = 0;
  var intGridColumnCurrent = 0;
  var intRandomRoom = 0;
  var arrTemp = [];
  var intGridPosition = 0;
  for (i in JSONroom) { arrTemp.push(i); } //create temp array, use as decreasing log of room yet to allocate
  intGridPosition = gridGetGridPositionRandom(); //inital random grid position to start from
  do { //allocate rooms
    do { //choose a direction within the grid
      strDirection = mapDirectionGetRandom();
    } while (gridCheckIfOffGrid(strDirection, intGridPosition)); //check if direction to go is within grid
    intGridPositionsCurrent = gridGetGridPositionsFromGridPosition(mapMovePotential(strDirection, intGridPosition));
      intGridRowCurrent = intGridPositionsCurrent.intGridRowCurrent;
      intGridColumnCurrent = intGridPositionsCurrent.intGridColumnCurrent;
    if (arrGird[intGridRowCurrent][intGridColumnCurrent][1] == null) { //if position not allocated a room
      intRandomRoom = Math.floor(Math.random() * arrTemp.length); //get random room
      if (arrTemp[intRandomRoom] == 0) //if start room make it player's roomStart
        JSONgame[0].roomStart = arrGird[intGridRowCurrent][intGridColumnCurrent][0];
      arrGird[intGridRowCurrent][intGridColumnCurrent][1] = arrTemp[intRandomRoom]; //allocate room to
      arrTemp.splice((intRandomRoom), 1); //remove random room from temp array
    } //if
    if (gridCheckIfOffGrid(strDirection, intGridPosition) != true)
      intGridPosition = gridMove(strDirection, intGridPosition); //update current room from grid move
  } while (arrTemp.length > 0);
  JSONplayer[0].gridPositionCurrent = JSONgame[0].roomStart; //finished creating map so make start room current room
} //function

function mapMove(strDirection, intGridPositions) {
  var intGridPositionsCurrent = [];
  var intGridRowCurrent = 0;
  var intGridColumnCurrent = 0;
  var intGridPositionsNew = [];
  var intGridPositionsNewRow = 0;
  var intGridPositionsNewColumn = 0;
  if (gridCheckIfOffGrid(strDirection, intGridPositions) != true) {
    intGridPositionsCurrent = gridGetGridPositionsFromGridPosition(mapMovePotential(strDirection, intGridPositions));
      intGridRowCurrent = intGridPositionsCurrent.intGridRowCurrent;
      intGridColumnCurrent = intGridPositionsCurrent.intGridColumnCurrent;
    if (arrGird[intGridRowCurrent][intGridColumnCurrent][1] != null) {
      intGridPositionsNew = gridGetGridPositionFromMove(strDirection, intGridPositions);
        intGridPositionsNewRow = intGridPositionsNew.intGridPositionsNewRow;
        intGridPositionsNewColumn = intGridPositionsNew.intGridPositionsNewColumn;
      JSONplayer[0].gridPositionCurrent = arrGird[intGridPositionsNewRow][intGridPositionsNewColumn][0];
    } //if
  } //if
} //function

function mapMovePotential(strDirection, intGridPositions) {
  var intGridPositionsNew = gridGetGridPositionFromMove(strDirection, intGridPositions);
  var intGridPositionsNewRow = intGridPositionsNew.intGridPositionsNewRow;
  var intGridPositionsNewColumn = intGridPositionsNew.intGridPositionsNewColumn;
  return arrGird[intGridPositionsNewRow][intGridPositionsNewColumn][0];
} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function mapDirectionGetRandom() {
  arrDirection = ["N","E","S","W"]; //global variable
  return arrDirection[Math.floor(Math.random() * Math.floor(arrDirection.length))];
} //function
