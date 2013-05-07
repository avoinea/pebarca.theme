jQuery(document).ready(function(){
  window.scrollTo(0,0);
  jQuery("a[rel^='prettyPhoto']").prettyPhoto({
    default_width: 800,
    default_height: 460,
    social_tools: ''
  });

  var resize = function(width){
    if(width < 990){
      jQuery('.copy').hide();
    }else{
      jQuery('.copy').show();
    }
  }

  // Events
  jQuery(window).bind('resize', function(evt, data){
    return resize(jQuery(window).width() || 1280);
  });
  resize(jQuery(window).width() || 1280);

});
