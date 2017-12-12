import React, { Component } from 'react';

export class CalCashFlow extends Component {
  render() {
    return (
      <div className="App-box" style={{height: "350px", verticalAlign: "top"}}>
        <h2>Cash Flow</h2>
        <label htmlFor="cashFlowIncomeExpense">Income - Expense: </label>
        <input type="text" name="cashFlowIncomeExpense" readOnly
          value={this.props.value.totalMonthlyIncome + 
          ' - ' + this.props.value.totalMonthlyExpense + 
          ' = ' + (this.props.value.totalMonthlyIncome-this.props.value.totalMonthlyExpense)} /><br />
        <label htmlFor="monthlyCashFlow">Monthly Cash Flow: </label>
        <input type="number" name="monthlyCashFlow" readOnly
          value={(this.props.value.totalMonthlyIncome-this.props.value.totalMonthlyExpense)} /><br />
      </div>
    );
  }
}
