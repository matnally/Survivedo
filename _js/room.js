
function roomGetRandomRoom() {
  var g = 0;
  var gs = 0;
  do {
    g = Math.floor(Math.random() * Math.floor(JSONconfig[0].gridCreateRow));
    gs = Math.floor(Math.random() * Math.floor(JSONconfig[0].gridCreateColumn));
  } while (arrGird[g][gs][1] == null); //random grid with a room
  return arrGird[g][gs][0];
} //function
