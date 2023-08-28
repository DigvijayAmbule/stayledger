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
import calcultorimage from "./assets/images/calculator.svg";

import "./assets/css/style.css";

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
  const [IsInterestRateAmmount, setIsInterestRateAmmount] = useState(0);
  const [IsCommissionToAgentsAmmount, setIsCommissionToAgentsAmmount] =
    useState(0);
  const [IsSellingClosingCostsAmmount, setIsSellingClosingCostsAmmount] =
    useState(0);
  const [IsClosingCostsAmmount, setIsClosingCostsAmmount] = useState(0);

  const handleIsSellingClosingCostsAmmount = (val) => {
    setIsSellingClosingCostsAmmount(parseFloat(val));
  };
  const handleIsCommissionToAgentsAmmount = (val) => {
    setIsCommissionToAgentsAmmount(parseFloat(val));
  };

  const handleIsInterestRateAmmount = (val) => {
    setIsInterestRateAmmount(parseFloat(val));
  };

  const handleIsClosingCostsAmmount = (val) => {
    setIsClosingCostsAmmount(parseFloat(val));
  };

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

  // Appraisel+Inspecton+(Loan origination costs*Loan ammount)+(Closing costs*Purchase price)

  useEffect(() => {
    if (IsClosingCostsAmmount) {
      setFinalPurchasecost(
        loanAmount * (loanOriginationCost / 100) +
          ClosingCosts +
          SurveysFees +
          AppraisalFees
      );
    } else {
      setFinalPurchasecost(
        loanAmount * (loanOriginationCost / 100) +
          (ClosingCosts / 100) * purchasePrice +
          SurveysFees +
          AppraisalFees
      );
    }
  }, [
    loanAmount,
    loanOriginationCost,
    purchasePrice,
    ClosingCosts,
    SurveysFees,
    AppraisalFees,
    IsClosingCostsAmmount,
  ]);
  const [diffDays, setdiffDays] = useState(0);
  useEffect(() => {
    let diffTime = Math.abs(endDate - startDate);
    setdiffDays(Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  }, [endDate, startDate]);

  const [InterestPayments, setInterestPayments] = useState(0);
  useEffect(() => {
    if (IsInterestRateAmmount) {
      setInterestPayments(interestRate);
    } else {
      setInterestPayments(
        loanAmount * ((diffDays + 1) / 365) * (interestRate / 100)
      );
    }
  }, [loanAmount, diffDays, interestRate, IsInterestRateAmmount]);

  const [finalCommissionToAgents, setfinalCommissionToAgents] = useState(0);

  useEffect(() => {
    if (IsCommissionToAgentsAmmount) {
      console.log(CommissionToAgents);
      setfinalCommissionToAgents(CommissionToAgents);
    } else {
      console.log(CommissionToAgents);
      console.log(AfterRepairValue * (CommissionToAgents / 100));
      setfinalCommissionToAgents(AfterRepairValue * (CommissionToAgents / 100));
    }
  }, [AfterRepairValue, CommissionToAgents, IsCommissionToAgentsAmmount]);

  const [finalClosingCosts, setfinalClosingCosts] = useState(0);

  useEffect(() => {
    if (IsSellingClosingCostsAmmount) {
      setfinalClosingCosts(SellingClosingCosts);
    } else {
      setfinalClosingCosts(AfterRepairValue * (SellingClosingCosts / 100));
    }
  }, [AfterRepairValue, SellingClosingCosts, IsSellingClosingCostsAmmount]);

  const [finalHoldingCost, setfinalHoldingCost] = useState(0);
  useEffect(() => {
    setfinalHoldingCost(
      InterestPayments + propertyTaxes + insurance + utilities + other
    );
  }, [InterestPayments, propertyTaxes, insurance, utilities, other]);

  const [finalSellingCost, setfinalSellingCost] = useState(0);
  useEffect(() => {
    setfinalSellingCost(finalCommissionToAgents + finalClosingCosts);
  }, [finalCommissionToAgents, finalClosingCosts]);

  const [finalRehabCost, setfinalRehabCost] = useState(0);
  useEffect(() => {
    setfinalRehabCost(Materials + Contractor);
  }, [Materials, Contractor]);

  const [finalTotalExpenses, setfinalTotalExpenses] = useState(0);
  useEffect(() => {
    setfinalTotalExpenses(
      FinalPurchasecost + finalRehabCost + finalHoldingCost + finalSellingCost
    );
  }, [FinalPurchasecost, finalRehabCost, finalHoldingCost, finalSellingCost]);

  const [finalProfit, setfinalProfit] = useState(0);
  useEffect(() => {
    setfinalProfit(AfterRepairValue - purchasePrice - finalTotalExpenses);
  }, [AfterRepairValue, purchasePrice, finalTotalExpenses]);

  const [Out_Of_Pocket_Costs, setOut_Of_Pocket_Costs] = useState(0);
  useEffect(() => {
    setOut_Of_Pocket_Costs(
      purchasePrice +
        FinalPurchasecost +
        finalRehabCost +
        finalHoldingCost -
        loanAmount
    );
  }, [
    purchasePrice,
    FinalPurchasecost,
    finalRehabCost,
    finalHoldingCost,
    loanAmount,
  ]);

  const [ROI, setROI] = useState(0);
  useEffect(() => {
    setROI((finalProfit / Out_Of_Pocket_Costs) * 100);
  }, [finalProfit, Out_Of_Pocket_Costs]);
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
  const timeDiff = Math.ceil((endDate - startDate) / oneDay); // Rounded up to ensure inclusive months
  const [annualROI, setannualROI] = useState(0);
  useEffect(() => {
    console.log(ROI + "=>ROI");
    console.log(timeDiff + "=>timeDiff");
    setannualROI(ROI / (timeDiff / 365));
  }, [ROI, timeDiff]);

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
  const [dates, setDates] = useState([]);
  useEffect(() => {
    setDates(generateDateArray(startDate, endDate));
  }, [startDate, endDate]);

  // Example usage

  const [cashFlow, setcashFlow] = useState([]);
  useEffect(() => {
    setcashFlow(
      calculateCashflow(
        purchasePrice,
        FinalPurchasecost,
        finalRehabCost,
        finalHoldingCost,
        finalSellingCost,
        AfterRepairValue,
        loanAmount,
        dates
      )
    );
  }, [
    purchasePrice,
    FinalPurchasecost,
    finalRehabCost,
    finalHoldingCost,
    finalSellingCost,
    AfterRepairValue,
    loanAmount,
    dates,
  ]);

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

    const cashFlowArray = [];
    cashFlowArray.push(-(pCost + rCost + hCost));
    for (let index = 1; index < months; index++) {
      cashFlowArray.push(-(rCost + hCost));
    }
    cashFlowArray.push(selling);
    return cashFlowArray;
  }

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

  useEffect(() => {
    // const irr = 0;
    setIRR(calculateXIRR(cashFlow, dates) * 100);
  }, [cashFlow, dates]);

  console.log(irr + "irr");

  return (
    <>
      <div className="header_container"></div>
      <div className="container calculator-container">
        <div className="calculator-header">
          <div className="calculator-img-container">
            <img className="calculator-img" src={calcultorimage} />
          </div>

          <div className="item-1">
            <Header></Header>
          </div>
          <div className="sticky-item item-2">
            <Calculation
              finalProfit={finalProfit}
              pPrice={purchasePrice}
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
          <div className="item-3">
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
              onIsClosingCostsAmmountChange={handleIsClosingCostsAmmount}
            ></Purchasecost>
            <Financing
              onLoanAmountChange={handleLoanAmount}
              onLoanOriginationCostChange={handleLoanOriginationCost}
              onInterestRateChange={handleInterestRate}
              onIsInterestRateAmmountChange={handleIsInterestRateAmmount}
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
              onIsSellingClosingCostsAmmountChange={
                handleIsSellingClosingCostsAmmount
              }
              onIsCommissionToAgentsAmmountChange={
                handleIsCommissionToAgentsAmmount
              }
            ></Sellingcost>
            <div className="calulator-btn col col-md-9 mx-auto mb-2">
              <button
                type="button"
                className="btn w-100 calculator-btn-primary"
              >
                Run Another Scenario
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
