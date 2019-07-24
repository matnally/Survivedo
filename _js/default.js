
//TODO: clean up
function defaultArrayOrder(JSONtoUse) {
  JSONtoUse = JSONtoUse.sort(defaultArrayOrderSort(document.getElementById("selArrayOrderItemKey").value, document.getElementById("selArrayOrderItemOrder").value));
  gameActionEnd();
} //function
function defaultArrayOrderSort(key, order) {
  return function(a, b) {
    if(!JSONitem[a].hasOwnProperty(key) || !JSONitem[b].hasOwnProperty(key)) return 0; // property doesn't exist on either object

    const varA = (typeof JSONitem[a][key] === 'string') ? JSONitem[a][key].toUpperCase() : JSONitem[a][key];
    const varB = (typeof JSONitem[b][key] === 'string') ? JSONitem[b][key].toUpperCase() : JSONitem[b][key];

    let comparison = 0;
    if (varA > varB) comparison = 1;
    else if (varA < varB) comparison = -1;

    return ((order == 'desc') ? (comparison * -1) : comparison);
  }; //return function(a, b)
} //function












function defUpdateElement(elemName, strTemp) {
  document.getElementById(elemName).innerHTML = strTemp;
} //function

function defJSONshow(strJSON) { //ADMIN
  console.log(JSON.stringify(window[strJSON]));
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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}







//TODO: refactor to one function?

function defArrayRemoveDuplicatesCraft(JSONtoUse) {
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

function defArrayRemoveDuplicatesIngredients(JSONtoUse) {
  //TODO: testing!
  var arrTemp = [];
  $.each(JSONtoUse, function(i, el){
      if($.inArray(el, arrTemp) === -1) arrTemp.push(el);
  });
  return arrTemp;
} //function
