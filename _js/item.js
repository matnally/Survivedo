
function itemPickUp(intItem) {
  if (JSONplayer[0].item.length >= JSONgame[0].carryLimit) {
    alert("Can't pick up as you have reached your carry limit of " + JSONgame[0].carryLimit);
  } else {
    for (r in JSONroom) {
      for (i in JSONroom[r].item) {
        if (JSONitem[JSONroom[r].item[i]].name == JSONitem[intItem].name) {
          JSONplayer[0].item.push(JSONroom[r].item[i]); //add item to player
          JSONroom[r].item.splice(i, 1); //remove item from room
        } //if
      } //for
    } //for
    gameActionEnd();
  } //if
} //function

function itemDrop(intItem, intRoom) {
  for (i in JSONplayer[0].item) {
    if (JSONplayer[0].item[i] == intItem)
      JSONplayer[0].item.splice(i, 1); //remove item from player
  } //if
  JSONroom[intRoom].item.push(intItem); //add item to room
  gameActionEnd();
} //function
