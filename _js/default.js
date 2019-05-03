
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
  for(var i = 0, l = JSONtoUse.length; i < l; i++){
    if(carr[JSONtoUse[i][0]] !== true) {
      carr[JSONtoUse[i][0]] = true;
      arrTemp[++j] = JSONtoUse[i];
    } //if
  } //for
  return arrTemp;
} //function
