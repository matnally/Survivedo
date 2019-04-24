
function gameInit() {
  defDragDrop();
  arrGird = gridCreate(JSONconfig[0].gridCreateRow, JSONconfig[0].gridCreateColumn); //global variable
  mapCreate();
  gameMoveEnd();
} //function

function gameStart() {
} //function

function gameEnd() {
} //function

function gameMoveStart(strDirection) {
  if (strDirection != "") JSONplayer[0].gridPositionCurrent = mapMove(strDirection, JSONplayer[0].gridPositionCurrent); //player move
  hunterMove(); //hunter move
  gameMoveEnd();
} //function

function gameMoveEnd() {
  JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].visitied = true;
  guiVisualsUpdate();
  hunterCheckIfNear()
} //function

function gameActionStart() {
} //function

function gameActionEnd() {
  guiVisualsUpdate();
} //function
