;
addEventListener("click", programHide);

function programHide (e){
  if (e.target.className != 'hide') return;

  var hide = e.target.parentElement;

  for (var i = 2; i < hide.children.length; i++){
    hide.children[i].hidden = !hide.children[i].hidden;
  }
}
;