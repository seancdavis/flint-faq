jQuery(document).ready(function($) {
  
  
  function slideOut(ID) {
	$('#rt-faq-' + ID).animate({
		left: '50%',
	}, 500);
  }
  
	function slideIn(ID) {
		$('#rt-faq-' + ID).animate({
			left: '100%',
		}, 500);
  	}
  
  var thisID = '';
  var faqsShowing = 0;
  
  $('.faq-preview').on('click',clickEffect);
  	
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
    		setTimeout(function(){slideOut(newID);},500);
    		thisID = parseFloat( $(this).attr('id').substr(9, $(this).attr('id').length - 9) );
    		faqsShowing = 1;
    	}
    	
    	// scroll
    	$(window).on('scroll',scrollEffect);
    	
    }
    	
    
    function scrollEffect() {
    	
    	//setTimeout(function(){	    	
	    	$('.rt-faq').animate({
	    		left: '100%',
	    	}, 500);	    	
	    	
	   // },250);
	    
	    $(window).off('scroll');
	    
    }
  
  
/*   
    $('.faq-preview').click(function(){
    	var thisID = parseFloat( $(this).attr('id').substr(9, $(this).attr('id').length - 9) );
    	$('.rt-faq').animate({
    		left: '100%',
    	}, 500);
    	$('#rt-faq-' + thisID).animate({
    		left: '50%',
    	}, 500);
    });
    
    $(window).scroll(function(){
    	$('.rt-faq').animate({
    		left: '100%',
    	}, 500);
    });
*/
    
    /*
    var questionCount = 1;
	$('.faq-question').each(function(){
		$(this).attr('id','rt-faq-' + questionCount);
		questionCount++;
	});
	
	$('.faq-question').click(function() {
		
		$('.faq-question').css('clear','none');
		$('.faq-answer').hide();
		
		var thisQuestion = parseFloat( $(this).attr('id').substr(7, $(this).attr('id').length - 7 ) );
		
		$(this).css('clear','both');
		$('#rt-faq-' + (thisQuestion + 1) ).css('clear','both');
		
		$(this).parent().children('.faq-answer').show();
		
		
		//$(this).parent().children('.faq-answer').fadeIn();
		/*
		$(this).animate({
			opacity: 0.25
		}, 500);
		*/
		//$('.faq-question').css('clear','none');
		//$(this).css('clear','both');
	//});
	//function() {
		//$(this).css('clear','none');
		//$(this).parent().children('.faq-answer').fadeOut();
	//});
	
});