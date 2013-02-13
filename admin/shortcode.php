<?php

add_shortcode( 'faq', 'the_faq_loop' );

function the_faq_loop( $atts ) {
	
	extract(shortcode_atts(array(
		"category" => ''
	), $atts));
	
	$args = array( 
		'post_type' => 'rt_faq', 
	);
	
	$faq_counter = 1;
	
	$cats =  get_categories();
	
	foreach ($cats as $cat) {
		
		$cat_start = 0;
		
		$this_cat = $cat->cat_name;
		
		$the_query = new WP_Query( $args );
		
		while ( $the_query->have_posts() ) :
		
			$the_query->the_post();			
			
			$cats = get_the_category();
			
			$output = '';
			
			foreach($cats as $cat) {					
				
				if( $cat->cat_name == $this_cat ) {
					
					if( $cat_start == 0 ) { 
					
						$content .= '<h1 class="faq-category">' . $this_cat . '</h1><hr>'; 
						
						$cat_start = 1;
					}
					
					$this_content = get_the_content();
					$this_content = apply_filters('the_content', $this_content);
					
					$content .= '<div class="faq-preview" id="faq-prev-' . $faq_counter . '"><h2>' . get_the_title() . '</h2></div>';
					
					$content .= '<div class="rt-faq" id="rt-faq-' . $faq_counter . '"><h2>' . get_the_title() . '</h2><div class="faq-answer">' . $this_content . '</div></div>';
					
					$faq_counter++;
				}
			}
			
		endwhile;
	}
	
	return $content;
		
}

?>