import React from 'react'
import PropTypes from 'prop-types'

import {Moment} from "react-moment";

const Event = ({ onClick, event, args }) => (
  <li onClick={onClick} className="pure-menu-link">
    {event} - {args.time.toNumber()}
  </li>
)

Event.propTypes = {
  onClick: PropTypes.func,
  event: PropTypes.string.isRequired,
  args: PropTypes.shape({
    time: PropTypes.object.isRequired
  }),
}

export default Event
