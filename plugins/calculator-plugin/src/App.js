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
  const [FinalPurchasecost, setFinalPurchasecost] = useState(0);

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
  // Appraisel+Inspecton+(Loan origination costs*Loan ammount)+(Closing costs*Purchase price)

  useEffect(() => {
    setFinalPurchasecost(
      loanAmount * (loanOriginationCost / 100) +
        (ClosingCosts / 100) * purchasePrice +
        SurveysFees +
        AppraisalFees
    );
  }, [
    loanAmount,
    loanOriginationCost,
    purchasePrice,
    ClosingCosts,
    SurveysFees,
    AppraisalFees,
  ]);

  let diffTime = Math.abs(endDate - startDate);
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
  const ROI = (finalProfit / Out_Of_Pocket_Costs) * 100;
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
  const timeDiff = Math.ceil((endDate - startDate) / oneDay); // Rounded up to ensure inclusive months
  const annualROI = ROI / (timeDiff / 365);

  // IRR Functions and calculations

  function generateDateArray(startDate, endDate) {
    const datesArray = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      datesArray.push(currentDate.toISOString().substring(0, 10));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return datesArray;
  }

  // Example usage

  const dates = generateDateArray(startDate, endDate);

  function calculateCashflow(
    pPrice,
    FinalPurchasecost,
    finalRehabCost,
    finalHoldingCost,
    finalSellingCost,
    AfterRepairValue,
    loanAmount,
    dates
  ) {
    const pCost = pPrice + FinalPurchasecost - loanAmount;
    const months = dates.length - 1; //days
    const rCost = finalRehabCost / months;
    const hCost = finalHoldingCost / months;
    const selling = AfterRepairValue - finalSellingCost - loanAmount;

    const cashFlow = [];
    cashFlow.push(-(pCost + rCost + hCost));
    for (let index = 1; index < months; index++) {
      cashFlow.push(-(rCost + hCost));
    }
    cashFlow.push(selling);
    return cashFlow;
  }

  const cashFlow = calculateCashflow(
    pPrice,
    FinalPurchasecost,
    finalRehabCost,
    finalHoldingCost,
    finalSellingCost,
    AfterRepairValue,
    loanAmount,
    dates
  );

  // console.log(cashFlow)

  function calculateXIRR(cashflows, dates, guess = 0.1) {
    const MAX_ITERATIONS = dates.length;
    const TOLERANCE = 1e-6;

    function xirrEquation(rate, cashflows, dates) {
      return cashflows.reduce(
        (sum, cf, i) =>
          sum +
          cf /
            Math.pow(
              1 + rate,
              daysBetween(new Date(dates[i]), new Date(dates[0])) / 365
            ),
        0
      );
    }

    function xirrDerivative(rate, cashflows, dates) {
      return cashflows.reduce(
        (sum, cf, i) =>
          sum -
          ((daysBetween(new Date(dates[i]), new Date(dates[0])) / 365) * cf) /
            Math.pow(
              1 + rate,
              daysBetween(new Date(dates[i]), new Date(dates[0])) / 365 + 1
            ),
        0
      );
    }

    function daysBetween(date1, date2) {
      const oneDay = 24 * 60 * 60 * 1000;
      return Math.round(Math.abs((new Date(date1) - new Date(date2)) / oneDay));
    }

    let rate = guess;
    for (let i = 0; i < MAX_ITERATIONS; i++) {
      const f = xirrEquation(rate, cashflows, dates);
      const fPrime = xirrDerivative(rate, cashflows, dates);
      const newRate = rate - f / fPrime;

      if (Math.abs(newRate - rate) < TOLERANCE) {
        return newRate;
      }

      rate = newRate;
    }

    return null; // Failed to converge
  }

  console.log(cashFlow);

  // const xirr = calculateXIRR(cashFlow, dates);

  useEffect(() => {
    const irr = calculateXIRR(cashFlow, dates);
    // const irr = 0;
    setIRR(irr*100);
  }, [
    purchasePrice,
    AppraisalFees,
    SurveysFees,
    ClosingCosts,
    Materials,
    Contractor,
    AfterRepairValue,
    CommissionToAgents,
    SellingClosingCosts,
    loanAmount,
    loanOriginationCost,
    interestRate,
    startDate,
    endDate,
    propertyTaxes,
    insurance,
    utilities,
    other,
  ]);

  console.log(irr + "irr");

  return (
    <div className="container">
      <div className="row ">
        <div
          className="col-7 mr-5 border rounded"
          style={{ background: "rgba(47,43,67,0.1)" }}
        >
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
        <div className="col h-50 border rounded shadow bg-white sticky-top">
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
