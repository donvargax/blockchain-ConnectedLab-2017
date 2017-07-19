import React from 'react'
import PropTypes from 'prop-types'
import Event from './Event'

const EventList = ({ events, onEventClick }) => (
  <ul>
    {events.map(event => (
      <Event key={event.hash} {...event} onClick={() => onEventClick(event.id)} />
    ))}
  </ul>
)

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      hash: PropTypes.string.isRequired,
      args: PropTypes.shape({
        time: PropTypes.number.isRequired
      }),
      event: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onEventClick: PropTypes.func.isRequired
}

export default EventList
