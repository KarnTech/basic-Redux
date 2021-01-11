let lastId = 0
//can also be done with switch and case statement. 
export default function reducer(state = [], action){
  if(action.type === 'bugAdded'){
    return [...state, {
      description: action.payload.description, 
      resolved: false,
      id: ++lastId
    }]
  }
  else if (action.type === 'bugRemoved'){
    return state.filter(bug => bug.id !== action.payload.id)
  }

  return state;
}