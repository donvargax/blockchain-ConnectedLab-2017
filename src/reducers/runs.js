const runs = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_RUN':
      return [...state, action.run]
    case 'ADD_EVENT_TO_RUN':
      let newState = state.slice();
      // if (newState[action.id].events === undefined) {
      //   newState[action.id].events = []
      // }
      newState[action.id].events.push(action.event)
      return newState
    default:
      return state
  }
}

export default runs
