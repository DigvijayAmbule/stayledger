<?php
// Template Name: calculator
get_header()
?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS V4.0-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/assets/css/calculator.css">
    <title>Fix & Flip</title>
  </head>
  <body class="container">
    <!-- <div class="row">
        <div class="col-2">
            <img src="<?php echo get_template_directory_uri();?>/assets/images/fixflip.jpg">
        </div>
        <div class="col">
            How much will I make on this Fix & Flip?
        </div>
    </div> -->
    <!-- calculator start -->
    <div class="row margin-top">
        <div class="col-7"  style="background: #D0D5DD">
            <div class="main-title">
                How much will I make on this Fix & Flip?
            </div>

            <div class="sub-title">
                Use our calculator to estimate the cost or buying and financial proceeds you coluld earn from the sale.
            </div>
            <form>
                <div class="form-group">
                    <label for="inputAddress" class="col-form-label">Property Address</label>
                    <input type="text" class="form-control form-control-sm" id="inputAddress" placeholder="Enter address">
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <input type="text" class="form-control form-control-sm" placeholder="city" id="inputCity">
                    </div>
                    <div class="form-group col-md-4">
                        <select id="inputState" class="form-control form-control-sm">
                            <option selected>select state</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <input type="text" placeholder="Zipcode" class="form-control form-control-sm" id="inputZip">
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputAddress" class="col-form-label">Property Info (All Optional)</label>
                    <!-- <input type="text" class="form-control form-control-sm" id="inputAddress" placeholder="Enter address"> -->
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <input type="text" class="form-control form-control-sm" placeholder="Property Type" id="inputCity">
                    </div>
                    <div class="form-group col-md-4">
                        <select id="inputState" class="form-control form-control-sm">
                            <option selected>bedrooms</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <input type="text" placeholder="bathrooms" class="form-control form-control-sm" id="inputZip">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-4">
                        <input type="text" class="form-control form-control-sm" placeholder="sq. ft" id="inputCity">
                    </div>
                    <div class="form-group col-md-4">
                        <select id="inputState" class="form-control form-control-sm">
                            <option selected>Lot size</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <input type="text" placeholder="Year built" class="form-control form-control-sm" id="inputZip">
                    </div>
                </div>

                <div class="form-row">
                    <div class="col-md-4" style="border: solid 1px">
                        <label for="inputAddress" class="col-form-label">Property Photo</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1">
                    </div>
                    
                    <div class="col-md-8">
                        <div class="form-row">
                            <div class="form-group col-md-6">    
                                <input type="text" placeholder="Property Type" class="form-control form-control-sm" id="inputZip">
                            </div>
                            <div class="form-group col-md-6">    
                                <input type="text" placeholder="Bedrooms" class="form-control form-control-sm" id="inputZip">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">    
                                <input type="text" placeholder="Bathrooms" class="form-control form-control-sm" id="inputZip">
                            </div>
                            <div class="form-group col-md-6">    
                                <input type="text" placeholder="Sq. ft" class="form-control form-control-sm" id="inputZip">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">    
                                <input type="text" placeholder="Lot size" class="form-control form-control-sm" id="inputZip">
                            </div>
                            <div class="form-group col-md-6">    
                                <input type="text" placeholder="Year built" class="form-control form-control-sm" id="inputZip">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputAddress" class="col-form-label">Hold Time</label>
                    <p>Start date of loan / Payoff date of loan</p>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input type="text" placeholder="Start Date" class="form-control form-control-sm" id="inputZip">
                    </div>
                    <div class="form-group col-md-6"> 
                        <input type="text" placeholder="End Date" class="form-control form-control-sm" id="inputZip">
                    </div>
                    <small id="passwordHelpBlock" class="form-text text-muted">
                    Lorem ipsum dolor sit amet consectetur. Duis varius massa eu donec odio adipiscing id quis penatibus. Lectus nec vitae varius tellus commodo vel praesent. Eget nisi ornare tristique sapien lorem id imperdie.
                    </small>
                </div>
<!-- Purchase costs  -->
                <div class="form-group">
                    <label for="inputAddress" class="col-form-label">Purchase Cost</label>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputAddress" class="col-form-label">Purchase Price</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>

                    <div class="form-group col-md-6"> 
                        <label for="inputAddress" class="col-form-label">Appraisal Fees</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputAddress" class="col-form-label">Inspection / Surveys Fees</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>

                    <div class="form-group col-md-6"> 
                        <label for="inputAddress" class="col-form-label">Closing Costs</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>
                    <small id="passwordHelpBlock" class="form-text text-muted">
                        Lorem ipsum dolor sit amet consectetur. Duis varius massa eu donec odio adipiscing id quis penatibus. Lectus nec vitae varius tellus commodo vel praesent. Eget nisi ornare tristique sapien lorem id imperdie.
                    </small>
                </div>
<!-- Financing -->
                <div class="form-group">
                    <label for="inputAddress" class="col-form-label">Financing</label>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputAddress" class="col-form-label">Loan Amount</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>

                    <div class="form-group col-md-6"> 
                        <label for="inputAddress" class="col-form-label">Loan Origination Costs</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputAddress" class="col-form-label">Interest Rate</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>

                    <!-- <div class="form-group col-md-6"> 
                        <label for="inputAddress" class="col-form-label">Closing Costs</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div> -->
                    <small id="passwordHelpBlock" class="form-text text-muted">
                        Lorem ipsum dolor sit amet consectetur. Duis varius massa eu donec odio adipiscing id quis penatibus. Lectus nec vitae varius tellus commodo vel praesent. Eget nisi ornare tristique sapien lorem id imperdie.
                    </small>
                </div>
<!-- Rehab Costs -->
                <div class="form-group">
                    <label for="inputAddress" class="col-form-label">Rehab Costs</label>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputAddress" class="col-form-label">Materials</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>

                    <div class="form-group col-md-6"> 
                        <label for="inputAddress" class="col-form-label">Contractor / Labour</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>
                    <small id="passwordHelpBlock" class="form-text text-muted">
                        Lorem ipsum dolor sit amet consectetur. Duis varius massa eu donec odio adipiscing id quis penatibus. Lectus nec vitae varius tellus commodo vel praesent. Eget nisi ornare tristique sapien lorem id imperdie.
                    </small>
                </div>
                
<!-- Holding Costs -->
                <div class="form-group">
                    <label for="inputAddress" class="col-form-label">Holding Cost</label>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputAddress" class="col-form-label">Property Taxes</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>

                    <div class="form-group col-md-6"> 
                        <label for="inputAddress" class="col-form-label">Insurance</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputAddress" class="col-form-label">Utilities</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>

                    <div class="form-group col-md-6"> 
                        <label for="inputAddress" class="col-form-label">Others</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>
                    <small id="passwordHelpBlock" class="form-text text-muted">
                        Lorem ipsum dolor sit amet consectetur. Duis varius massa eu donec odio adipiscing id quis penatibus. Lectus nec vitae varius tellus commodo vel praesent. Eget nisi ornare tristique sapien lorem id imperdie.
                    </small>
                </div>
<!-- Seling Costs -->
                <div class="form-group">
                    <label for="inputAddress" class="col-form-label">Selling Costs</label>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputAddress" class="col-form-label">After Repair Value (ARV)</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>

                    <div class="form-group col-md-6"> 
                        <label for="inputAddress" class="col-form-label">Commision to Agents</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputAddress" class="col-form-label">Closing Costs</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div>

                    <!-- <div class="form-group col-md-6"> 
                        <label for="inputAddress" class="col-form-label">Closing Costs</label>
                        <input type="text" placeholder="$0000" class="form-control form-control-sm" id="inputZip">
                    </div> -->
                    <small id="passwordHelpBlock" class="form-text text-muted">
                        Lorem ipsum dolor sit amet consectetur. Duis varius massa eu donec odio adipiscing id quis penatibus. Lectus nec vitae varius tellus commodo vel praesent. Eget nisi ornare tristique sapien lorem id imperdie.
                    </small>
                </div>
                <button type="submit" class="btn btn-primary">Continue</button>
            </form>
        </div>
        <div class="col-5">
            <div class="card">
                <h6>Gross Profit</h6>
                <div class="card-body">
                    <h5 class="card-title card-text-center">$00000</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Save & Share deal</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>

<?php
get_footer()
?>
