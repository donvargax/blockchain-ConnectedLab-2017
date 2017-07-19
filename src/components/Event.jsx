import React from 'react'
import PropTypes from 'prop-types'

import {Moment} from "react-moment";

const Event = ({ onClick, event, args }) => {
  <li onClick={onClick} className="pure-menu-link">
    {event} - <Moment format="LLL" unix>{args.time.toNumber()}</Moment>
  </li>
}

Event.propTypes = {
  onClick: PropTypes.func.isRequired,
  event: PropTypes.string.isRequired,
  args: PropTypes.shape({
    time: PropTypes.number.isRequired
  }),
}

export default Event
