
function defGetArrayPositionFromID(intID, JSONtoUse) {
  var intTemp = 0;
  var JSONtemp = window[JSONtoUse];
  for (r in JSONtemp) {
    if (intID == JSONtemp[r].id)
      intTemp = r;
  } //for
  return intTemp;
}