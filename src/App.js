import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Real Estate ROI Calculator</h1>
        </header>
        <div className="App-frame">
          <div className="App-box" style={{height: "350px"}}>
            <h2>Income</h2>
            <label htmlFor="rental_income">Rental Income: </label>
            <input type="number" id="rental_income"></input><br />
            <label htmlFor="laundry">Laundry: </label>
            <input type="number" id="laundry"></input><br />
            <label htmlFor="storage">Storage: </label>
            <input type="number" id="storage"></input><br />
            <label htmlFor="income_misc">Misc.: </label>
            <input type="number" id="income_misc"></input><br />
            <label htmlFor="total_monthly_income">Total Monthly Income: </label>
            <input type="number" id="total_monthly_income" readOnly></input><br />
          </div>

          <div className="App-box" style={{height: "350px", verticalAlign: "top"}}>
            <h2>Cash Flow</h2>
            <label htmlFor="cash_flow_income_expense">Income - Expense: </label>
            <input type="text" id="cash_flow_income_expense" readOnly></input><br />
            <label htmlFor="total_monthly_cash_flow">Total Monthly Income: </label>
            <input type="number" id="total_monthly_income" readOnly></input><br />
          </div>

          <div className="App-box" style={{height: "900px"}}>
            <h2>Expense</h2>
            <label htmlFor="mortgage">Mortgage: </label>
            <input type="number" id="mortgage"></input><br />
            <label htmlFor="tax">Tax: </label>
            <input type="number" id="tax"></input><br />
            <label htmlFor="insurance">Insurance: </label>
            <input type="number" id="insurance"></input><br />

            <h3>Utilities</h3>
            <label htmlFor="electricity">Electricity: </label>
            <input type="number" id="electricity"></input><br />
            <label htmlFor="water">Water: </label>
            <input type="number" id="water"></input><br />
            <label htmlFor="sewer">Sewer: </label>
            <input type="number" id="sewer"></input><br />
            <label htmlFor="garbage">Garbage: </label>
            <input type="number" id="garbage"></input><br />
            <label htmlFor="gas">Gas: </label>
            <input type="number" id="gas"></input><br />
            <label htmlFor="internet">Internet: </label>
            <input type="number" id="internet"></input><br />
            
            <label htmlFor="hoa">HOA: </label>
            <input type="number" id="hoa"></input><br />
            <label htmlFor="vacancy">Vacancy: </label>
            <input type="number" id="vacancy"></input><br />
            <label htmlFor="repairs">Repairs: </label>
            <input type="number" id="repairs"></input><br />
            <label htmlFor="capital_expenditure">Capital Expenditure: </label>
            <input type="number" id="capital_expenditure"></input><br />
            <label htmlFor="property_management">Property Management: </label>
            <input type="number" id="property_management"></input><br />
            
            <label htmlFor="total_monthly_expense">Total Monthly Expense: </label>
            <input type="number" id="total_monthly_expense" readOnly></input><br />
          </div>

          <div className="App-box" style={{height: "900px"}}>
            <h2>Expense</h2>
            <label htmlFor="mortgage">Mortgage: </label>
            <input type="number" id="mortgage"></input><br />
            <label htmlFor="tax">Tax: </label>
            <input type="number" id="tax"></input><br />
            <label htmlFor="insurance">Insurance: </label>
            <input type="number" id="insurance"></input><br />

            <h3>Utilities</h3>
            <label htmlFor="electricity">Electricity: </label>
            <input type="number" id="electricity"></input><br />
            <label htmlFor="water">Water: </label>
            <input type="number" id="water"></input><br />
            <label htmlFor="sewer">Sewer: </label>
            <input type="number" id="sewer"></input><br />
            <label htmlFor="garbage">Garbage: </label>
            <input type="number" id="garbage"></input><br />
            <label htmlFor="gas">Gas: </label>
            <input type="number" id="gas"></input><br />
            <label htmlFor="internet">Internet: </label>
            <input type="number" id="internet"></input><br />
            
            <label htmlFor="hoa">HOA: </label>
            <input type="number" id="hoa"></input><br />
            <label htmlFor="vacancy">Vacancy: </label>
            <input type="number" id="vacancy"></input><br />
            <label htmlFor="repairs">Repairs: </label>
            <input type="number" id="repairs"></input><br />
            <label htmlFor="capital_expenditure">Capital Expenditure: </label>
            <input type="number" id="capital_expenditure"></input><br />
            <label htmlFor="property_management">Property Management: </label>
            <input type="number" id="property_management"></input><br />
            
            <label htmlFor="total_monthly_expense">Total Monthly Expense: </label>
            <input type="number" id="total_monthly_expense" readOnly></input><br />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
