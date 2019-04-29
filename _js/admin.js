
function adminPickUpAllInRoom() {
  //TODO need to refactor length after slice (pickup)
  for (i in JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].item) {
    itemPickUp(JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].item[i]);
  } //for
} //function
