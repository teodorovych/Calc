;
function run() {
  var name = event.target.name;
  var elem = document.getElementById([name]);
  var ico = event.target;
  elem.hidden = !elem.hidden;
  ico.hidden = !ico.hidden;
};

function close() {
  var name = event.target.Id;
 // var elem = event.target.parentNode;
 // var ico = document.querySelector([name]);
//  elem.hidden = !elem.hidden;
  //ico.hidden = !ico.hidden;
}
;
