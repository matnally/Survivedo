
function hunterMove() {
  if (Math.floor(Math.random() * Math.floor(2)) == 1) { //choose if move or not
    var strDirection = "";
    var intGridPositionsCurrent = [];
    var intGridRowCurrent = 0;
    var intGridColumnCurrent = 0;
    do { //check if room present in direction on grid
      do { //check if can go in direction on grid
        strDirection = mapDirectionGetRandom();
      } while (gridCheckIfOffGrid(strDirection, JSONhunter[0].gridPositionCurrent) == true);
      intGridPositionsCurrent = gridGetGridPositionsFromGridPosition(mapMovePotential(strDirection, JSONhunter[0].gridPositionCurrent));
        intGridRowCurrent = intGridPositionsCurrent.intGridRowCurrent;
        intGridColumnCurrent = intGridPositionsCurrent.intGridColumnCurrent;
    } while (arrGird[intGridRowCurrent][intGridColumnCurrent][1] == null);
    JSONhunter[0].gridPositionCurrent = mapMove(strDirection, JSONhunter[0].gridPositionCurrent);
  } //if
} //function

function hunterCheckIfNear() {
  var intGridPositionsCurrent = [];
  var intGridRowCurrent = 0;
  var intGridColumnCurrent = 0;
  if (JSONplayer[0].gridPositionCurrent == JSONhunter[0].gridPositionCurrent) {
    alert("SAME ROOM");
  } else {
    for (d in arrDirection) {
      if (!gridCheckIfOffGrid(arrDirection[d], JSONplayer[0].gridPositionCurrent)) {
        //two rooms away
        intGridPositionsCurrent = gridGetGridPositionsFromGridPosition(mapMovePotential(arrDirection[d], JSONplayer[0].gridPositionCurrent));
          intGridRowCurrent = intGridPositionsCurrent.intGridRowCurrent;
          intGridColumnCurrent = intGridPositionsCurrent.intGridColumnCurrent;
        if (JSONhunter[0].gridPositionCurrent == mapMove(arrDirection[d], arrGird[intGridRowCurrent][intGridColumnCurrent][0]))
          console.log("Hunter near!");
        //one rooms away
        intGridPositionsCurrent = gridGetGridPositionsFromGridPosition(JSONplayer[0].gridPositionCurrent);
          intGridRowCurrent = intGridPositionsCurrent.intGridRowCurrent;
          intGridColumnCurrent = intGridPositionsCurrent.intGridColumnCurrent;
        if (JSONhunter[0].gridPositionCurrent == mapMove(arrDirection[d], arrGird[intGridRowCurrent][intGridColumnCurrent][0]))
          console.log("Hunter nearer!");
      } //if
    } //for
  } //if
} //function
