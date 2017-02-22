var lien = document.getElementsByClassName('lienHaut');

var activation = function(){this.className = 'active';};
var disactive = function(){this.classList.remove('active')};

for(i = 0; i < lien.length;i++){
  lien[i].addEventListener('mouseover', activation);
  lien[i].addEventListener('mouseout', disactive);
};
