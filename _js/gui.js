
function guiButtonDirectionUpdate(intGridPosition) {
  var intGridPositionsCurrent = [];
  var intGridRowCurrent = 0;
  var intGridColumnCurrent = 0;
  // var arrDirection = ["N","E","S","W"];
  for (var i=0;i<arrDirection.length;i++) {
    if (gridCheckIfOffGrid(arrDirection[i], intGridPosition) == true) {
      document.getElementById("butMapMove" + arrDirection[i]).disabled = true;
    } else {
      document.getElementById("butMapMove" + arrDirection[i]).disabled = false;
      intGridPositionsCurrent = gridGetGridPositionsFromGridPosition(mapMovePotential(arrDirection[i], intGridPosition));
        intGridRowCurrent = intGridPositionsCurrent.intGridRowCurrent;
        intGridColumnCurrent = intGridPositionsCurrent.intGridColumnCurrent;
      if (arrGird[intGridRowCurrent][intGridColumnCurrent][1] == null)
        document.getElementById("butMapMove" + arrDirection[i]).disabled = true;
    } //if
  } //for
} //function



function guiTextUpdate() {
  var strTemp = "";
  //ROOM
  strTemp += JSONconfig[0].txtMove + "&nbsp;" + JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].name;
  //ITEMS
  if (JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].item > 0) { //if have items
    strTemp += "<br>"
    strTemp += JSONconfig[0].txtRoomItemVisible
    for (i in JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].item) {
      strTemp += "<br>"
      strTemp += JSONconfig[0].txtRoomItemPrefix + JSONitem[JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].item[i]].name;
    } //for
  } //if
  defUpdateElement("spnText", strTemp);
} //function



function guiItemsGetRoom(intRoom) {
  var strTemp = "";
  for (i in JSONroom[intRoom].item) {
    strTemp += '<button onClick="itemPickUp('+JSONroom[intRoom].item[i]+');">Pick up '+JSONitem[JSONroom[intRoom].item[i]].name+'</button>';
  } //for
  return strTemp;
} //function
function guiItemsGetPlayer() {
  var strTemp = "";
  for (i in JSONplayer[0].item) {
    strTemp += '<button onClick="itemDrop('+JSONplayer[0].item[i]+', '+gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)+');">Drop '+JSONitem[JSONplayer[0].item[i]].name+'</button>';
  } //for
  return strTemp;
} //function







function guiMapShow(intRoom) {
  var intTemp = "";
  intTemp += '<div class="divTable">';
  for (g in arrGird) {
    intTemp += '<div class="divRow">';
    for (gs in arrGird[g]) {
      intTemp += '<div class="divCell">';

      if (arrGird[g][gs][1] != null) {

        if (arrGird[g][gs][0] == intRoom) {
          intTemp += "<strong>" + JSONroom[arrGird[g][gs][1]].name + "</strong>";
          for (i in JSONroom[arrGird[g][gs][1]].item) {
            // console.log("Item ID : " + JSONroom[arrGird[g][gs][1]-1].item[i])
            intTemp += "<br>-" + JSONitem[JSONroom[arrGird[g][gs][1]].item[i]].name;
          } //for
        } else
          intTemp += JSONroom[arrGird[g][gs][1]].name;

      } //if

      intTemp += '</div><!-- divCell -->';
    } //for
    intTemp += '</div><!-- divRow -->';
  } //for
  intTemp += '</div><!-- divTable -->';
  return intTemp;
} //function
