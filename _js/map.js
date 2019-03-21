
function mapMoveStart(strDirection) {

  mapMove(strDirection);
  defUpdateElement("divGrid", mapShow(JSONplayer[0].roomCurrent));

} //function


function mapCreate() {

  var strDirection = "";
  var intCurrentGridPositions =[];
  var intRandomRoom = 0;
  var arrTempRoom = [];
  var intRoomsToCreate = 0;

  //get all room ids
  for (r in JSONroom) {
    arrTempRoom.push(JSONroom[r].id);
  } //for
  intRoomsToCreate = arrTempRoom.length;

  JSONplayer[0].roomCurrent = gridGetRandomPosition();

  do { //allocate rooms

    do { //choose a direction within the grid
      strDirection = mapDirectionGetRandom();
    } while (gridCheckIfOffGrid(strDirection)); //check if direction to go is within grid

    //check if grid position is not allocated a room
    intCurrentGridPositions = gridGetGridPosition(mapMovePotential(strDirection));
        intCurrentGridRow = intCurrentGridPositions.intCurrentGridRow;
        intCurrentGridColumn = intCurrentGridPositions.intCurrentGridColumn;
    if (arrGird[intCurrentGridRow][intCurrentGridColumn][1] == null) {
      intRandomRoom = Math.floor(Math.random() * arrTempRoom.length); //get random room

      if ((JSONroom[arrTempRoom[intRandomRoom]-1].id) == 1) //found start room so make it player's roomStart
        JSONplayer[0].roomStart = arrGird[intCurrentGridRow][intCurrentGridColumn][0];

      arrGird[intCurrentGridRow][intCurrentGridColumn][1] = JSONroom[arrTempRoom[intRandomRoom]-1].name; //allocate room to
      arrTempRoom.splice((intRandomRoom), 1); //remove random room from temp array
      intRoomsToCreate--;

    } //if

    gridMove(strDirection);

  } while ( intRoomsToCreate > 0 );

  JSONplayer[0].roomCurrent = JSONplayer[0].roomStart; //finished creating so make start room current room

} //function


function mapMove(strDirection) {

  if (gridCheckIfOffGrid(strDirection) == true) {
    // console.log("Can't move " + strDirection);
    console.log("No grid to the " + strDirection)
  } else {

    var intCurrentGridPositions = gridGetGridPosition(mapMovePotential(strDirection));
        intCurrentGridRow = intCurrentGridPositions.intCurrentGridRow;
        intCurrentGridColumn = intCurrentGridPositions.intCurrentGridColumn;

    if (arrGird[intCurrentGridRow][intCurrentGridColumn][1] == null) {
      console.log("No room to the " + strDirection)
    } else {

      intCurrentGridPositions = gridGetGridPosition(JSONplayer[0].roomCurrent);
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

  } //if

} //function


function mapMovePotential(strDirection) {

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

  return arrGird[intCurrentGridRow][intCurrentGridColumn][0];

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

        intTemp += arrGird[g][gs][0];
        intTemp += '<br>';
        intTemp += arrGird[g][gs][1];

        if (arrGird[g][gs][0] == intRoom)
          intTemp += '<br>HERE';

      } //if

      intTemp += '</div><!-- divCell -->';
    } //for
    intTemp += '</div><!-- divRow -->';
  } //for
  intTemp += '</div><!-- divTable -->';
  return intTemp;
} //function
