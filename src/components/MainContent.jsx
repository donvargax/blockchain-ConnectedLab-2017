import React, {Component} from 'react';

import Workflow2 from "./components/workflow2.component";

export default class extends Component {
  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-1">
          <Workflow2 id="wf"/>

          <h1>Good to Go!</h1>
          <p>Your Truffle Box is installed and ready.</p>
          <h2>Smart Contract Example</h2>
          <p>If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default).</p>
          <p>Try changing the value stored on <strong>line 59</strong> of App.js.</p>
          <p>The stored value is: none</p>
        </div>
      </div>
    )
  }
}
