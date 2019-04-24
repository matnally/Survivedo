
function defDragDrop() {
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
      console.log("dropped somewhere");
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
        console.log("Can't used");
    } //drop
  });
} //function

function defUpdateElement(elemName, strTemp) {
  document.getElementById(elemName).innerHTML = strTemp;
} //function

function defJSONshow(strJSON) { //ADMIN
  console.log(JSON.stringify(window[strJSON]));
} //function
