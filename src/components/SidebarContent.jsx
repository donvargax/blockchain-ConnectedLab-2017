import React, { Component } from 'react';

import Moment from 'react-moment';

import getWeb3 from '../utils/getWeb3'

import SeqStudio from '../../build/contracts/SeqStudio.json'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      web3: null,
      allEvents: []
    }
    this.allEvents = [];
  }
  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.
    getWeb3.then(results => {
      this.setState({
        web3: results.web3
      })
      this.instantiateContract()
    }).catch(() => {
      console.log('Error finding web3.')
    })
  }

  componentDidMount() {
    // Instantiate contract once web3 provided.
    // TODO: stop watching somewhere else
    if (this.seqStudioEventAll) {
      this.seqStudioEventAll.stopWatching()
    }
  }

  instantiateContract() {
    const contract = require('truffle-contract')
    const seqStudioContract = contract(SeqStudio)
    seqStudioContract.setProvider(this.state.web3.currentProvider)

    var seqStudioInstance

    this.state.web3.eth.getAccounts((error, accounts) => {
      seqStudioContract.deployed().then((instance) => {
        seqStudioInstance = instance

        this.seqStudioRunStartEvent = seqStudioInstance.RunStart({starter: accounts[0]},
            {fromBlock: 0, toBlock: 'latest'})
        this.seqStudioEventAll = seqStudioInstance.allEvents(
          {address: accounts[0], fromBlock: 0, toBlock: 'latest'})

        // this.seqStudioRunStartEvent.watch((error, result) => {
        //   if (error) {
        //     console.log(error)
        //     return
        //   }
        //
        //   this.allEvents.push(result)
        //   this.setState({ allEvents: this.allEvents })
        // })

        this.seqStudioEventAll.watch((error, result) => {
          if (error) {
            console.log(error)
            return
          }

          this.allEvents.push(result)
          this.setState({ allEvents: this.allEvents })
        })
      }).catch(error => {
        alert(error);
      })
    })
  }

  render() {
    let events = []
    this.state.allEvents.map((event, key) => {
      events.push(
        <a href="#" className="pure-menu-link" key={key}>
          {event.event} - <Moment format="LLL" unix>{event.args.time.toNumber()}</Moment>
        </a>
      )
    })
    return (
      <div>
        <span className="pure-menu-heading pure-menu-link">All events</span>
        {events}
      </div>
    )
  }
}
