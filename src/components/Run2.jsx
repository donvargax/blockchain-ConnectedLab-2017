import React, {Component} from 'react'
import Workflow2 from "./workflow2.component";
// import PropTypes from 'prop-types'

// title, status, eventlist

class Run2 extends Component {

  render() {
    let {title, status, events} = this.props
    return (
      <Workflow2 events={events} />
    )
  }
}

export default Run2
