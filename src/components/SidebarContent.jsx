import React, { Component } from 'react';

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
    if (this.seqStudioEventAll) {
      this.seqStudioEventAll.stopWatching()
    }
  }


  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const seqStudioContract = contract(SeqStudio)
    seqStudioContract.setProvider(this.state.web3.currentProvider)

    // var seqStudioEventAll = seqStudioContract.RunAll

    var seqStudioInstance

    this.state.web3.eth.getAccounts((error, accounts) => {
      console.log("accounts", accounts)
      seqStudioContract.deployed().then((instance) => {
        seqStudioInstance = instance

        console.log(seqStudioInstance)
        seqStudioInstance.setSampleFileId("89", "good", "15", "12345,67890", {from: accounts[0]})
        seqStudioInstance.setSampleFileId("89", "good", "15", "12345,67890", {from: accounts[0]})
        return seqStudioInstance.setSampleFileId("89", "good", "15", "12345,67890", {from: accounts[0]})
      }).then((result) => {
        console.log(accounts[0])
        this.seqStudioRunStartEvent = seqStudioInstance.RunStart({starter: accounts[0]},
            {fromBlock: 0, toBlock: 'latest'})
        this.seqStudioEventAll = seqStudioInstance.allEvents(
          {address: accounts[0], fromBlock: 0, toBlock: 'latest'})

        console.log("fit");
        console.log("RunStart", this.seqStudioRunStartEvent);
        console.log(this.seqStudioEventAll);

        this.seqStudioRunStartEvent.watch((error, result) => {
          console.log("SOMETHING");
          if (error) {
            console.log(error)
            return
          }

          console.log(result);
          this.allEvents.push(result);
          this.setState({ allEvents: this.allEvents })
          // this.seqStudioRunStartEvent.stopWatching();
        })

        // this.seqStudioEventAll.watch((error, result) => {
        //   console.log("SOMETHING");
        //   if (error) {
        //     console.log(error)
        //     return
        //   }
        //
        //   console.log(result);
        //   this.allEvents.push(result);
        // })
      })
        //
        // this.seqStudioEventAll = seqStudioInstance.RunStart({starter: accounts[0]},
        //   {fromBlock: 0, toBlock: 'latest'})
        //
        // console.log("fit");
        // this.seqStudioEventAll.watch((error, result) => {
        //   console.log("SOMETHING");
        //   if (error) {
        //     console.log(error)
        //     return
        //   }
        //
        //   console.log(result);
        //   this.allEvents.push(result);
        // })

      // })
    })
  }

  render() {
    let events = []
    for (let i = 0; i < this.state.allEvents.length; i++) {
      events.push(<a href="#" className="pure-menu-heading pure-menu-link">{this.state.allEvents[i].args.starter}</a>)
    }
    console.log('EVENTS', events)
    return (
      <div>
        <a href="#">Headasdfklasdl;ksfaklfsdl;fasdkjfsdk;jfsadkl;fsadjklafsdj;fasdlk;fsdlk</a>
        {events}
      </div>
    )
  }
}
