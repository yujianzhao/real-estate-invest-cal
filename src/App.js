import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CalIncome } from './CalIncome.jsx';
import { CalCashFlow } from './CalCashFlow.jsx';
import { CalExpense } from './CalExpense.jsx';
import { CalROI } from './CalROI.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalMonthlyIncome: 0,
      totalMonthlyExpense: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);    
  }

  handleInputChange(state) {
    if (state.hasOwnProperty('totalMonthlyIncome')) {
      this.setState({
        totalMonthlyIncome: state.totalMonthlyIncome
      });
    }
    if (state.hasOwnProperty('totalMonthlyExpense')) {
      this.setState({
        totalMonthlyExpense: state.totalMonthlyExpense
      });
    }
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
          <CalROI value={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
