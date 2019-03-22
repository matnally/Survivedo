
function mapCreate() {
  var strDirection = "";
  var intRoomsToCreate = 0
  var intCurrentGridPositions = [];
  var intCurrentGridRow = 0;
  var intCurrentGridColumn = 0;
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
    intCurrentGridPositions = gridGetGridPositionFromRoom(mapMovePotential(strDirection, intGridPosition));
      intCurrentGridRow = intCurrentGridPositions.intCurrentGridRow;
      intCurrentGridColumn = intCurrentGridPositions.intCurrentGridColumn;
    //if grid position not allocated a room, get random room from availible IDs in arrRoomIDs
    if (arrGird[intCurrentGridRow][intCurrentGridColumn][1] == null) {
      intRandomRoom = Math.floor(Math.random() * arrRoomIDs.length); //get random room
      //if start room make it player's roomStart
      if ((JSONroom[arrRoomIDs[intRandomRoom]-1].id) == 1)
        JSONplayer[0].roomStart = arrGird[intCurrentGridRow][intCurrentGridColumn][0];
      arrGird[intCurrentGridRow][intCurrentGridColumn][1] = JSONroom[arrRoomIDs[intRandomRoom]-1].id; //allocate room to
      arrRoomIDs.splice((intRandomRoom), 1); //remove random room from temp array
      intRoomsToCreate--;
    } //if
    if (gridCheckIfOffGrid(strDirection, intGridPosition) != true) {
      intGridPosition = gridMove(strDirection, intGridPosition); //update current room from grid move
    } //if
  } while ( intRoomsToCreate > 0 );
  JSONplayer[0].roomCurrent = JSONplayer[0].roomStart; //finished creating map so make start room current room
} //function


function mapMoveStart(strDirection) {

  mapMove(strDirection, JSONplayer[0].roomCurrent);
  guiButtonDirectionUpdate(JSONplayer[0].roomCurrent);

  mapMoveEnd();

} //function


function mapMoveEnd() {
  guiButtonDirectionUpdate(JSONplayer[0].roomCurrent);
  defUpdateElement("divGrid", mapShow(JSONplayer[0].roomCurrent));
} //function

function mapMove(strDirection, intRoom) {

  var intCurrentGridPositions = [];
  var intCurrentGridRow = 0;
  var intCurrentGridColumn = 0;
  var intGridPositionsNew = [];
  var intGridPositionsNewRow = 0;
  var intGridPositionsNewColumn = 0;

  if (gridCheckIfOffGrid(strDirection, intRoom) == true) {
    console.log("No grid to the " + strDirection)
  } else {

    intCurrentGridPositions = gridGetGridPositionFromRoom(mapMovePotential(strDirection, intRoom));
      intCurrentGridRow = intCurrentGridPositions.intCurrentGridRow;
      intCurrentGridColumn = intCurrentGridPositions.intCurrentGridColumn;

    if (arrGird[intCurrentGridRow][intCurrentGridColumn][1] == null) {
      console.log("No room to the " + strDirection)
    } else {

      intGridPositionsNew = gridGetGridPositionFromMove(strDirection, intRoom);
        intGridPositionsNewRow = intGridPositionsNew.intGridPositionsNewRow;
        intGridPositionsNewColumn = intGridPositionsNew.intGridPositionsNewColumn;

      JSONplayer[0].roomCurrent = arrGird[intGridPositionsNewRow][intGridPositionsNewColumn][0];

    } //if

  } //if

} //function


function mapMovePotential(strDirection, intRoom) {
  var intGridPositionsNew = gridGetGridPositionFromMove(strDirection, intRoom);
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
  console.log("Item ID : " + JSONroom[arrGird[g][gs][1]-1].item[i])
  intTemp += JSONitem[0].name;
} //for

      } //if

      intTemp += '</div><!-- divCell -->';
    } //for
    intTemp += '</div><!-- divRow -->';
  } //for
  intTemp += '</div><!-- divTable -->';
  return intTemp;
} //function
