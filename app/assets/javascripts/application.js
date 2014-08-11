//= require jquery
//= require jquery_ujs
//= require_tree .


$ (document).ready(function() {
  $('button').on({
    mouseover:function(){
      $(this).css({
        left:(Math.random()*200)+"px",
        top:(Math.random()*200)+"px",
      });
    }
  });
});