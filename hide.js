;
addEventListener("clic", programHide);

function programHide (e){
  if (e.target.className != 'hide') return;
  var hide = e.target.parentNode;

    for (var i = 2; i < hide.childNodes.length; i++){
        hide.childNodes[i].hidden = true;
    }

//    last.hidden = true;
}
