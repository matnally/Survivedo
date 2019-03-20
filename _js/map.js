
function mapCreate() {

    var arrDirection = ["N","E","S","W"];
    var strDirection = "";
        strDirection = arrDirection[Math.floor(Math.random() * Math.floor(arrDirection.length))];

    var intCurrentGridPositions =[];

    var intRoomsToCreate = 5;


for (var i=0;i<intRoomsToCreate;i++) {


  do {
    strDirection = arrDirection[Math.floor(Math.random() * Math.floor(arrDirection.length))];

//     intCurrentGridPositions = gridGetGridPosition(gridGetPotentialMove(strDirection));
//         intCurrentGrid = intCurrentGridPositions.intCurrentGrid;
//         intCurrentGridPosition = intCurrentGridPositions.intCurrentGridPosition;
//
// console.log("gridGetPotentialMove(strDirection: " + gridGetPotentialMove(strDirection));

  // } while ( (gridCheckIfOffGrid(strDirection)) || (arrGird[intCurrentGrid][intCurrentGridPosition][1] == "visited") ); //can go in direction and grid is not occupied
  } while ( gridCheckIfOffGrid(strDirection) ); //can go in direction and grid is not occupied


intCurrentGridPositions = gridGetGridPosition(gridGetPotentialMove(strDirection));
    intCurrentGrid = intCurrentGridPositions.intCurrentGrid;
    intCurrentGridPosition = intCurrentGridPositions.intCurrentGridPosition;
console.log("visited? " + arrGird[intCurrentGrid][intCurrentGridPosition][1]);

  gridMove(strDirection);

  // intCurrentGridPositions = gridGetGridPosition(JSONplayer[0].roomCurrent);
  //     intCurrentGrid = intCurrentGridPositions.intCurrentGrid;
  //     intCurrentGridPosition = intCurrentGridPositions.intCurrentGridPosition;

  // arrGird[intCurrentGrid][intCurrentGridPosition][1] = "visited";
  console.log(JSON.stringify(arrGird));

} //for

  // console.log(JSON.stringify(arrGird));


} //function














function gridCreate() {
  //create global grid
  arrGird = [
    [[0,null],[1,null],[2,null],[3,null]]
    ,[[4,null],[5,null],[6,null],[7,null]]
    ,[[8,null],[9,null],[10,null],[11,null]]
    ,[[12,null],[13,null],[14,null],[15,null]]
  ];
} //function


function gridGetRandomPosition() {
  return Math.floor(Math.random() * Math.floor(16)); // 0 - 15
} //function


function gridGetPotentialMove(strDirection) {

  var intCurrentGridPositions = gridGetGridPosition(JSONplayer[0].roomCurrent);
      intCurrentGrid = intCurrentGridPositions.intCurrentGrid;
      intCurrentGridPosition = intCurrentGridPositions.intCurrentGridPosition;

  //move
  switch (strDirection) {
    case "N":
      intCurrentGrid--;
    break;
    case "E":
      intCurrentGridPosition++;
    break;
    case "S":
      intCurrentGrid++;
    break;
    case "W":
      intCurrentGridPosition--;
    break;
  } //switch

  return arrGird[intCurrentGrid][intCurrentGridPosition][0];

} //function

function gridMove(strDirection) {

  if (gridCheckIfOffGrid(strDirection) == true) {
    // console.log("Can't move " + strDirection);
  } else {

    var intCurrentGridPositions = gridGetGridPosition(JSONplayer[0].roomCurrent);
        intCurrentGrid = intCurrentGridPositions.intCurrentGrid;
        intCurrentGridPosition = intCurrentGridPositions.intCurrentGridPosition;

    //move
    switch (strDirection) {
      case "N":
        intCurrentGrid--;
      break;
      case "E":
        intCurrentGridPosition++;
      break;
      case "S":
        intCurrentGrid++;
      break;
      case "W":
        intCurrentGridPosition--;
      break;
    } //switch
    JSONplayer[0].roomCurrent = arrGird[intCurrentGrid][intCurrentGridPosition][0];
    arrGird[intCurrentGrid][intCurrentGridPosition][1] = "visited";
    console.log("You went "+strDirection+" to room " + JSONplayer[0].roomCurrent);

  } //if

} //function

function gridGetGridPosition(intRoomCurrent) {
  //find grid position
  var intCurrentGrid = 0;
  var intCurrentGridPosition = 0;
  for (g in arrGird) {
    for (gs in arrGird[g]) {
      if (arrGird[g][gs][0] == intRoomCurrent) {
        intCurrentGrid = g;
        intCurrentGridPosition = gs;
      } //if
    } //for
  } //for
  return {
    "intCurrentGrid": parseInt(intCurrentGrid)
    ,"intCurrentGridPosition": parseInt(intCurrentGridPosition)
  }
} //function

function gridCheckIfOffGrid(strDirection) {
  //check if can move to the direction

  var intCurrentGridPositions = gridGetGridPosition(JSONplayer[0].roomCurrent);
      intCurrentGrid = intCurrentGridPositions.intCurrentGrid;
      intCurrentGridPosition = intCurrentGridPositions.intCurrentGridPosition;

  var boolTemp = false;
  switch (strDirection) {
    case "N":
      if ((intCurrentGrid - 1) < 0) { // console.log("Gone too far NORTH");
        boolTemp = true;
      } //if
    break;
    case "E":
      if ((intCurrentGridPosition + 1) >= arrGird[intCurrentGrid].length) { // console.log("Gone too far EAST");
        boolTemp = true;
      } //if
    break;
    case "S":
      if ((intCurrentGrid + 1) > (arrGird.length-1)) { // console.log("Gone too far SOUTH");
        boolTemp = true;
      } //if
    break;
    case "W":
      if ((intCurrentGridPosition - 1) < 0) { // console.log("Gone too far WEST");
        boolTemp = true;
      } //if
    break;
    default:
      console.log("Error - gridCheckIfOffGrid: Why not direction?");
  } //switch
  return boolTemp;
} //function


//
//
// function mapCreate() {
//
//   var arrDirection = ["N","E","S","W"];
//   var strDirection = "";
//
//
// //find grid position
// var intCurrentGridPositions = gridGetGridPosition(intRoomCurrent)
//     intCurrentGrid = intCurrentGridPositions.intCurrentGridTemp;
//     intCurrentGridPosition = intCurrentGridPositions.intCurrentGridPositionTemp;
//
//
//   console.log("Current room " + intRoomCurrent);
//
//
//   //get direction to go thats not blocked
//   do {
//     strDirection = arrDirection[Math.floor(Math.random() * Math.floor(arrDirection.length))];
//   } while ( gridCheckIfOffGrid(strDirection) ); //can go in direction and grid is not occupied
//   // } while ( gridCheckIfOffGrid(strDirection) && mapGridNotOccupied(strDirection) ); //can go in direction and grid is not occupied
//   console.log("Went " + strDirection);
//
//
//   //move
//   switch (strDirection) {
//     case "N":
//       intCurrentGrid--;
//     break;
//     case "E":
//       intCurrentGridPosition++;
//     break;
//     case "S":
//       intCurrentGrid++;
//     break;
//     case "W":
//       intCurrentGridPosition--;
//     break;
//   } //switch
//   intRoomCurrent = arrGird[intCurrentGrid][intCurrentGridPosition];
//   console.log("You are now in room " + intRoomCurrent);
//
//
//
// // JSONmap[intRoomCurrent][1] = intRoomCurrent;
// // console.log(JSON.stringify(JSONmap));
//
//
// } //function



// function mapGridNotOccupied(strDirection) {
//     //check if grid not already allocated a room
//     var boolTemp = false;
//     var intTemp = 0;
//     switch (strDirection) {
//       case "N":
//         intCurrentGridTemp = intCurrentGrid - 1;
//       break;
//       case "E":
//         intCurrentGridPositionTemp = intCurrentGridPosition + 1;
//       break;
//       case "S":
//         intCurrentGridTemp = intCurrentGrid + 1;
//       break;
//       case "W":
//         intCurrentGridPositionTemp = intCurrentGridPosition - 1;
//       break;
//       default:
//         console.log("Error - mapGridNotOccupied: Why not direction?");
//     } //switch
//
// console.log("Potencial move to room" + arrGird[intCurrentGridTemp][intCurrentGridPositionTemp]);
//
// // JSONmap[]
//
//
//     return boolTemp;
// } //function
