
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

  //moves
  JSONplayer[0].gridPositionCurrent = mapMove(strDirection, JSONplayer[0].gridPositionCurrent);
  hunterMove();

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

  if (JSONplayer[0].gridPositionCurrent == JSONhunter[0].gridPositionCurrent)
    alert("SAME ROOM");

} //function

function gameActionStart() {
} //function
function gameActionEnd() {
  //visuals
  guiTextUpdate();
  defUpdateElement("divItemsPlayer", guiItemsGetPlayer());
  defUpdateElement("divItemsRoom", guiItemsGetRoom(gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)));
  defUpdateElement("divGrid", guiMapShow(JSONplayer[0].gridPositionCurrent));


  //itemCraft
  var strTemp = "";
  var arrTemp = itemCraftCheck();
  for (i in arrTemp) {
    strTemp += '<button onClick="itemCraft('+arrTemp[i][0]+','+arrTemp[i][1]+','+arrTemp[i][2]+');">Craft ' + JSONitemCraft[arrTemp[i][0]].name + ' (' + JSONitem[arrTemp[i][1]].name + ', ' + JSONitem[arrTemp[i][2]].name + ')</button><br>';
  } //for
  defUpdateElement("divItemsCraft", strTemp);

} //function
