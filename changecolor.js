AFRAME.registerComponent('change-color', {
    init: function(){
      setTimeout(setGrabbable,5000);
    }     
           
  });

function setGrabbable(){
  var proxymatriz = document.querySelectorAll('a-sphere');
      for(let i= 0;i<proxymatriz.length;i++){
        proxymatriz[i].setAttribute('grabbable','');
        proxymatriz[i].setAttribute('hoverable','');
        proxymatriz[i].setAttribute('stretchable','');
        proxymatriz[i].setAttribute('draggable','');
        proxymatriz[i].setAttribute('droppable','');
      }
}