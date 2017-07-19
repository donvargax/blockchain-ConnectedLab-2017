import React from 'react'
import PropTypes from 'prop-types'
import Run2 from "./Run2";
import {Collapse} from "react-collapse";

const RunList = ({ runs, onRunClick }) => {
  let newRuns = []
  runs.map((run, key) => {
    newRuns.push(
      <Collapse key={key} isOpened={true}>
        <Run2 {...run} onClick={() => onRunClick(run.event)} />
      </Collapse>
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
