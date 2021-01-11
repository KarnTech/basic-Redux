import * as actions from './actiontypes'


export function bugAdded(description){
  return {
    type: actions.bug_added,
    payload: {
      description: description
    }
  }
}