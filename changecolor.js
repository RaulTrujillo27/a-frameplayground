AFRAME.registerComponent('change-color', {
    init: function(){
      this.el.addEventListener('click', function(){
            this.setAttribute('material','color', 'red');
            
      })
    }             
  });