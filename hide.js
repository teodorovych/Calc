;
addEventListener("click", programHide);

function programHide (e){
  if (e.target.classList.contains('hide') || !e.target.parentNode.classList.contains('hide')) return;

  var hide = e.target.parentNode;
  while (!hide.classList.contains('Program')){
    hide = hide.parentNode;
  }

  for (var i = 3; i < hide.children.length; i++){
    hide.children[i].hidden = !hide.children[i].hidden;
  }
}
;