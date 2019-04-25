
function guiVisualsUpdate() {
  //TEXT
  defUpdateElement("spnTextRoomDesc", guiGetTextRoom());
  defUpdateElement("spnTextRoomDescItem", guiGetTextRoomItem());
  //BUTTONS
  guiButtonDirectionUpdate(JSONplayer[0].gridPositionCurrent);
  defUpdateElement("divRoomGetItemButton", guiGetItemRoom(gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)));
  defUpdateElement("divPlayerGetItemButton", guiGetItemPlayer());
  defUpdateElement("divPlayerGetItemCraftPotentialButton", guiGetItemCraftPotential());
  //MAP
  defUpdateElement("divGrid", guiMapShow(JSONplayer[0].gridPositionCurrent));
  //FUNCTIONALITY
  defDragDrop(); //need to go here so maps to newly drawn elements
} //function

function guiGetTextRoom() {
  var strTemp = "";
  strTemp += "<p>";
  strTemp += JSONconfig[0].txtMove + "&nbsp;" + "<strong>" + JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].name + "</strong>";
  strTemp += "<br><br>";
  strTemp += JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].description;
  strTemp += "</p>";
  return strTemp;
} //function

function guiGetTextRoomItem() {
  var strTemp = "";
  if (JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].item.length > 0) { //if have items
    strTemp += "<p>";
    strTemp += JSONconfig[0].txtRoomItemVisible;
    for (i in JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].item) {
      strTemp += "<br>";
      strTemp += JSONconfig[0].txtRoomItemPrefix + JSONitem[JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].item[i]].name + "("+JSONitem[JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].item[i]].description+")";
    } //for
    strTemp += "</p>";
  } //if
  return strTemp;
} //function

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

function guiGetItemRoom(intRoom) {
  var strTemp = "";
  for (i in JSONroom[intRoom].item) {
    // strTemp += '<img title="'+JSONitem[JSONroom[intRoom].item[i]].name+'" data-itemID='+JSONroom[intRoom].item[i]+' data-itemLocation="room" class="draggable" src="'+JSONitem[JSONroom[intRoom].item[i]].image+'" alt="'+JSONitem[JSONroom[intRoom].item[i]].name+'">';
    strTemp += '<img title="" data-itemID='+JSONroom[intRoom].item[i]+' data-itemLocation="room" class="draggable" src="'+JSONitem[JSONroom[intRoom].item[i]].image+'" alt="'+JSONitem[JSONroom[intRoom].item[i]].name+'">';
    strTemp += '&nbsp;';
  } //for
  return strTemp;
} //function

function guiGetItemPlayer() {
  var strTemp = "";
  for (i in JSONplayer[0].item) {
    // strTemp += '<img title="'+JSONitem[JSONplayer[0].item[i]].name+'" data-itemID='+JSONplayer[0].item[i]+' data-itemLocation="player" class="draggable" src="'+JSONitem[JSONplayer[0].item[i]].image+'" alt="'+JSONitem[JSONplayer[0].item[i]].name+'">';
    strTemp += '<img title="" data-itemID='+JSONplayer[0].item[i]+' data-itemLocation="player" class="draggable" src="'+JSONitem[JSONplayer[0].item[i]].image+'" alt="'+JSONitem[JSONplayer[0].item[i]].name+'">';
    strTemp += '&nbsp;';
  } //for
  return strTemp;
} //function

function guiGetItemCraftPotential() {
  var strTemp = "";
  var arrTemp = itemCraftCheck();
  for (i in arrTemp) {
    strTemp += '<button onClick="itemCraftIt('+arrTemp[i][0]+','+arrTemp[i][1]+','+arrTemp[i][2]+');"><img src="'+JSONitem[arrTemp[i][1]].image+'" alt="'+JSONitem[arrTemp[i][1]].name+'"> + <img src="'+JSONitem[arrTemp[i][2]].image+'" alt="'+JSONitem[arrTemp[i][2]].name+'"> = '

    for (var a=0;a<JSONitem[arrTemp[i][0]].quantity;a++) {
      strTemp += '<img src="'+JSONitem[arrTemp[i][0]].image+'" alt="'+JSONitem[arrTemp[i][0]].name+'">';
    } //for

    strTemp += '<br>Craft '+JSONitem[arrTemp[i][0]].name+'</button><br>';

  } //for
  return strTemp;
} //function




function guiMapShow(intRoom) {

  var strTemp = "";
  strTemp += '<div class="divTable">';
  for (g in arrGird) {
    strTemp += '<div class="divRow">';
    for (gs in arrGird[g]) {
      strTemp += '<div class="divCell">';

      if (arrGird[g][gs][1] != null) {

        //SHOW HUNTER
        // if (arrGird[g][gs][0] == JSONhunter[0].gridPositionCurrent)
        //     strTemp += "<strong>Hunter</strong>";

        if ((JSONroom[arrGird[g][gs][1]].visitied == true) || (itemExistsInPlayer(8))) { //possesion of the map

          if (arrGird[g][gs][0] == intRoom) {
            strTemp += "<strong>" + JSONroom[arrGird[g][gs][1]].name + "</strong>";
            for (i in JSONroom[arrGird[g][gs][1]].item) {
              // console.log("Item ID : " + JSONroom[arrGird[g][gs][1]-1].item[i])
              // strTemp += "<br>-" + JSONitem[JSONroom[arrGird[g][gs][1]].item[i]].name;
            } //for
          } else
            strTemp += JSONroom[arrGird[g][gs][1]].name;

        } //if

      } //if

      strTemp += '</div><!-- divCell -->';
    } //for
    strTemp += '</div><!-- divRow -->';
  } //for
  strTemp += '</div><!-- divTable -->';
  return strTemp;
} //function
