jQuery(document).ready(function($) {
	var thisID = ''; // used to know which FAQ div is showing
	var faqsShowing = 0; // how many FAQ divs are showing?
	var slideLength = 500; // controls the length of time for the div to slide out 
	$('.faq-preview').on('click',clickEffect);
	$('.rt-faq-hide-me').on('click', function(){slideIn( parseFloat( $(this).parent().attr('id').substr(7, $(this).parent().attr('id').length - 7) ) ) } );
	
	function slideOut(ID) {
		$('#rt-faq-' + ID).animate({
			left: '50%',
		}, slideLength);
	}
	
	function slideIn(ID) {
		$('#rt-faq-' + ID).animate({
			left: '100%',
		}, slideLength);
  	}  
  		
  	function clickEffect() {
    	var newID = parseFloat( $(this).attr('id').substr(9, $(this).attr('id').length - 9) );
    	if( faqsShowing == 0 ) {
    		slideOut(newID);
    		thisID = parseFloat( $(this).attr('id').substr(9, $(this).attr('id').length - 9) );
    		faqsShowing = 1;
    	}
    	else if( newID == thisID ) {
    		slideIn(newID);
    		faqsShowing = 0;
    	}
    	else {
    		slideIn(thisID);
    		setTimeout(function(){slideOut(newID);},slideLength);
    		thisID = parseFloat( $(this).attr('id').substr(9, $(this).attr('id').length - 9) );
    		faqsShowing = 1;
    	}
    	$(window).on('scroll',scrollEffect);    	
    }
    
    function clickHide() {
    	var thisID = parseFloat( $(this).parent().attr('id').substr(7, $(this).parent().attr('id').length - 7) );
		slideIn(thisID);
    }
    
    function scrollEffect() {
		$('.rt-faq').animate({
	    	left: '100%',
		}, slideLength);	    
	    $(window).off('scroll');	    
    }
 
});