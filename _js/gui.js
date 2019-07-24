
function guiCreateListeners() {
  //clicks
  $(document).on('click','#butCraft',function(){//do something})
    itemCraftIt(document.getElementById("selPlayerItemCraft").value, document.getElementById("selPlayerItemCraftItemIngredient1").value, document.getElementById("selPlayerItemCraftItemIngredient2").value);
  });
  //onChanges
  $(document).on('change','#selPlayerItemCraft',function(){//do something})
    guiGetHTMLComboBoxItemCraftItemIngredients(document.getElementById("selPlayerItemCraft").value); //passing this.value
  });
} //function

function guiVisualsUpdate() {
  //TEXT
  defUpdateElement("spnTextRoomDesc", guiGetHTMLTextRoom());
  defUpdateElement("divPlayerGetItemButton", guiGetHTMLItemPlayer());
  defUpdateElement("spnTextRoomDescItem", guiGetHTMLTextRoomItem());
  //BUTTONS
  guiButtonDirectionUpdate(JSONplayer[0].gridPositionCurrent);
  defUpdateElement("divRoomGetItemButton", guiGetHTMLItemRoom(gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)));

  if (itemCraftCheck().length != 0) {
    defUpdateElement("divPlayerItemCraft", "<p>"+JSONconfig[0].txtTitleItemToCraft+"</p>" + guiCreateHTMLComboBoxItem(itemCraftCheck(), "selPlayerItemCraft"));
    $("#selPlayerItemCraft").change();
    // defUpdateElement("divPlayerItemCraft", guiGetHTMLComboBoxItemCraft(itemCraftCheck(), "selPlayerItemCraft"));
  } else {
    defUpdateElement("divPlayerItemCraft", "");
    defUpdateElement("divPlayerItemCraftItemIngredients", "");
  } //if

  //MAP
  defUpdateElement("divGrid", guiMapShow(JSONplayer[0].gridPositionCurrent));
  //FUNCTIONALITY
  guiCreateDragDrop(); //need to go here so maps to newly drawn elements
} //function

function guiGetHTMLTextRoom() {
  var strTemp = "";
  strTemp += "<p>";
  strTemp += JSONconfig[0].txtMove + "&nbsp;" + "<strong>" + JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].name + "</strong>";
  strTemp += "<br><br>";
  strTemp += JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].description;
  strTemp += "</p>";
  return strTemp;
} //function

function guiGetHTMLTextRoomItem() {
  var strTemp = "";
  if (JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].item.length > 0) { //if have items
    strTemp += "<p>";
    strTemp += JSONconfig[0].txtRoomItemVisible;
    // for (i in JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].item) {
    //   strTemp += "<br>";
    //   strTemp += JSONconfig[0].txtRoomItemPrefix + JSONitem[JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].item[i]].name + "("+JSONitem[JSONroom[gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent)].item[i]].description+")";
    // } //for
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

function guiGetHTMLItemRoom(intRoom) {
  var strTemp = "";
  for (i in JSONroom[intRoom].item) {
    // strTemp += '<img title="'+JSONitem[JSONroom[intRoom].item[i]].name+'" data-itemID='+JSONroom[intRoom].item[i]+' data-itemLocation="room" class="draggable" src="'+JSONitem[JSONroom[intRoom].item[i]].image+'" alt="'+JSONitem[JSONroom[intRoom].item[i]].name+'">';
    if (JSONitem[JSONroom[intRoom].item[i]].name != "")
      strTemp += '<img title="" data-itemID='+JSONroom[intRoom].item[i]+' data-itemLocation="room" class="draggable" src="'+JSONitem[JSONroom[intRoom].item[i]].image+'" alt="'+JSONitem[JSONroom[intRoom].item[i]].name+'">';
    // strTemp += '&nbsp;';
  } //for
  return strTemp;
} //function

function guiGetHTMLItemPlayer() {
  var strTemp = "";
  for (i in JSONplayer[0].item) {
    strTemp += '<img title="" data-itemID='+JSONplayer[0].item[i]+' data-itemLocation="player" class="draggable" src="'+JSONitem[JSONplayer[0].item[i]].image+'" alt="'+JSONitem[JSONplayer[0].item[i]].name+'">';
  } //for
  return strTemp;
} //function

function guiCreateHTMLComboBoxItem(JSONtoUse, strID) {
  //return html combo for item (to craft or ingredient)
  var strTemp = "";

  if (!defArrayCheckIfUndefined(JSONtoUse, 0, 0))
    JSONtoUse = defArrayRemoveDuplicatesCraft(JSONtoUse); //remove duplicates from crafted
  else
    JSONtoUse = defArrayRemoveDuplicatesIngredients(JSONtoUse); //remove duplicates from ingredients

  JSONtoUse.sort();

  strTemp += "<select id='"+strID+"'>";
  for (i in JSONtoUse) {
    if (!JSONtoUse[i][0]) { //crafted or ingredient
      //ingredient
      strTemp += "<option value='" + JSONtoUse[i] + "'>" + JSONitem[JSONtoUse[i]].name + "</option>";
    } else {
      //to craft
      strTemp += "<option value='" + JSONtoUse[i][0] + "'>" + JSONitem[JSONtoUse[i][0]].quantity + " x " + JSONitem[JSONtoUse[i][0]].name + "</option>";
    } //if
  } //for
  strTemp += "</select>";

  return strTemp;
} //function

function guiGetHTMLComboBoxItemCraftItemIngredients(intItemCraft) {
  defUpdateElement('divPlayerItemCraftItemIngredients', "<p>"+JSONconfig[0].txtTitleItemToCraftIngredients+"</p>" + guiCreateHTMLComboBoxItemCraftItemIngredients(intItemCraft));
} //function

function guiCreateHTMLComboBoxItemCraftItemIngredients(intItemCraft) {
  var arrTemp = [];
  var strTemp = "";
  arrTemp = defGetPlayerItemRelevant(JSONitem[intItemCraft].itemIngredient1);
  strTemp += guiCreateHTMLComboBoxItem(arrTemp, "selPlayerItemCraftItemIngredient1");
  strTemp += "<br>";
  arrTemp = defGetPlayerItemRelevant(JSONitem[intItemCraft].itemIngredient2);
  strTemp += guiCreateHTMLComboBoxItem(arrTemp, "selPlayerItemCraftItemIngredient2");
  strTemp += "<br>";
  strTemp += "<button id='butCraft'>Craft</button>";
  return strTemp;
} //function

function guiCreateDragDrop() {
  //GLOBALS
  $(".draggable").draggable({
    revert: true
    ,snap:'.ui-droppable'
    ,snapMode:'inner'
    ,position: 'center'
  });
  $(".droppable").droppable({
    hoverClass: "droppable-highlight"
  });

  $(".draggable").tooltip({
    track: true
    ,content: function() {
      $("div.ui-helper-hidden-accessible").remove(); //for ui bug
      return JSONitem[$(this).attr("data-itemID")].name + "<br>" + JSONitem[$(this).attr("data-itemID")].description;
    } //content
    ,close: function() {
      $("div.ui-helper-hidden-accessible").remove(); //for ui bug
    } //close
  });

  $("body").droppable({
    drop: function(event, ui) {
      $("div.ui-tooltip").remove(); //for ui bug
      // console.log("dropped somewhere");
    } //drop
  });
  $("#dropPickUp").droppable({
    classes: {
       "ui-droppable-hover": "ui-state-hover"
     },
    drop: function(event, ui) {
      if (ui.draggable.attr("data-itemLocation") == "room") { //only items in the room can be picked up
        itemPickUp(ui.draggable.attr("data-itemID"));
        // console.log("Picked up");
      } else {
        console.log("Can't pick up");
      } //if
    } //drop
  });
  $("#dropDrop").droppable({
    drop: function(event, ui) {
      if (ui.draggable.attr("data-itemLocation") == "player") { //has to be in player's possesion
        itemDrop(ui.draggable.attr("data-itemID"), gridGetRoomFromGridPosition(JSONplayer[0].gridPositionCurrent));
        $("div.ui-tooltip").remove(); //for ui item tooltip bug
        // console.log("Dropped");
      } else
        console.log("Can't drop");
    } //drop
  });
  $("#dropUse").droppable({
    drop: function(event, ui) {
      if (ui.draggable.attr("data-itemLocation") == "player") { //has to be in player's possesion
        itemUse(ui.draggable.attr("data-itemID"));
        // console.log("Used");
      } else
        console.log("Can't use");
    } //drop
  });
} //function

function guiMapShow(intRoom) {

  var strTemp = "";
  strTemp += '<div class="divTable">';
  for (g in arrGird) {
    strTemp += '<div class="divRow">';
    for (gs in arrGird[g]) {

      //VISITED FORMATTING
      if ((arrGird[g][gs][1] != null) && (JSONroom[arrGird[g][gs][1]].visitied == true))
        strTemp += '<div class="divCell visited">';
      else
        strTemp += '<div class="divCell">';

      if (arrGird[g][gs][1] != null) {

        //SHOW HUNTER
        // if (arrGird[g][gs][0] == JSONhunter[0].gridPositionCurrent)
        //     strTemp += "<strong>Hunter</strong>";

        if ((JSONroom[arrGird[g][gs][1]].visitied == true) || (itemExistsInPlayer(0))) { //possesion of the map

          if (arrGird[g][gs][0] == intRoom)
            strTemp += "<strong>" + JSONroom[arrGird[g][gs][1]].name + "</strong>";
          else
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
