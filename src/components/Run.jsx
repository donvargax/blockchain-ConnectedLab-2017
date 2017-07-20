import React from 'react'
import EventList from "./EventList";
// import PropTypes from 'prop-types'

// title, status, eventlist

const Run = ({title, status, events}) => {
  return (
      <li>
        {/*lalalalala*/}
        {/*{console.log("arun", this)}*/}
        {/*<span>{title}</span> - <span>{status}</span>*/}
        <EventList key={title} events={events} />
      </li>
  )
}

export default Run
