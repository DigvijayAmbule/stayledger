<?php /* Template Name: PageWithoutSidebar */ ?>
<?php get_header(); ?>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<main id="main" class="site-main" role="main">
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>STAYLEDGER: Your Financial Wizards for Short & Mid-Term Rental Success!</h1>
                <p>
                    Are you a short or mid-term rental owner or property manager burdened with the never-ending financial tasks and paperwork?
                </p>
                <button class="btn btn-outline-dark" type="submit"><span class="btn-label"><i class="fa fa-phone"></i></span>Contact Us</button>
            </div>
            <div class="col">
                <?php
                $uri = get_template_directory_uri() . '/assets/images/o1aqr1k28mnxq2lh.png';
                echo '<img src="' . $uri . '" alt="">'; ?>


            </div>
        </div>
        <div class="row">
            <div>

                <h1 class="col">How STAYLEDGER Will Transform Your Financial Landscape:</h1>
            </div>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <div class="card">
                                <!-- <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"> -->
                                <div class="card-body card text-center">
                                    <span>
                                        <i class="fa fa-circle fa-stack-2x icon-background"></i>
                                        <i class="fa fa-usd fa-stack-1x" aria-hidden="true"></i>
                                    </span>
                                    <!-- <h2 class="feature-header">Income Tracking Mastery:</h2> -->
                                    <h4 class="card-title">Income Tracking Mastery:</h4>
                                    <p class="card-text">Say goodbye to the hassle of manually monitoring rental income. We'll implement robust systems to track your earnings with precision, ensuring no penny goes unnoticed.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card">
                                <!-- <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"> -->
                                <div class="card-body card text-center">
                                    <h4 class="card-title">Expense Management Magic:</h4>
                                    <p class="card-text">From maintenance and repairs to supplies and utilities, we'll handle the tracking and categorization of your expenses, giving you a crystal-clear view of your financial health.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card">
                                <!-- <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"> -->
                                <div class="card-body card text-center">
                                    <h4 class="card-title">Tax Compliance Expertise:</h4>
                                    <p class="card-text">Navigating the intricate world of short-term rental taxes can be overwhelming. Fear not! STR-Keepers will ensure you're on top of your tax obligations, from calculating occupancy taxes to reporting rental income accurately.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <div class="card">
                                <!-- <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"> -->
                                <div class="card-body card text-center">
                                    <h4 class="card-title">Financial Reports at Your Fingertips:</h4>
                                    <p class="card-text">Access comprehensive financial reports effortlessly. We'll provide you with detailed statements, summaries, and insights, empowering you to make informed decisions and drive your business forward.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card">
                                <!-- <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"> -->
                                <div class="card-body card text-center">
                                    <h4 class="card-title">Data Security and Confidentiality:</h4>
                                    <p class="card-text">We treat your financial information with the utmost care. Rest assured that your data is secure and handled confidentially, aligning with industry standards and best practices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <!-- <div class="row row-features">
            <div class="col col-features">
                <span class="fa-stack fa-2x">
                    <i class="fa fa-circle fa-stack-2x icon-background"></i>
                    <i class="fa fa-usd fa-stack-1x" aria-hidden="true"></i>
                </span>
                <h2 class="feature-header">Income Tracking Mastery:</h2>
                <p>Say goodbye to the hassle of manually monitoring rental income. We'll implement robust systems to track your earnings with precision, ensuring no penny goes unnoticed.</p>
            </div>
            <div class="col col-features">
                <span class="fa-stack fa-2x">
                    <i class="fa fa-circle fa-stack-2x icon-background"></i>
                    <i class="fa fa-bar-chart fa-stack-1x" aria-hidden="true"></i>
                </span>
                <h2 class="feature-header">Expense Management Magic:</h2>
                <p>From maintenance and repairs to supplies and utilities, we'll handle the tracking and categorization of your expenses, giving you a crystal-clear view of your financial health.</p>
            </div>
            <div class="col col-features">
                <span class="fa-stack fa-2x">
                    <i class="fa fa-circle fa-stack-2x icon-background"></i>
                    <i class="fa fa-paperclip fa-stack-1x" aria-hidden="true"></i>
                </span>
                <h2 class="feature-header">Tax Compliance Expertise:</h2>
                <p>Navigating the intricate world of short-term rental taxes can be overwhelming. Fear not! STR-Keepers will ensure you're on top of your tax obligations, from calculating occupancy taxes to reporting rental income accurately.</p>
            </div>
        </div>
        <div class="row justify-content-center row-features">
            <div class="col col-4 col-features">
                <span class="fa-stack fa-2x">
                    <i class="fa fa-circle fa-stack-2x icon-background"></i>
                    <i class="fa fa-search-plus fa-stack-1x" aria-hidden="true"></i>
                </span>
                <h2 class="feature-header">Financial Reports at Your Fingertips:</h2>
                <p>Access comprehensive financial reports effortlessly. We'll provide you with detailed statements, summaries, and insights, empowering you to make informed decisions and drive your business forward.</p>
            </div>
            <div class="col col-4 col-features">
                <span class="fa-stack fa-2x">
                    <i class="fa fa-circle fa-stack-2x icon-background"></i>
                    <i class="fa fa-shield fa-stack-1x" aria-hidden="true"></i>
                </span>
                <h2 class="feature-header">Data Security and Confidentiality:</h2>
                <p>We treat your financial information with the utmost care. Rest assured that your data is secure and handled confidentially, aligning with industry standards and best practices.</p>
            </div>
        </div> -->
        <section>
            <h1>STAYLEDGER</h1>
            <p>See what your clients say about us</p>
            <div class="row">
                <div class="col text-center">
                    <span class="fa fa-star" style="color: orange;"></span>
                    <span class="fa fa-star" style="color: orange;"></span>
                    <span class="fa fa-star" style="color: orange;"></span>
                    <span class="fa fa-star" style="color: orange;"></span>
                    <span class="fa fa-star" style="color: orange;"></span>
                    <span class="">5 / 5</span>
                    <div class="testimonial__quote">
                        <p class="testimonial__quote__text">The best decision I made for my short-term rental success. Their cost-effective bookkeeping services have saved me money."</p>
                        <div class="testimonial__about weight-text-m">
                            <p>Tim Hundle</p>
                            <p class="testimonial__componey">Grayson Prop</p>
                        </div>
                    </div>
                </div>
                <div class="col text-center">
                    <span class="fa fa-star" style="color: orange;"></span>
                    <span class="fa fa-star" style="color: orange;"></span>
                    <span class="fa fa-star" style="color: orange;"></span>
                    <span class="fa fa-star" style="color: orange;"></span>
                    <span class="fa fa-star" style="color: orange;"></span>
                    <span class="">5 / 5</span>
                    <div class="testimonial__quote">
                        <p class="testimonial__quote__text">It's been a game-changer for my rental business. Their bookkeeping services are not only affordable but also deliver impeccable P&Ls</p>
                        <div class="testimonial__about weight-text-m">
                            <p>Ky Trang Ho</p>
                            <p class="testimonial__componey">Trangho Properties</p>
                        </div>
                    </div>
                </div>
                <div class="col text-center">
                    <span class="fa fa-star" style="color: orange;"></span>
                    <span class="fa fa-star" style="color: orange;"></span>
                    <span class="fa fa-star" style="color: orange;"></span>
                    <span class="fa fa-star" style="color: orange;"></span>
                    <span class="fa fa-star" style="color: orange;"></span>
                    <span class="">5 / 5</span>
                    <div class="testimonial__quote">
                        <p class="testimonial__quote__text">I can't praise enough there effortlessly manage my financial records, ensuring clean books that my CPA appreciates.</p>
                        <div class="testimonial__about weight-text-m">
                            <p>Bill Cook</p>
                            <p class="testimonial__componey">Fonk Rentals</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <h2>Simple, Transparent Pricing.</h2>
            <p>Always know what you`ll Pay</p>
            <div class="row">
                <div class="col">
                    <div class="card text-center pricingTier">
                        <div class="card-body">
                            <h5 class="card-title">Essential Plan</h5>
                            <p class="card-text">Effortless Financial Tracking</p>
                            <div class="pricingTier__price a"><span class="price color-1">$95</span><span class="interval"><span class="intervalSlash">/</span>mo</span></div>
                            <ul class="fa-ul text-start">
                                <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>P&L Statement Preparation</li>
                                <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Income Statement Analysis</li>
                                <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>CPA Bookkeeping Handover</li>
                            </ul>
                            <div class="d-grid gap-2">
                                <a href="#" class="btn btn-outline-dark">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-center pricingTier">
                        <div class="card-body">
                            <h5 class="card-title">Growth Plan</h5>
                            <p class="card-text">Insightful Financial Analysis</p>
                            <div class="pricingTier__price a"><span class="price color-1">$95</span><span class="interval"><span class="intervalSlash">/</span>mo</span></div>
                            <ul class="fa-ul text-start">
                                <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Comprehensive Financial Reports </li>
                                <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Expert Income Analysis</li>
                                <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Timely Book Delivery</li>
                            </ul>
                            <div class="d-grid gap-2">
                                <a href="#" class="btn btn-outline-dark">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-center pricingTier">
                        <div class="card-body">
                            <h5 class="card-title">Premium Plan</h5>
                            <p class="card-text">Strategic Financial Excellence</p>
                            <div class="pricingTier__price a"><span class="price color-1">$95</span><span class="interval"><span class="intervalSlash">/</span>mo</span></div>
                            <ul class="fa-ul text-start">
                                <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Advanced Financial Insights</li>
                                <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>Customized Financial Strategy</li>
                                <li><span class="fa-li"><i class="fa fa-check" aria-hidden="true"></i></span>VIP Support & Consultation</li>
                            </ul>
                            <div class="d-grid gap-2">
                                <a href="#" class="btn btn-outline-dark">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main><!-- .site-main -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<?php get_footer(); ?>