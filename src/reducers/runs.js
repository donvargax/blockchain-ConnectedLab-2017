const runs = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_RUN':
      return [...state, action.run]
    case 'FINISH_RUN':
      let state2 = state.slice()
      if (state2[action.id]) {
        state2[action.id].status = action.status
      }
      return state2
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
