
function gameInit() {
  arrGird = gridCreate(JSONconfig[0].gridCreateRow, JSONconfig[0].gridCreateColumn); //global variable
  mapCreate();
  gameMoveEnd();
} //function

function gameStart() {
} //function
function gameEnd() {
} //function

function gameMoveStart(strDirection) {
  mapMove(strDirection, JSONplayer[0].gridPositionCurrent);
  gameMoveEnd();
} //function
function gameMoveEnd() {
  guiButtonDirectionUpdate(JSONplayer[0].gridPositionCurrent);
  JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].visitied = true;
  //visuals
  guiTextUpdate();
  defUpdateElement("divItemsPlayer", guiItemsGetPlayer());
  defUpdateElement("divItemsRoom", guiItemsGetRoom(gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)));
  defUpdateElement("divGrid", guiMapShow(JSONplayer[0].gridPositionCurrent));
} //function

function gameActionStart() {
} //function
function gameActionEnd() {
  //visuals
  guiTextUpdate();
  defUpdateElement("divItemsPlayer", guiItemsGetPlayer());
  defUpdateElement("divItemsRoom", guiItemsGetRoom(gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)));
  defUpdateElement("divGrid", guiMapShow(JSONplayer[0].gridPositionCurrent));
} //function
