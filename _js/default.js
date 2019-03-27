
function defGetArrayPositionFromProperty(intToFind, strProperty, JSONtoUse) {
  //TODO: better!
  var intTemp = 0;
  var JSONtemp = window[JSONtoUse];
  for (r in JSONtemp) {
    if (intToFind == JSONtemp[r][strProperty])
      intTemp = r;
  } //for
  return intTemp;
} //function






function defUpdateElement(elemName, strTemp) {
  document.getElementById(elemName).innerHTML = strTemp;
} //function


function defGetAllValuesByProperty(JSONtoUse, strProperty) {
  var arrTemp = [];
  for (p in JSONtoUse) {
    arrTemp.push(JSONtoUse[p][strProperty]);
  } //for
  return arrTemp;
} //function


function defJSONshow(strJSON) { //ADMIN
  console.log(JSON.stringify(window[strJSON]));
} //function
