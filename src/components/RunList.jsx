import React from 'react'
import PropTypes from 'prop-types'
import Run2 from "./Run2";
import MyCollapse from "./MyCollapse";

const RunList = ({ runs, onRunClick }) => {
  let newRuns = []
  // runs.map((run, key) => {
  //   newRuns.push(
  //     <MyCollapse key={key} isOpened={false} title={run.title}>
  //       <Run2 {...run} onClick={() => onRunClick(run.event)}/>
  //     </MyCollapse>
  //   )
  // })
  for (let key = runs.length - 1; key >= 0; key--) {
    let run = runs[key]
    newRuns.push(
      <MyCollapse key={key} isOpened title={run.title + ' - ' + run.status} >
        <Run2 {...run} onClick={() => onRunClick(run.event)}/>
      </MyCollapse>
    )
  }
    // runs.reduceRight((run, key) => {
    //   newRuns.push(
    //     <MyCollapse key={key} isOpened={true} title={run.title}>
    //       <Run2 {...run} onClick={() => onRunClick(run.event)}/>
    //     </MyCollapse>
    //   )
    // })
  return (
    <div>
      {newRuns}
    </div>
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
