import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const keyboard = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  const { total, next, operation } = state;

  return (
    <div className="calculatorPage">
      <div className="calculatorTitle">
        <h1> Let&#39;s do some math! </h1>
      </div>
      <div className="calculatorContainer">
        <div className="resultScreen">
          {total}
          {operation}
          {next}
        </div>
        <div className="calculatorKeyboard">
          {keyboard.map((key) => (
            <button type="button" className="button" key={key} id={key} onClick={handleClick}>{key}</button>))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
