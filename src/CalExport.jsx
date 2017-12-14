import React, { Component } from 'react';
import { CSVLink } from 'react-csv';

export class CalExport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: undefined
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    
    this.fileName = () => {
      return (this.state.fileName || 'Real_Estate_ROI_Calculator_Export_' + Date.now()) + '.csv';
    }

    this.getData = () => {
      let toReturn = [];
      for (let key in this.props.value) {
        let name = key.charAt(0).toUpperCase();
        for (let ch of key.slice(1)) {
          name += ((ch === ch.toUpperCase()) ? (' ' + ch) : ch);
        }
        if (key === 'HOA') {
          name = key;
        }
        if (key === 'ROI') {
          name = key + ' (%)';
        }
        toReturn.push([name, this.props.value[key]]);
      }
      return toReturn;
    }
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="fileName">Export File Name (Optional): </label>
        <input type="text" name="fileName" onChange={this.handleInputChange} /><br /><br />
        <CSVLink data={this.getData()} filename={this.fileName()}>Export Data</CSVLink>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
