import React, { Component } from 'react';
import { addAllStateVal } from './util.js';

export class CalExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mortgage: 0,
      tax: 0,
      insurance: 0,
      electricity: 0,
      water: 0,
      sewer: 0,
      garbage: 0,
      gas: 0,
      internet: 0,
      hoa: 0,
      vacancy: 0,
      repairs: 0,
      capitalExpenditure: 0,
      propertyManagement: 0,
      expenseMisc: 0,
      totalMonthlyExpense: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: +value,
    }, () => {
      const total = addAllStateVal(this.state, ['totalMonthlyExpense']);
      this.setState({
        totalMonthlyExpense: +total      
      }, () => {
        this.props.change(this.state)        
      });
    });
  }

  render() {
    return (
      <div className="App-box" style={{height: "950px"}}>
        <h2>Expense</h2>
        <label htmlFor="mortgage">Mortgage: </label>
        <input type="number" name="mortgage"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="tax">Tax: </label>
        <input type="number" name="tax"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="insurance">Insurance: </label>
        <input type="number" name="insurance"
          onChange={this.handleInputChange} /><br />

        <h3>Utilities</h3>
        <label htmlFor="electricity">Electricity: </label>
        <input type="number" name="electricity"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="water">Water: </label>
        <input type="number" name="water"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="sewer">Sewer: </label>
        <input type="number" name="sewer"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="garbage">Garbage: </label>
        <input type="number" name="garbage"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="gas">Gas: </label>
        <input type="number" name="gas"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="internet">Internet: </label>
        <input type="number" name="internet"
          onChange={this.handleInputChange} /><br />

        <label htmlFor="hoa">HOA: </label>
        <input type="number" name="hoa"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="vacancy">Vacancy: </label>
        <input type="number" name="vacancy"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="repairs">Repairs: </label>
        <input type="number" name="repairs"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="capitalExpenditure">Capital Expenditure: </label>
        <input type="number" name="capitalExpenditure"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="propertyManagement">Property Management: </label>
        <input type="number" name="propertyManagement"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="expenseMisc">Misc.: </label>
        <input type="number" name="expenseMisc"
          onChange={this.handleInputChange} /><br />

        <label htmlFor="totalMonthlyExpense">Total Monthly Expense: </label>
        <input type="number" name="totalMonthlyExpense" readOnly
          value={this.state.totalMonthlyExpense} /><br />
      </div>
    );
  }
}
