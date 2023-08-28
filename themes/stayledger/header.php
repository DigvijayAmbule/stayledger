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
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <!-- <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/assets/css/header.css"> -->
        <?php wp_head(); ?>

    </head>
    <body style="font-family: 'Inter', sans-serif;">
        <div>
            <nav class="container navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="d-flex flex-row order-1 order-lg-1">
                        <a href="<?php echo site_url();?>" class="brand-logo navbar-brand">
                            <img class="brand" width="25px" height="25px" src="<?php echo get_template_directory_uri()?>/assets/images/logo.svg">
                            <span class="d-none d-lg-block">STAYLEDGER</span>
                        </a>
                    </div>

                    <div class="d-flex flex-row order-2 order-lg-3">
                        <button type="button" class="btn contact-us"> 
                            <img class="header-contact" width="25px" height="25px" src="<?php echo get_template_directory_uri()?>/assets/images/call.svg">
                            Contact Us
                        </button>

                        <button type="button" class="navbar-toggler hamburger-button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <img width="25px" height="25px" src="<?php echo get_template_directory_uri()?>/assets/images/hambur.svg">    
                            <!-- <span class="navbar-toggler-icon"></span> -->
                        </button>
                    </div>
                    
                    <div class="collapse navbar-collapse order-3 order-lg-2" id="navbarCollapse">
                        <?php wp_nav_menu(array(
                        'theme-location'=>'primary-menu',
                        'container_class' => 'navbar-nav ms-auto',
                        'items_wrap' => '%3$s',
                        'add_li_class'=>'nav-item nav-link nav-menu-bar'
                        )) 
                        ?>
                    </div>
                    
                    
                </div>
            </nav>
        </div>
    </body>
</html>