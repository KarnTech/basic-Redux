import * as actions from './actiontypes'

let lastId = 0
//can also be done with switch and case statement. 
export default function reducer(state = [], action){
  if(action.type === actions.bug_added ){
    return [...state, {
      description: action.payload.description, 
      resolved: false,
      id: ++lastId
    }]
  }
  else if (action.type === actions.bug_removed){
    return state.filter(bug => bug.id !== action.payload.id)
  }

  return state;
}