import React from 'react'
import Workflow2 from "./workflow2.component";
// import PropTypes from 'prop-types'

// title, status, eventlist

const Run2 = ({title, status, events}) => {
  return (
      <li>
        <span>{title}</span>
        <Workflow2 id="wf"/>
      </li>
  )
}

export default Run2
