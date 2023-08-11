import { useState } from "react";
import "./UserInput.css";

function UserInput(props) {
  const [currentAmounts, setCurrentAmounts] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    props.onCalculate();
  }

  function resetClickHandler() {
    setCurrentAmounts("");
    setYearlySavings("");
    setExpectedInterest("");
    setInvestmentDuration("");
    console.log("reset");
  }

  function currentAmountsHandler(event) {
    setCurrentAmounts(event.target.value);
    console.log(event.target.value);
  }

  function yearlySavingsHandler(event) {
    setYearlySavings(event.target.value);
    console.log(event.target.value);
  }

  function expectedInterestHandler(event) {
    setExpectedInterest(event.target.value);
    console.log(event.target.value);
  }

  function investmentDurationHandler(event) {
    setInvestmentDuration(event.target.value);
    console.log(event.target.value);
  }

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-amount">Current Amounts ($)</label>
          <input
            onChange={currentAmountsHandler}
            value={currentAmounts}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-saving">Yearly Savings ($)</label>
          <input
            onChange={yearlySavingsHandler}
            value={yearlySavings}
            type="number"
            id="yearly-Savings
    "
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={expectedInterestHandler}
            value={expectedInterest}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={investmentDurationHandler}
            value={investmentDuration}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetClickHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default UserInput;
