;
var elem = document.getElementsByClassName('move');
elem.addEventListener("mousedown", dnd_onmousedown);

 // if ( event.target.getAttribute('data-move') != 'move') return;

function dnd_onmousedown(e) {
  //if (!e.target.classList.contains('move')) return;

  var drop = e.target.parentNode;
  var coords = getCoords(drop);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  drop.style.position = 'absolute';
  document.body.appendChild(drop);
  moveAt(e);

  drop.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    drop.style.left = e.pageX - shiftX + 'px';
    drop.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  drop.onmouseup = function() {
    document.onmousemove = null;
    drop.onmouseup = null;
  };

};
