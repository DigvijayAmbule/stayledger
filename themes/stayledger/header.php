<?php

/**
 *  header for stayledger
 * 
 */

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <!-- Font Awosome icons -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <!-- Fonts -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/assets/css/header.css">
    <?php wp_head(); ?>

</head>
<body style="background: linear-gradient(180deg, rgba(201,227,255,1) 30%, rgba(201,227,255,1) 10%, rgba(255,255,255,1) 100%);">
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand h1" href="<?php echo site_url() ?>">STAYLEDGER</a>
            <div class=" justify-content-start">
                <?php wp_nav_menu(array(
                    'theme-location'=>'primary-menu',
                    'menu_class'=>'nav')) ?>
            </div>
        </div>
    </nav>
