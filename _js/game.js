
function gameInit() {

gridCreate();

JSONplayer[0].roomCurrent = gridGetRandomPosition();

  var intCurrentGridPositions = gridGetGridPosition(JSONplayer[0].roomCurrent);
      intCurrentGrid = intCurrentGridPositions.intCurrentGrid;
      intCurrentGridPosition = intCurrentGridPositions.intCurrentGridPosition;
  arrGird[intCurrentGrid][intCurrentGridPosition][1] = "visited";

console.log("Random position: " + JSONplayer[0].roomCurrent);
console.log(JSON.stringify(arrGird));


} //function

function gameStart() {

} //function

function gameEnd() {

} //function


// *********** START TURN LOGIC ***********
function gameTurnStart() {

} //function

function gameTurnEnd() {

} //function
// *********** END TURN LOGIC ***********
