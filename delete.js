
function mapCreate2() {

  var arrTempRoom = [];
  var intRandomRoom = 0;

  //get all room ids
  for (r in JSONroom) {
    arrTempRoom.push(JSONroom[r].id);
  } //for

  //create JSON
  // var intMapRoomsToCreate = JSONroom.length;
  var intMapRoomsToCreate = 24;
  for (var i=0;i<intMapRoomsToCreate;i++) {
    JSONmap.push([i+1,null]);
  } //for
  // console.log("JSONmap: " + JSON.stringify(JSONmap));

  do {

    intRandomRoom = Math.floor(Math.random() * arrTempRoom.length); //get random room
    // console.log("Chosen room: " + arrTempRoom[intRandomRoom]);
    // console.log("Chosen room name: " + JSONroom[defGetArrayPositionFromID(arrTempRoom[intRandomRoom], "JSONroom")].name);

    do { //get random map room that doesn't have a room allocated
      intRandomRoomMap = Math.floor((Math.random() * JSONmap.length)); //get random room
    } while (JSONmap[intRandomRoomMap][1] != null);
    JSONmap[intRandomRoomMap][1] = JSONroom[defGetArrayPositionFromID(arrTempRoom[intRandomRoom], "JSONroom")].name;

    arrTempRoom.splice((intRandomRoom), 1); //remove random room from temp array

  } while (arrTempRoom.length > 0);


  console.log(JSON.stringify(JSONmap));


} //function
