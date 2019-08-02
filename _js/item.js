
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

function itemCheckCanPickUp(intItem) {
  var boolTemp = true;
  switch(true) {
    case (JSONitem[intItem].itemInteract):
      boolTemp = false;
    break;
    default:
  } //switch
  return boolTemp;
} //function

function itemPickUp(intItem) {
  if (JSONplayer[0].item.length >= JSONplayer[0].carryLimit) {
    alert("Can't pick up as you have reached your carry limit of " + JSONplayer[0].carryLimit);
  } else {
    if (itemCheckCanPickUp(intItem)) {
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
    } else {
      console.log("Can't pick up this item");
    } //if
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

  var intQuantity = 1;

  if (!itemExistsInArray(JSONplayer[0].itemHowToCraft, intItem)) {
    console.log("you do not know how to craft this item yet!");
  } else {
    //able to craft
    itemRemoveFromPlayer(intitemIngredient1); //two loops as splice changes array
    itemRemoveFromPlayer(intitemIngredient2); //two loops as splice changes array

    if (!defArrayCheckIfUndefined(JSONitem, intItem, "quantity"))
      intQuantity = JSONitem[intItem].quantity;

    for (var a=0;a<intQuantity;a++) {
      JSONplayer[0].item.push(intItem); //add item to player
    } //for
    console.log("Crafted " + JSONitem[intItem].name + " using " + JSONitem[intitemIngredient1].name + " and " + JSONitem[intitemIngredient2].name);
    gameActionEnd();
  } //if

} //function

function itemUse(intItem) {

  var boolDidSomething = false;

  switch(false) {
    case (defArrayCheckIfUndefined(JSONitem, intItem, "itemHowToCraft")):
      //BOOK
      JSONplayer[0].itemHowToCraft.push(JSONitem[intItem].itemHowToCraft);
      console.log("Added knowledge of how to create a " + JSONitem[JSONitem[intItem].itemHowToCraft].name);
      console.log("You discard the book after reading");
      boolDidSomething = true;
    break;
    case (defArrayCheckIfUndefined(JSONitem, intItem, "playerProperty")):
      //ITEM AFFECTS PLAYER IN SOME WAY
      JSONplayer[0][JSONitem[intItem].playerProperty] += JSONitem[intItem].playerPropertyValue;
      console.log("Used " + JSONitem[intItem].name + " affect " + JSONitem[intItem].playerProperty + " by " + JSONitem[intItem].playerPropertyValue);
      boolDidSomething = true;
    break;
    case (defArrayCheckIfUndefined(JSONitem, intItem, "itemUse")):
      //NORMAL USEABLE ITEM
      console.log("useable");
      if ((itemExistsInArray(JSONplayer[0].item, JSONitem[intItem].itemUse)) || (!JSONitem[intItem].itemUse)) {
        console.log("You use " + JSONitem[intItem].name);
        boolDidSomething = true;
      } else {
        console.log("You can't use " + JSONitem[intItem].name + " because you don't have " + JSONitem[JSONitem[intItem].itemUse].name);
      } //if
    break;
    default:
      console.log("You can't use " + JSONitem[intItem].name);
  } //switch

  if (boolDidSomething == true) {
    //something was used in someway, so remove and update
    itemRemoveFromPlayer(intItem);
    gameActionEnd();
  } //if

} //function

function itemInteract(intItem) {
  console.log("You interact with " + JSONitem[intItem].name);
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
        //only push items that you know how to craft
        for (x in arritemIngredient1) {
          if (itemExistsInArray(JSONplayer[0].itemHowToCraft, arritemIngredient1[x][0])) {
            arrTemp.push([parseInt(arritemIngredient1[x][0]), parseInt(arritemIngredient1[i][1]), parseInt(arritemIngredient2[ii][1])]);
          } //if
        } //for
      } //if
    } //for
  } //for
  return arrTemp;
} //function

function itemExistsInArray(JSONtoUse, intItem) {
  var boolTemp = false;
  for (i in JSONtoUse) {
    if (parseInt(JSONtoUse[i]) == parseInt(intItem)) {
      // console.log(JSONtoUse[i] + " is equal to " + parseInt(intItem));
      boolTemp = true;
    } //if
  } //for
  return boolTemp;
} //function
