$(function() {
  
  // switch between tile/list veiw on marketing tab
  $( ".switch-view a" ).click(function(event) {
    var a = $( this );
    if ( !a.hasClass("active") ) {
      a.siblings().removeClass("active");
      $("#marketing").find(".marketing-wrapper").toggleClass("doc-list");
      a.addClass("active");  
    }
    event.preventDefault();
  });

  // collapse/expand folders on documents tab
  $( ".doc-list .folder" ).click(function(event) {
    $(this).parent(".box-link").toggleClass("active");
    event.preventDefault();
  });

// activate selected video on videos tab
//  $( ".video-list li" ).click(function(event) {
//    var li = $( this );
//    if ( !li.hasClass("active") ) {
//      $(".video-list").find(".active").removeClass("active").find("a[name]").removeAttr("name");
//      li.addClass(" active").find("a").attr( "name","selectedvideo");  
//    }
//    loadVideo();
//    event.preventDefault();
//  });

  // collapse/expand question on FAQ tab
  $( ".faq-list li" ).click(function(event) {
    $(this).toggleClass("active");
    event.preventDefault();
  });

  //jQuery UI tabs
  $( "#tabs" ).tabs({
    beforeActivate: function( event, ui ) {
      if($(ui.newTab).hasClass('ajax-disable')){
        window.location.href = ui.newTab.context.href;
        return false;
      } 
    }
  });
  $( "#tabs" ).removeClass( "ui-widget-content" );
  $( "#tabs ul" ).removeClass('ui-widget-header');
  $( "#tabs li" ).removeClass( "ui-corner-top" ).removeClass( 'ui-state-default' );
  $( "#tabs .ui-tabs-panel").removeClass( 'ui-corner-bottom' );

});