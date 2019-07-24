
function adminFindHunter() {
  console.log("Hunter is currently in " + JSONroom[gridGetRoomFromGridPosition(JSONhunter[0].gridPositionCurrent)].name);
} //function

function adminShowMap() {
  JSONplayer[0].item.push(0); //adds map to player's inventory
  defUpdateElement("divGrid", guiMapShow(JSONplayer[0].gridPositionCurrent));
} //function

function adminPickUpAllInRoom() {
  do {
    itemPickUp(JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].item[0]); //splicing while picking up so just get the 0th item
  } while (JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].item.length > 0)
} //function

function adminShowAllItemsDetails() {
  for (i in JSONitem) {
    console.log(i + " " + JSONitem[i].name);
  } //for
} //function

function adminShowAllItemsCraft() {
  var strTemp = "";
  for (i in JSONitem) {
    if (JSONitem[i].itemIngredient1.length > 0) {
      strTemp += "CRAFT " + JSONitem[i].name;
      strTemp += "\n";
      for (itemIngredient1 in JSONitem[i].itemIngredient1) {
        strTemp += "  Item1: " + JSONitem[JSONitem[i].itemIngredient1[itemIngredient1]].name;
        strTemp += "\n";
      } //for
      for (itemIngredient2 in JSONitem[i].itemIngredient2) {
        strTemp += "  Item2: " + JSONitem[JSONitem[i].itemIngredient2[itemIngredient2]].name;
        strTemp += "\n";
      } //for
      strTemp += "\n";
    } //if
  } //for
  console.log(strTemp);
} //function
