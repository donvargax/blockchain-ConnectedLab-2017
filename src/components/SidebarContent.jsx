import React, { Component } from 'react';

import Moment from 'react-moment';

import WebApi from "../utils/WebApi";

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      web3: null,
      allEvents: []
    }
    this.allEvents = [];
    this.webApi = new WebApi()
    this.instantiateContract()
  }

  // TODO: we're the all seeing eye
  /*
  componentDidMount() {
    // Instantiate contract once web3 provided.
    // TODO: stop watching somewhere else
    if (this.seqStudioEventAll) {
      this.seqStudioEventAll.stopWatching()
    }
  }
  */

  instantiateContract() {
    var seqStudioInstance

    this.webApi.getAccounts((error, accounts) => {
      console.log(accounts);
      this.webApi.getSeqStudioContractInstance().then((instance) => {
        console.log(instance)
        seqStudioInstance = instance

        // this.seqStudioRunStartEvent = seqStudioInstance.RunStart({starter: accounts[0]},
        //     {fromBlock: 0, toBlock: 'latest'})
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
        console.log(error);
      })
    })
  }

  render() {
    let events = []
    console.log(this.state.allEvents);
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
