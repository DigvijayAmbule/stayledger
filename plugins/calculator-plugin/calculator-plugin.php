<?php
/*
Plugin Name: Calculator Plugin
Description: A simple calculator page using React.
Version: 1.0
Author: Your Name
*/

function calculator_plugin_enqueue_scripts()
{
    wp_enqueue_script('react', 'https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.development.js', array(), '17.0.2', true);
    wp_enqueue_script('react-dom', 'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.development.js', array('react'), '17.0.2', true);
    wp_enqueue_script('calculator-plugin', plugin_dir_url(__FILE__) . 'dist/main.js', array('react', 'react-dom'), '1.0', true);
}

add_action('wp_enqueue_scripts', 'calculator_plugin_enqueue_scripts');

function calculator_shortcode_output()
{
    ob_start();
?>
    <div id="root"><!-- React Calculator will be rendered here --></div>
<?php
    return ob_get_clean();
}
add_shortcode('react_calculator', 'calculator_shortcode_output');
