export const addEvent = event => {
  return {
    type: 'ADD_EVENT',
    event
  }
}

export const addRun = run => {
  console.log("DISPATCHING addRun", run);
  return {
    type: 'ADD_RUN',
    run
  }
}

export const addEventToRun = (id, event) => {
  return {
    type: 'ADD_EVENT_TO_RUN',
    id,
    event
  }
}

export const toggleRun = id => {
  return {
    type: 'TOGGLE_RUN',
    id
  }
}
