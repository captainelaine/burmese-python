// This is the script for the whole website
// This is the function to adjust every pages' sizes to fit the window
var homewidth = window.innerWidth;
var homeheight = window.innerHeight;

function resize(x) {
  document.getElementById(x).style.height = homeheight + "px";
  document.getElementById(x).style.width = homewidth + "px";
};
 resize("homepage");

 window.onresize = function() {
   resize("homepage");

 };

 $("#animated").bind("inview",function(event,visible,visiblePartX, visiblePartY){
   if(visible) {
     $(this).find(".countednumber").each(function(){
       var $this = $(this);
       $({ Counter: 0}).animate({Counter: $this.text()},{
         duration:2000,
         easing:"swing",
         step: function(){
           $this.text(Math.ceil(this.Counter));
         }
       });
     });
       $(this).unbind("inview");
   }
 });
