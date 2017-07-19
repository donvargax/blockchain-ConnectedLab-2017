import React from 'react'
import PropTypes from 'prop-types'
import Run from "./Run";
// import {Moment} from "react-moment";
// import Run from './Run'

const RunList = ({ runs, onRunClick }) => {
  let newRuns = []
  runs.map((run, key) => {
    newRuns.push(
      <Run key={key} {...run} onClick={() => onRunClick(run.event)} />
    )
  })
  return (
    <ul>
      {newRuns}
    </ul>
  )
}

//<Run key={run.event} onClick={() => onRunClick(run.event)} />

RunList.propTypes = {
  runs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.string,
      events: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          status: PropTypes.string,
        })
      )
    })
  ),
  onRunClick: PropTypes.func.isRequired
}

export default RunList
