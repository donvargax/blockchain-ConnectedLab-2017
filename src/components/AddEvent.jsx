import React, {Component} from 'react';

import {PlusButton} from 'react-svg-buttons';

import getWeb3 from '../utils/getWeb3'

import SeqStudio from '../../build/contracts/SeqStudio.json'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      web3: null,
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.
    getWeb3.then(results => {
      this.setState({
        web3: results.web3,
      })
    }).catch(() => {
      console.log('Error finding web3.')
    })
  }

  handleClick = (e) => {
    const contract = require('truffle-contract')
    const seqStudioContract = contract(SeqStudio)
    seqStudioContract.setProvider(this.state.web3.currentProvider)
    return this.state.web3.eth.getAccounts((error, accounts) => {
      seqStudioContract.deployed().then((instance) => {
        let seqStudioInstance = instance

        return seqStudioInstance.setSampleFileId("89", "good", "15", "12345,67890", {from: accounts[0]})
      })
    })
  }

  render() {
    return (
      <div>
          <PlusButton onClick={this.handleClick} /> Add "Run Start" event
      </div>
    )
  }

}
