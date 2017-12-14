import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CalIncome } from './CalIncome.jsx';
import { CalCashFlow } from './CalCashFlow.jsx';
import { CalExpense } from './CalExpense.jsx';
import { CalROI } from './CalROI.jsx';
import { CalExport } from './CalExport.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalMonthlyIncome: 0,
      totalMonthlyExpense: 0,
      monthlyCashFlow: 0,
      ROI: 0,
      Notes: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(dataInput) {
    this.setState(dataInput, () => {
      this.setState({
        monthlyCashFlow: (this.state.totalMonthlyIncome - this.state.totalMonthlyExpense)
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Real Estate ROI Calculator</h1>
        </header>
        <div className="App-frame">        
          <CalIncome change={this.handleInputChange} />
          <CalCashFlow value={this.state} />
          <CalExpense change={this.handleInputChange}  />
          <CalROI value={this.state} change={this.handleInputChange}/>
        </div>
        <CalExport value={this.state}></CalExport>
      </div>
    );
  }
}

export default App;
