import React, {Component} from 'react';

import {PlusButton} from 'react-svg-buttons';

import getWeb3 from '../utils/getWeb3'

import SeqStudio from '../../build/contracts/ISeqStudio.json'
import WebApi from "../utils/WebApi";

export default class extends Component {
  constructor(props) {
    super(props)
    this.webApi = new WebApi()
  }

  handleRunClick = (e) => {
    return this.webApi.getAccounts((error, accounts) => {
      this.webApi.getSeqStudioContractInstance().then((instance) => {
        let seqStudioInstance = instance

        return seqStudioInstance.setSampleFileId("89", "good", "15", "12345,67890", {from: accounts[0]})
      })
    })
  }

  handleAnalyzeClick = (e) => {
    return this.webApi.getAccounts((error, accounts) => {
      this.webApi.getSeqStudioContractInstance().then((instance) => {
        let seqStudioInstance = instance

        return seqStudioInstance.analyze("89", "good", "15", "12345,67890", {from: accounts[0]})
      })
    })
  }

  handleReportClick = (e) => {
    return this.webApi.getAccounts((error, accounts) => {
      this.webApi.getSeqStudioContractInstance().then((instance) => {
        let seqStudioInstance = instance

        return seqStudioInstance.generateReport("89", "good", "15", "12345,67890", {from: accounts[0]})
      })
    })
  }

  render() {
    return (
      <div>
        <PlusButton onClick={this.handleRunClick} /> Add "Run Start" event
        <PlusButton onClick={this.handleAnalyzeClick} /> Add "Analyze" event
        <PlusButton onClick={this.handleReportClick} /> Add "Report" event
      </div>
    )
  }

}
