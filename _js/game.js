
function gameInit() {
  arrGird = gridCreate(JSONconfig[0].gridCreateRow, JSONconfig[0].gridCreateColumn);
  mapCreate();
  gameMoveEnd();
} //function

function gameStart() {
} //function
function gameEnd() {
} //function

function gameMoveStart(strDirection) {
  mapMove(strDirection, JSONplayer[0].gridCurrent);
  gameMoveEnd();
} //function
function gameMoveEnd() {
  guiButtonDirectionUpdate(JSONplayer[0].gridCurrent);
  guiTextUpdate();
  defUpdateElement("divGrid", guiMapShow(JSONplayer[0].gridCurrent));
} //function

function gameActionStart() {
} //function
function gameActionEnd() {
  defUpdateElement("divGrid", guiMapShow(JSONplayer[0].gridCurrent));
} //function
