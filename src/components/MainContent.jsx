import React, {Component} from 'react';

import Workflow2 from "./workflow2.component";
import Network from "./Network";

export default class extends Component {
  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-1">
          <h1>Good to Go!</h1>

          <Workflow2 id="wf"/>
          <Network/>

        </div>
      </div>
    )
  }
}
