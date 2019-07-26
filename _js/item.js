
function itemDistributeRoom() {
  var intItem = 0;
  var intItems = 0;
  for (intRoom in JSONroom) {
    intItems = getRandomInt(JSONgame[0].roomItemsMin, JSONgame[0].roomItemsMax); //sets how many per room
    JSONroom[intRoom].item = [];
    for (var a=0;a<intItems;a++) {
      //for every room item (NOT including quantity of item)
      do {
        intItem = getRandomInt(0, JSONitem.length-1); //random item
      } while (JSONitem[intItem].name == ""); //so no blank JSON nodes!
      JSONroom[intRoom].item.push(intItem); //add item to room
      //TODO: quantity | books (only one?)
    } //for
  } //for
} //function

function itemPickUp(intItem) {
  if (JSONplayer[0].item.length >= JSONgame[0].carryLimit) {
    alert("Can't pick up as you have reached your carry limit of " + JSONgame[0].carryLimit);
  } else {
    for (r in JSONroom) {
      if (JSONroom[r].name == JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].name) {
        //same room
        for (i in JSONroom[r].item) {
          if (JSONroom[r].item[i] == intItem) {
            JSONplayer[0].item.push(JSONroom[r].item[i]); //add item to player
            JSONroom[r].item.splice(i, 1); //remove item from room
            break; //for quantities TODO sloppy
          } //if
        } //for
      } //if
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
    if (JSONplayer[0].item[i] == intItem) {
      JSONplayer[0].item.splice(i, 1); //remove item from player
      break; //for quantities
    } //if
  } //for
} //function

function itemCraftIt(intItem, intitemIngredient1, intitemIngredient2) { //calling function itemCraft returns error!

  console.log("intItem: " + intItem);
  if (!itemExistsInArray(JSONplayer[0].itemHowToCraft, intItem)) {
    console.log("you do not know how to craft this item yet!");
  } else {
    //able to craft
    itemRemoveFromPlayer(intitemIngredient1); //two loops as splice changes array
    itemRemoveFromPlayer(intitemIngredient2); //two loops as splice changes array
    for (var a=0;a<JSONitem[intItem].quantity;a++) {
      JSONplayer[0].item.push(intItem); //add item to player
    } //for
    console.log("Crafted " + JSONitem[intItem].name + " using " + JSONitem[intitemIngredient1].name + " and " + JSONitem[intitemIngredient2].name);
    gameActionEnd();
  } //if

} //function











function itemUse(intItem) {

  if (JSONitem[intItem].itemHowToCraft) {
    itemUseHowToBook(intItem); //how to book
  } else {
    itemUseNormal(intItem); //normal item
  } //if

} //function

function itemUseHowToBook(intItem) {
  JSONplayer[0].itemHowToCraft.push(JSONitem[intItem].itemHowToCraft);
  itemRemoveFromPlayer(intItem);
  console.log("Added knowledge of how to create a " + JSONitem[JSONitem[intItem].itemHowToCraft].name);
  console.log("You discard the book after reading");
  gameActionEnd();
} //function

function itemUseNormal(intItem) {

  var boolTemp = false;

  if (!itemExistsInArray(JSONplayer[0].itemHowToCraft, JSONitem[intItem].itemHowToCraft)) {
    console.log("you do not know how to craft this yet!");
  } else {
    //check if they actually use it
    switch(true) {
      case (itemExistsInArray(JSONplayer[0].item, JSONitem[intItem].itemUse) == true):
        console.log("itemExistsInPlayer");
        boolTemp = true;
      break;
      case (JSONitem[intItem].itemUse == true):
        console.log("JSONitem[intItem].itemUse");
        boolTemp = true;
      break;
      case (!JSONitem[intItem].itemUse):
        console.log("!JSONitem[intItem].itemUse");
        boolTemp = true;
      break;
      default:
        console.log("itemUse-switch-default");
    } //switch

    if (boolTemp == true) {
      //able to use
      if ((itemExistsInArray(JSONplayer[0].item, JSONitem[intItem].itemUse)) || (!JSONitem[intItem].itemUse)) {
        console.log("Use " + JSONitem[intItem].name);
        itemRemoveFromPlayer(intItem);
        gameActionEnd();
      } else {
        console.log("You can't use " + JSONitem[intItem].name + " because you don't have " + JSONitem[JSONitem[intItem].itemUse].name);
      } //if
    } //if

  } //if

} //function











//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function itemCraftCheck() {
  var arrTemp = []; //to return
  var arritemIngredient1 = [];
  var arritemIngredient2 = [];
  for (itemCraft in JSONitem) {
    for (i in JSONplayer[0].item) {
      for (iOne in JSONitem[itemCraft].itemIngredient1) {
        if (JSONitem[itemCraft].itemIngredient1[iOne] == JSONplayer[0].item[i]) {
          arritemIngredient1.push([itemCraft, JSONplayer[0].item[i]]);
        } //if
      } //for
    } //for
    for (i in JSONplayer[0].item) {
      for (iTwo in JSONitem[itemCraft].itemIngredient2) {
        if (JSONitem[itemCraft].itemIngredient2[iTwo] == JSONplayer[0].item[i]) {
          arritemIngredient2.push([itemCraft, JSONplayer[0].item[i]]);
        } //if
      } //for
    } //for
  } //for
  for (i in arritemIngredient1) {
    for (ii in arritemIngredient2) {
      if (arritemIngredient1[i][0] == arritemIngredient2[ii][0]) {
        arrTemp.push([parseInt(arritemIngredient1[i][0]), parseInt(arritemIngredient1[i][1]), parseInt(arritemIngredient2[ii][1])]);
      } //if
    } //for
  } //for
  return arrTemp;
} //function

function itemExistsInArray(JSONtoUse, intItem) {
  var boolTemp = false;
  for (i in JSONtoUse) {
    if (JSONtoUse[i] == intItem)
      boolTemp = true;
  } //for
  return boolTemp;
} //function
