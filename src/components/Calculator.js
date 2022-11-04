import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  const { total, next, operation } = state;

  return (
    <section className="calculator-container">
      <div className="result-screen">
        {total}
        {operation}
        {next}
      </div>
      <div className="calculator-keyboard">
        <button type="button" className="button" onClick={handleClick}>AC</button>
        <button type="button" className="button" onClick={handleClick}>+/-</button>
        <button type="button" className="button" onClick={handleClick}>%</button>
        <button type="button" className="button orange" onClick={handleClick}>÷</button>
        <button type="button" className="button" onClick={handleClick}>7</button>
        <button type="button" className="button" onClick={handleClick}>8</button>
        <button type="button" className="button" onClick={handleClick}>9</button>
        <button type="button" className="button orange" onClick={handleClick}>x</button>
        <button type="button" className="button" onClick={handleClick}>4</button>
        <button type="button" className="button" onClick={handleClick}>5</button>
        <button type="button" className="button" onClick={handleClick}>6</button>
        <button type="button" className="button orange" onClick={handleClick}>-</button>
        <button type="button" className="button" onClick={handleClick}>1</button>
        <button type="button" className="button" onClick={handleClick}>2</button>
        <button type="button" className="button" onClick={handleClick}>3</button>
        <button type="button" className="button orange" onClick={handleClick}>+</button>
        <button type="button" className="button zero" onClick={handleClick}>0</button>
        <button type="button" className="button" onClick={handleClick}>.</button>
        <button type="button" className="button orange" onClick={handleClick}>=</button>
      </div>
    </section>
  );
};

export default Calculator;
