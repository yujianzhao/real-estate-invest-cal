import React, { Component } from 'react';
import { addAllStateVal } from './util.js';

export class CalIncome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rentalIncome: 0,
      laundry: 0,
      storage: 0,
      incomeMisc: 0,
      totalMonthlyIncome: 0
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
      const total = addAllStateVal(this.state, ['totalMonthlyIncome']);
      this.setState({
        totalMonthlyIncome: +total
      }, () => {
        this.props.change(this.state)        
      });
    });
  }

  render() {
    return (
      <div className="App-box" style={{height: "350px"}}>
        <h2>Income</h2>
        <label htmlFor="rentalIncome">Rental Income: </label>
        <input type="number" name="rentalIncome" 
          onChange={this.handleInputChange} /><br />
        <label htmlFor="laundry">Laundry: </label>
        <input type="number" name="laundry"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="storage">Storage: </label>
        <input type="number" name="storage"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="incomeMisc">Misc.: </label>
        <input type="number" name="incomeMisc"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="totalMonthlyIncome">Total Monthly Income: </label>
        <input type="number" name="totalMonthlyIncome" readOnly
          value={this.state.totalMonthlyIncome} /><br />
      </div>
    );
  }
}
