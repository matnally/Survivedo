
function mapCreate() {
  var strDirection = "";
  var intRoomsToCreate = 0
  var intGridPositionsCurrent = [];
  var intGridRowCurrent = 0;
  var intGridColumnCurrent = 0;
  var intRandomRoom = 0;
  var arrRoomIDs = [];
  var intGridPosition = 0;
  arrRoomIDs = defGetAllValuesByProperty(JSONroom, "id"); //get all room ids
  intRoomsToCreate = arrRoomIDs.length;
  intGridPosition = gridGetRandomPosition(); //inital random grid position to start from
  do { //allocate rooms
    do { //choose a direction within the grid
      strDirection = mapDirectionGetRandom();
    } while (gridCheckIfOffGrid(strDirection, intGridPosition)); //check if direction to go is within grid
    //check if grid position is not allocated a room
    intGridPositionsCurrent = gridGetGridPositionsFromGridPosition(mapMovePotential(strDirection, intGridPosition));
      intGridRowCurrent = intGridPositionsCurrent.intGridRowCurrent;
      intGridColumnCurrent = intGridPositionsCurrent.intGridColumnCurrent;
    //if grid position not allocated a room, get random room from availible IDs in arrRoomIDs
    if (arrGird[intGridRowCurrent][intGridColumnCurrent][1] == null) {
      intRandomRoom = Math.floor(Math.random() * arrRoomIDs.length); //get random room
      //if start room make it player's roomStart
      if ((JSONroom[arrRoomIDs[intRandomRoom]-1].id) == 1)
        JSONplayer[0].roomStart = arrGird[intGridRowCurrent][intGridColumnCurrent][0];
      arrGird[intGridRowCurrent][intGridColumnCurrent][1] = JSONroom[arrRoomIDs[intRandomRoom]-1].id; //allocate room to
      arrRoomIDs.splice((intRandomRoom), 1); //remove random room from temp array
      intRoomsToCreate--;
    } //if
    if (gridCheckIfOffGrid(strDirection, intGridPosition) != true) {
      intGridPosition = gridMove(strDirection, intGridPosition); //update current room from grid move
    } //if
  } while ( intRoomsToCreate > 0 );
  JSONplayer[0].gridCurrent = JSONplayer[0].roomStart; //finished creating map so make start room current room
} //function


function mapMoveStart(strDirection) {

  mapMove(strDirection, JSONplayer[0].gridCurrent);
  guiButtonDirectionUpdate(JSONplayer[0].gridCurrent);

  mapMoveEnd();

} //function


function mapMoveEnd() {
  guiButtonDirectionUpdate(JSONplayer[0].gridCurrent);
  defUpdateElement("divGrid", mapShow(JSONplayer[0].gridCurrent));
} //function

function mapMove(strDirection, intGridPositions) {

  var intGridPositionsCurrent = [];
  var intGridRowCurrent = 0;
  var intGridColumnCurrent = 0;
  var intGridPositionsNew = [];
  var intGridPositionsNewRow = 0;
  var intGridPositionsNewColumn = 0;

  if (gridCheckIfOffGrid(strDirection, intGridPositions) == true) {
    console.log("No grid to the " + strDirection)
  } else {

    intGridPositionsCurrent = gridGetGridPositionsFromGridPosition(mapMovePotential(strDirection, intGridPositions));
      intGridRowCurrent = intGridPositionsCurrent.intGridRowCurrent;
      intGridColumnCurrent = intGridPositionsCurrent.intGridColumnCurrent;

    if (arrGird[intGridRowCurrent][intGridColumnCurrent][1] == null) {
      console.log("No room to the " + strDirection)
    } else {

      intGridPositionsNew = gridGetGridPositionFromMove(strDirection, intGridPositions);
        intGridPositionsNewRow = intGridPositionsNew.intGridPositionsNewRow;
        intGridPositionsNewColumn = intGridPositionsNew.intGridPositionsNewColumn;

      JSONplayer[0].gridCurrent = arrGird[intGridPositionsNewRow][intGridPositionsNewColumn][0];

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
  var arrDirection = ["N","E","S","W"];
  return arrDirection[Math.floor(Math.random() * Math.floor(arrDirection.length))];
} //function



function mapShow(intRoom) {
  var intTemp = "";
  intTemp += '<div class="divTable">';
  for (g in arrGird) {
    intTemp += '<div class="divRow">';
    for (gs in arrGird[g]) {
      intTemp += '<div class="divCell">';

      if (arrGird[g][gs][1] != null) {

        // intTemp += arrGird[g][gs][0];
        // intTemp += '<br>';
        // intTemp += arrGird[g][gs][1];

        if (arrGird[g][gs][0] == intRoom)
        intTemp += "<strong>" + arrGird[g][gs][1] + "</strong>";
        else
        intTemp += arrGird[g][gs][1];


for (i in JSONroom[arrGird[g][gs][1]-1].item) {
  // console.log("Item ID : " + JSONroom[arrGird[g][gs][1]-1].item[i])
  intTemp += "<br>" + JSONitem[JSONroom[arrGird[g][gs][1]-1].item[i]].name;
} //for

      } //if

      intTemp += '</div><!-- divCell -->';
    } //for
    intTemp += '</div><!-- divRow -->';
  } //for
  intTemp += '</div><!-- divTable -->';
  return intTemp;
} //function
