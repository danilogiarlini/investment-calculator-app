import { useState } from "react";
import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";


function App() {

  const [result, setResult] = useState(null)

  let currentSavings

  const calculateHandler = (currentAmounts, yearlySavings, expectedInterest, investmentDuration) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = currentAmounts; // feel free to change the shape of this input object!
    const yearlyContribution = yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = expectedInterest / 100;
    const duration = investmentDuration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    setResult(yearlyData)
  };

  return (
    <div>

      <Header />

      <UserInput onCalculate={calculateHandler}/>

      { result === null ? <p style={{textAlign: 'center'}}>No result calculated</p> : <ResultsTable data={result} initialInvestment={currentSavings} /> }
      

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

    </div>
  );
}

export default App;
