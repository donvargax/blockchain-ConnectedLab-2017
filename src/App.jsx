import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addRun} from './actions'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

import WebApi from "./utils/WebApi"
import VisibleRunList from "./containers/VisibleRunList";
import EventSimulator from "./components/EventSimulator";
import {addEventToRun} from "./actions";
import {finishRun} from "./actions/index";

class App extends Component {

  constructor(props) {
    super(props)

    this.runs = 0
    this.webApi = new WebApi()

    var seqStudioInstance

    this.webApi.getAccounts((error, accounts) => {
      console.log(accounts);
      this.webApi.getSeqStudioContractInstance().then((instance) => {
        console.log(instance)
        seqStudioInstance = instance

        this.seqStudioEventAll = seqStudioInstance.allEvents(
          {address: accounts[0], fromBlock: 0, toBlock: 'latest'})

        this.seqStudioEventAll.watch((error, result) => {
          if (error) {
            console.log(error)
            return
          }

          if (result.event === "SampleFilesAvailable") {
            props.dispatch(addRun({id: this.runs, title: `Run ${this.runs}`, status: 'in progress', events: []}))
          }
          props.dispatch(addEventToRun(this.runs, result))
          if (result.event === "TriggerReportGeneration") {
            props.dispatch(finishRun({id: this.runs, status: 'finished'}))
            this.runs++
          }
          // } else {
          //   props.dispatch(addRun(result))
          // }
        })
      }).catch(error => {
        console.log(error);
      })
    })
  }

  render() {
    return (
      <div className="App">
        <main className="container">
          <VisibleRunList />
          <EventSimulator />
        </main>
      </div>
    );
  }
}

export default connect()(App)
