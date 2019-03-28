
function itemPickUp(intItem) {
  for (r in JSONroom) {
    for (i in JSONroom[r].item) {
      if (JSONitem[JSONroom[r].item[i]].name == JSONitem[intItem].name)
        JSONroom[r].item.splice(i, 1);
    } //for
  } //for
  gameActionEnd();
} //function

function itemDrop(intItem, intGridPosition) {
  JSONroom[gridGetRoomFromGridPosition(intGridPosition)].item.push(intItem);
  gameActionEnd();
} //function
