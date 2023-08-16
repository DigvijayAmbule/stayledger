import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Propertyaddress from "./components/Propertyaddress";
import Holdingcosts from "./components/Holdingcosts";
import Holdingtime from "./components/Holdingtime";
import Propertyinfo from "./components/Propertyinfo";
import Purchasecost from "./components/Purchasecost";
import Rehabcosts from "./components/Rehabcosts";
import Sellingcost from "./components/Sellingcost";
import Financing from "./components/Financing";
import Calculation from "./components/Calculation";

const Calculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [AppraisalFees, setAppraisalFees] = useState(0);
  const [SurveysFees, setSurveysFees] = useState(0);
  const [ClosingCosts, setClosingCosts] = useState(0);
  const [Materials, setMaterials] = useState(0);
  const [Contractor, setContractor] = useState(0);
  const [AfterRepairValue, setAfterRepairValue] = useState(0);
  const [CommissionToAgents, setCommissionToAgents] = useState(0);
  const [SellingClosingCosts, setSellingClosingCosts] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanOriginationCost, setLoanOriginationCost] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [propertyTaxes, setPropertyTaxes] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [other, setOther] = useState(0);
  const [irr, setIRR] = useState(0);

  const handlePropertyTaxes = (val) => {
    setPropertyTaxes(parseInt(val));
  };

  const handleInsurance = (val) => {
    setInsurance(parseInt(val));
  };

  const handleUtilities = (val) => {
    setUtilities(parseInt(val));
  };

  const handleOther = (val) => {
    setOther(parseInt(val));
  };

  const handleStartDate = (val) => {
    setStartDate(val);
  };

  const handleEndDate = (val) => {
    setEndDate(val);
  };

  const handleLoanAmount = (val) => {
    setLoanAmount(parseInt(val));
  };

  const handleLoanOriginationCost = (val) => {
    setLoanOriginationCost(parseInt(val));
  };

  const handleInterestRate = (val) => {
    setInterestRate(parseInt(val));
  };

  const handleAfterRepairValue = (val) => {
    setAfterRepairValue(parseInt(val));
  };

  const handleCommissionToAgents = (val) => {
    setCommissionToAgents(parseInt(val));
  };

  const handleSellingClosingCosts = (val) => {
    setSellingClosingCosts(parseInt(val));
  };

  const handlePurchasePrice = (val) => {
    setPurchasePrice(parseInt(val));
  };

  const handleAppraisalFees = (val) => {
    setAppraisalFees(parseInt(val));
  };

  const handleSurveysFees = (val) => {
    setSurveysFees(parseInt(val));
  };

  const handleClosingCosts = (val) => {
    setClosingCosts(parseInt(val));
  };

  const handleMaterials = (val) => {
    setMaterials(parseInt(val));
  };

  const handleContractor = (val) => {
    setContractor(parseInt(val));
  };

  const pPrice = purchasePrice;

  const sellingClosingCosts = SellingClosingCosts;
  const LoanAmount = loanAmount;
  const InterestRate = interestRate;
  const FinalPurchasecost =
    loanAmount * (loanOriginationCost / 100) +
    (ClosingCosts / 100) * purchasePrice +
    SurveysFees +
    AppraisalFees;
  // Appraisel+Inspecton+(Loan origination costs*Loan ammount)+(Closing costs*Purchase price)

  const diffTime = Math.abs(endDate - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const InterestPayments =
    LoanAmount * ((diffDays + 1) / 365) * (InterestRate / 100);
  const finalHoldingCost =
    InterestPayments + propertyTaxes + insurance + utilities + other;
  const finalCommissionToAgents = AfterRepairValue * (CommissionToAgents / 100);
  const finalClosingCosts = AfterRepairValue * (sellingClosingCosts / 100);
  const finalSellingCost = finalCommissionToAgents + finalClosingCosts;
  const finalRehabCost = Materials + Contractor;
  const finalTotalExpenses =
    FinalPurchasecost + finalRehabCost + finalHoldingCost + finalSellingCost;
  const finalProfit = AfterRepairValue - purchasePrice - finalTotalExpenses;
  const Out_Of_Pocket_Costs =
    pPrice + FinalPurchasecost + finalRehabCost + finalHoldingCost - loanAmount;
  const ROI =
    (Out_Of_Pocket_Costs + finalProfit - Out_Of_Pocket_Costs) /
    Out_Of_Pocket_Costs;
  const annualROI = ROI / ((endDate - startDate + 1) / 365);

  function calculateIRR(startDate, endDate, totalCost, purchaseCost) {
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    const timeDiff = Math.ceil((endDate - startDate) / oneDay); // Rounded up to ensure inclusive months

    // Calculate monthly cash flows
    const monthlyCashFlow = totalCost / timeDiff;

    // Initial guess for IRR (you can adjust this as needed)
    let guess = 0.1;

    // Define a function to calculate the net present value (NPV)
    function calculateNPV(rate) {
      let npv = -purchaseCost;
      for (let i = 1; i <= timeDiff; i++) {
        npv += monthlyCashFlow / Math.pow(1 + rate, i / 30.44); // Convert days to months
      }
      return npv;
    }

    // Define the derivative of the NPV function for the Newton-Raphson method
    function calculateDerivative(rate) {
      let derivative = 0;
      for (let i = 1; i <= timeDiff; i++) {
        derivative -=
          (monthlyCashFlow * i) / (30.44 * Math.pow(1 + rate, i / 30.44 + 1)); // Convert days to months
      }
      return derivative;
    }

    // Use the Newton-Raphson method to find IRR
    const maxIterations = 100;
    const tolerance = 0.00001;
    for (let i = 0; i < maxIterations; i++) {
      const npv = calculateNPV(guess);
      const derivative = calculateDerivative(guess);
      const nextGuess = guess - npv / derivative;
      console.log("NPV" + npv);
      console.log("derivative" + derivative);
      console.log("nextGuess" + nextGuess);
      if (Math.abs(nextGuess - guess) < tolerance) {
        return nextGuess * 100; // Convert IRR to percentage
      }

      guess = nextGuess;
    }

    // If convergence was not reached, return null
    return null;
  }
  useEffect(() => {
    const irr = calculateIRR(
      startDate,
      endDate,
      finalSellingCost + finalRehabCost,
      FinalPurchasecost
    );
    setIRR(irr);
  }, [startDate, endDate, finalSellingCost, finalRehabCost, FinalPurchasecost]);

  console.log(irr + "irr");

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header></Header>
          <Propertyaddress></Propertyaddress>
          <Propertyinfo></Propertyinfo>
          <Holdingtime
            onStartDateChange={handleStartDate}
            onEndDateChange={handleEndDate}
          ></Holdingtime>
          <Purchasecost
            onPurchasePriceChange={handlePurchasePrice}
            onAppraisalFeesChange={handleAppraisalFees}
            onSurveysFeesChange={handleSurveysFees}
            onClosingCostsChange={handleClosingCosts}
          ></Purchasecost>
          <Financing
            onLoanAmountChange={handleLoanAmount}
            onLoanOriginationCostChange={handleLoanOriginationCost}
            onInterestRateChange={handleInterestRate}
          ></Financing>
          <Rehabcosts
            onMaterialsChange={handleContractor}
            onContractorChange={handleMaterials}
          ></Rehabcosts>
          <Holdingcosts
            onPropertyTaxesChange={handlePropertyTaxes}
            onInsuranceChange={handleInsurance}
            onUtilitiesChange={handleUtilities}
            onOtherChange={handleOther}
          ></Holdingcosts>
          <Sellingcost
            onAfterRepairValueChange={handleAfterRepairValue}
            onCommissionToAgentsChange={handleCommissionToAgents}
            onSellingClosingCostsChange={handleSellingClosingCosts}
          ></Sellingcost>
        </div>
        <div className="col">
          <Calculation
            finalProfit={finalProfit}
            pPrice={pPrice}
            FinalPurchasecost={FinalPurchasecost}
            finalRehabCost={finalRehabCost}
            finalHoldingCost={finalHoldingCost}
            loanAmount={loanAmount}
            Out_Of_Pocket_Costs={Out_Of_Pocket_Costs}
            ROI={ROI}
            annualROI={annualROI}
            IRR={irr}
          ></Calculation>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
