import { combineReducers } from 'redux'

const user = (state = {}, action) => {
  // state = ./state.js => user
  switch (action.type) {
    case 'LOGIN':
    case 'SET_USER':
      return action.value
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}

function projects(state = [], action) {
  if (action.type === "PROJECTS_FETCHED") {
    return action.value;
  }
  return [...state, action.value];
}

export default combineReducers({
  user,
  projects
})