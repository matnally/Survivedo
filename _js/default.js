
function defUpdateElement(elemName, strTemp) {
  document.getElementById(elemName).innerHTML = strTemp;
} //function

function defJSONshow(strJSON) { //ADMIN
  console.log(JSON.stringify(window[strJSON]));
} //function

function defArrayRemoveDuplicates(JSONtoUse) { //ADMIN
  var arrTemp = [];
  var carr = [];
  var rarr = [];
  var j = -1;
  for (var i = 0, l = JSONtoUse.length; i < l; i++) {
    if (carr[JSONtoUse[i][0]] !== true) {
      carr[JSONtoUse[i][0]] = true;
      arrTemp[++j] = JSONtoUse[i];
    } //if
  } //for
  return arrTemp;
} //function

function defArrayCheckIfUndefined(arrTemp, intIndex1, intIndex2) {
  try { return arrTemp[intIndex1][intIndex2] === undefined; } catch(e) { return true; }
} //function

function defGetPlayerItemRelevant(arrTemp) { //returns arr item ingredients that player possesses
  var arrTempReturn = [];
  for (i in JSONplayer[0].item) {
    for (ii in arrTemp) {
      if (JSONplayer[0].item[i] == arrTemp[ii])
      arrTempReturn.push(arrTemp[ii]);
    } //for
  } //for
  return arrTempReturn;
} //function
