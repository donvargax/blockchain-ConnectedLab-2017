import React from 'react'
import PropTypes from 'prop-types'
import Event from './Event'

const EventList = ({ events, onEventClick }) => {
  console.log("EVENTS", events)
  let newEvents = []
  events.map((event, key) => {
    newEvents.push(
      <Event key={key} {...event} onClick={() => onEventClick(event.blockHash)} />
    )
  })
  console.log("NEWEVENTS", newEvents)
  return (
    <ul>
      {newEvents}
    </ul>
  )
}

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      blockHash: PropTypes.string.isRequired,
      args: PropTypes.shape({
        time: PropTypes.object.isRequired
      }),
      event: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onEventClick: PropTypes.func
}

export default EventList
