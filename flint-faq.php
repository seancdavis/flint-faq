<?php
/*
Plugin Name: Flint FAQ
Plugin URI: http://thepolymathlab.com
Description: Manages frequently asked questions (FAQ) for your site.
Version: 1.0
Author: Sean C. Davis
Author URI: http://thepolymathlab.com
License: GPL2
*/

require_once( plugin_dir_path( __FILE__ ) . 'admin/config.php');
require_once( plugin_dir_path( __FILE__ ) . 'admin/shortcode.php');

add_action('init', 'load_faq_script');	
function load_faq_script() {
	wp_enqueue_script( 'rt-faq', plugins_url( 'js/rt-faq.js', __FILE__ ), array('jquery') );
	wp_enqueue_style( 'rt-faq', plugins_url( 'css/rt-faq.css', __FILE__ ) ); 
}

?>