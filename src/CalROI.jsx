import React, { Component } from 'react';
import { addAllStateVal } from './util.js';

export class CalROI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      downPayment: 0,
      closingCost: 0,
      rehabBudget: 0,
      roiMisc: 0,
      totalInvestment: 0,
      ROI: 0,
      Notes: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNotes = this.addNotes.bind(this);    
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: +value,
    }, () => {
      const total = addAllStateVal(this.state, ['totalInvestment', 'Notes', 'ROI']);

      this.setState({
        totalInvestment: +total
      }, () => {
        this.setState({
          ROI: (((12*(this.props.value.totalMonthlyIncome-this.props.value.totalMonthlyExpense)) / this.state.totalInvestment)*100).toFixed(2)
        }, () => {
          this.props.change(this.state)            
        })
      });
    });
  }

  addNotes(event) {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      this.props.change(this.state)            
    });
  }

  render() {
    return (
      <div className="App-box" style={{height: "950px", verticalAlign: "top"}}>
        <h2>Return On Investment (ROI)</h2>
        <label htmlFor="downPayment">Down Payment: </label>
        <input type="number" name="downPayment"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="closingCost">Closing Cost: </label>
        <input type="number" name="closingCost"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="rehabBudget">Rehab Budget: </label>
        <input type="number" name="rehabBudget"
          onChange={this.handleInputChange} /><br />
        <label htmlFor="roiMisc">Misc.: </label>
        <input type="number" name="roiMisc"
          onChange={this.handleInputChange} /><br />

        <label htmlFor="totalInvestment">Total Investment: </label>
        <input type="number" name="totalInvestment" readOnly
          value={this.state.totalInvestment} /><br />
        <label htmlFor="roiCashFlowTotalInvestment">Annual Cash Flow / Total Investment: </label>
        <input type="text" name="roiCashFlowTotalInvestment" readOnly
          value={12*(this.props.value.totalMonthlyIncome-this.props.value.totalMonthlyExpense) + ' / ' + this.state.totalInvestment} /><br />
        <label htmlFor="ROI">ROI (%): </label>
        <input type="text" name="ROI" readOnly
          value={(((12*(this.props.value.totalMonthlyIncome-this.props.value.totalMonthlyExpense)) / this.state.totalInvestment)*100).toFixed(2)} /><br />

        <br />
        <br />
        <br />
        <h3>Notes:</h3>
        <textarea rows="18" cols="50" name="Notes"
          onChange={this.addNotes}></textarea>
      </div>
    );
  }
}
