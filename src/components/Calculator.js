import React from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => {
      calculate(state, e.target.textContent);
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <section className="calculator-container">
        <h3 className="result-screen">
          {total}
          {operation}
          {next}
        </h3>
        <div className="calculator-keyboard">
          <button type="button" className="button">AC</button>
          <button type="button" className="button">+/-</button>
          <button type="button" className="button">%</button>
          <button type="button" className="button orange">÷</button>
          <button type="button" className="button">7</button>
          <button type="button" className="button">8</button>
          <button type="button" className="button">9</button>
          <button type="button" className="button orange">x</button>
          <button type="button" className="button">4</button>
          <button type="button" className="button">5</button>
          <button type="button" className="button">6</button>
          <button type="button" className="button orange">-</button>
          <button type="button" className="button">1</button>
          <button type="button" className="button">2</button>
          <button type="button" className="button">3</button>
          <button type="button" className="button orange">+</button>
          <button type="button" className="button zero">0</button>
          <button type="button" className="button">.</button>
          <button type="button" className="button orange">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
