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
        <!-- <meta http-equiv="X-UA-Compatible" content="IE-edge"> -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Font Awosome icons -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <!-- Fonts -->
        <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/assets/css/header.css">
        <?php wp_head(); ?>

    </head>
    <body> <!--  style="background: linear-gradient(180deg, rgba(201,227,255,1) 30%, rgba(201,227,255,1) 10%, rgba(255,255,255,1) 100%);"-->
        <div class="m-4 font-fam">
            <nav class="container navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a href="<?php echo site_url();?>" class="navbar-brand">
                    STAYLEDGER
                        <!-- <img src="<?php echo get_template_directory_uri()?>/assets/images/logo.svg" height="40" alt="STAYLEDGER">STAYLEDGER</img> -->
                    </a>
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        
                        <?php wp_nav_menu(array(
                        'theme-location'=>'primary-menu',
                        // 'container' => 'a',
                        'container_class' => 'navbar-nav ms-auto',
                        'items_wrap' => '%3$s',
                        // 'menu'=>'a',
                        // 'menu_id' => 'collapseExample',             // %1$s
                        // 'menu_class' => 'nav-item nav-link', // %2$s .... %3$s = list items.
                        // 'add_li_class' => 'px-3',
                        // 'items_wrap' => '<a class="nav-item nav-link">%3$s</a>'
                        // 'container_class'=>'navbar-nav',
                        // 'menu_id'=>'a',
                        // 'menu_class'=>'nav-item nav-link',
                        'add_li_class'=>'nav-item nav-link rem-ul-col',
                        // 'item_wrap'=>'<div class="nav-item nav-link %2$s" id="%1$s">%3$s</div>'
                        )) 
                        ?>
                        <!-- <a href="#" class="nav-item nav-link">Login</a> -->
                        <!-- <div class="navbar-nav">
                            <a href="#" class="nav-item nav-link active">Home</a>
                            <a href="#" class="nav-item nav-link">Profile</a>
                            <a href="#" class="nav-item nav-link">Messages</a>
                            <a href="#" class="nav-item nav-link disabled" tabindex="-1">Reports</a>
                        </div> -->
                        <!-- <li> -->
                            <button type="button" class="btn contact"> Contact Us</button>
                        <!-- </li> -->
                        <!-- <div class="navbar-nav ms-auto">
                            <a href="#" class="nav-item nav-link">Login</a>
                        </div> -->
                    </div>
                </div>
            </nav>
        </div>
    </body>
</html>
    <!-- <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand h1" href="<?php echo site_url() ?>">STAYLEDGER</a>
            <div class=" justify-content-start">
                <?php wp_nav_menu(array(
                    'theme-location' => 'primary-menu',
                    'menu_class' => 'nav'
                )) ?>
            </div>
        </div>
    </nav> -->
