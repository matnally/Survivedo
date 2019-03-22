
function guiButtonDirectionUpdate(intRoom) {
  //enables / disable buttons you can travel
  var intCurrentGridPositions = [];
  var intCurrentGridRow = 0;
  var intCurrentGridColumn = 0;
  var arrDirection = ["N","E","S","W"];
  for (var i=0;i<arrDirection.length;i++) {
    if (gridCheckIfOffGrid(arrDirection[i], intRoom) == true) {
      document.getElementById("butMapMove" + arrDirection[i]).disabled = true;
    } else {
      document.getElementById("butMapMove" + arrDirection[i]).disabled = false;
      intCurrentGridPositions = gridGetGridPositionFromRoom(mapMovePotential(arrDirection[i], intRoom));
        intCurrentGridRow = intCurrentGridPositions.intCurrentGridRow;
        intCurrentGridColumn = intCurrentGridPositions.intCurrentGridColumn;
      if (arrGird[intCurrentGridRow][intCurrentGridColumn][1] == null) {
        document.getElementById("butMapMove" + arrDirection[i]).disabled = true;
      } //if
    } //if
  } //for
} //function
