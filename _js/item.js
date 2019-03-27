
function itemPickUp(intItem) {



// find room
// find item in Array
// splice

console.log(defGetItemArrayPosition(intItem, gridGetRoomFromGridPosition(JSONplayer[0].gridCurrent)));

for (r in JSONroom) {
  if (JSONroom[r].id = gridGetRoomFromGridPosition(JSONplayer[0].gridCurrent)) {
    JSONroom[r].item.splice(defGetItemArrayPosition(intItem, gridGetRoomFromGridPosition(JSONplayer[0].gridCurrent)), 1);
  } //if
} //for

// JSONroom[]
// JSONplayer[0].luxury.splice(l, 1);
} //function

function itemDrop() {

} //function



//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function defGetItemArrayPosition(intID, intRoomID) {
  // console.log("intRoom: " + intRoom);
  var intTemp = 0;
  for (r in JSONroom) {
    if (JSONroom[r].id == intRoomID) {
      for (i in JSONroom[r].item) {
        if (intID == JSONroom[r].item[i])
          intTemp = i;
      } //for
    } //if
  } //for
  return intTemp;
} //function
