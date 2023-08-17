<?php /* Template Name: PageWithoutSidebar */ ?>
<?php get_header(); ?>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"> -->
<main id="main" class="site-main" role="main">
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>STAYLEDGER: Your Financial Wizards for Short & Mid-Term Rental Success!</h1>
                <p>
                    Are you a short or mid-term rental owner or property manager burdened with the never-ending financial tasks and paperwork?
                </p>
            </div>
            <div class="col">
                <?php
                $uri = get_template_directory_uri() . '/assets/images/o1aqr1k28mnxq2lh.png';
                echo '<img src="' . $uri . '" alt="">'; ?>
            </div>
        </div>
        
        <div class="row">
            <div class="col-6">
                <?php $uri = get_template_directory_uri() . '/assets/images/features.svg';?>
                <img style="verticle-align:center;" src= "<?php echo $uri?>">
            </div>

            <div class="col-6">
                <ul style="list-style:none">
                    <li>
                        <i class="fa fa-circle fa-stack-2x icon-background"></i>
                        <i class="fa fa-usd fa-stack-1x fa-stack fa-2x" aria-hidden="true"></i>
                        <h2 class="feature-header">Income Tracking Mastery:</h2>
                        <p>Say goodbye to the hassle of manually monitoring rental income. We'll implement robust systems to track your earnings with precision, ensuring no penny goes unnoticed.</p>
                    </li>

                    <li>
                        <i class="fa fa-circle fa-stack-2x icon-background"></i>
                        <i class="fa fa-bar-chart fa-stack-1x fa-stack fa-2x" aria-hidden="true"></i>
                        <h2 class="feature-header">Expense Management Magic:</h2>
                        <p>From maintenance and repairs to supplies and utilities, we'll handle the tracking and categorization of your expenses, giving you a crystal-clear view of your financial health.</p>
                    </li>

                    <li>
                        <!-- <span class="fa-stack fa-2x"> -->
                        <i class="fa fa-circle fa-stack-2x icon-background"></i>
                        <i class="fa fa-paperclip fa-stack-1x fa-stack fa-2x" aria-hidden="true"></i>
                        <!-- </span> -->
                        <h2 class="feature-header">Tax Compliance Expertise:</h2>
                        <p>Navigating the intricate world of short-term rental taxes can be overwhelming. Fear not! STR-Keepers will ensure you're on top of your tax obligations, from calculating occupancy taxes to reporting rental income accurately.</p>
                    </li>

                    <li>
                        <!-- <span class="fa-stack fa-2x"> -->
                        <i class="fa fa-circle fa-stack-2x icon-background"></i>
                        <i class="fa fa-search-plus fa-stack-1x fa-stack fa-2x" aria-hidden="true"></i>
                        <!-- </span> -->
                        <h2 class="feature-header">Financial Reports at Your Fingertips:</h2>
                        <p>Access comprehensive financial reports effortlessly. We'll provide you with detailed statements, summaries, and insights, empowering you to make informed decisions and drive your business forward.</p>
                    </li>

                    <li>
                        <!-- <span class="fa-stack fa-2x"> -->
                        <i class="fa fa-circle fa-stack-2x icon-background"></i>
                        <i class="fa fa-shield fa-stack-1x fa-stack fa-2x" aria-hidden="true"></i>
                        <!-- </span> -->
                        <h2 class="feature-header">Data Security and Confidentiality:</h2>
                        <p>We treat your financial information with the utmost care. Rest assured that your data is secure and handled confidentially, aligning with industry standards and best practices.</p>
                    </li>
                </ul>
            </div>
        </div>
       
        <section>
            <div style="text-align:center">
                <h1>STAYLEDGER</h1>
                <p>See what your clients say about us</p>
            </div>
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
            <div style="text-align:center">
                <h2>Simple, Transparent Pricing.</h2>
                <p>Always know what you`ll Pay</p>
            </div>
            <div class="row">
                <div class="col-4">
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
                            <br>
                            <div class="d-grid gap-2">
                                <a href="#" class="btn btn-outline-dark">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
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
                <div class="col-4">
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

        <section style="background:#EEEDE8;border-radius:5px;padding: 10px 10px 10px 10px;margin-bottom:5rem">
            <div style="text-align:center">
                <h1>Not Sure Where to Start? Contact Us</h1>
                <p>Contact us</p>
                <button type="button" style="border:solid 1px;" class="btn"> Contact Us</button>
            </div>
        </section>

    </div>
</main>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<?php get_footer(); ?>