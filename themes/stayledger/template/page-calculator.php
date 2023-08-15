<?php

/**
 * Template Name: React Template
 */

get_header();
?>

<main id="site-content" role="main">
    <article class="post-2 page type-page status-publish hentry">
        <?php get_template_part('template-parts/entry-header'); ?>

        <div class="entry-content">
            <!-- This is where the React content will be rendered -->
            <div id="root"></div>
        </div>
    </article>
</main>

<?php
get_footer();
?>