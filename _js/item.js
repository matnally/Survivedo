
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
  itemRemoveFromPlayer(intItem);
  JSONroom[intRoom].item.push(intItem); //add item to room
  gameActionEnd();
} //function

function itemRemoveFromPlayer(intItem) {
  for (i in JSONplayer[0].item) {
    if (JSONplayer[0].item[i] == intItem)
      JSONplayer[0].item.splice(i, 1); //remove item from player
  } //if
} //function

function itemCraftIt(intItem, intItem1, intItem2) { //calling function itemCraft returns error!
  //two loops as splice changes array
  itemRemoveFromPlayer(intItem1);
  itemRemoveFromPlayer(intItem2);
  JSONplayer[0].item.push(intItem); //add item to room
  gameActionEnd();
} //function

function itemUse(intItem) {

  console.log("Use " + JSONitem[intItem].name);
  itemRemoveFromPlayer(intItem);
  gameActionEnd();

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function itemCraftCheck() {
  var arrTemp = []; //to return
  var arrItem1 = [];
  var arrItem2 = [];
  for (itemCraft in JSONitem) {
    for (i in JSONplayer[0].item) {
      for (iOne in JSONitem[itemCraft].item1) {
        if (JSONitem[itemCraft].item1[iOne] == JSONplayer[0].item[i]) {
          arrItem1.push([itemCraft, JSONplayer[0].item[i]]);
        } //if
      } //for
    } //for
    for (i in JSONplayer[0].item) {
      for (iTwo in JSONitem[itemCraft].item2) {
        if (JSONitem[itemCraft].item2[iTwo] == JSONplayer[0].item[i]) {
          arrItem2.push([itemCraft, JSONplayer[0].item[i]]);
        } //if
      } //for
    } //for
  } //for
  for (i in arrItem1) {
    for (ii in arrItem2) {
      if (arrItem1[i][0] == arrItem2[ii][0])
        arrTemp.push([arrItem1[i][0], arrItem1[i][1], arrItem2[ii][1]]);
    } //for
  } //for
  return arrTemp;
} //function

function itemExistsInPlayer(intItem) {
  var boolTemp = false;
  for (i in JSONplayer[0].item) {
    if (JSONplayer[0].item[i] == intItem)
      boolTemp = true;
  } //for
  return boolTemp;
} //function
