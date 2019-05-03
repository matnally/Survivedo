
function gameInit() {
  //functionality
  guiCreateDragDrop();
  guiCreateListeners();
  //gui
  mapCreate();
  gameMoveEnd();
} //function

function gameStart() {
} //function

function gameEnd() {
} //function

function gameMoveStart(strDirection) {
  if (strDirection != "") { //player move
    JSONplayer[0].gridPositionCurrent = mapMove(strDirection, JSONplayer[0].gridPositionCurrent);
    JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].visitied = true;
  } //if
  hunterMove(); //hunter move
  gameMoveEnd();
} //function

function gameMoveEnd() {
  guiVisualsUpdate();
  hunterCheckIfNear()
} //function

function gameActionStart() {
} //function

function gameActionEnd() {
  guiVisualsUpdate();
} //function
