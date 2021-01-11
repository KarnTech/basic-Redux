import * as React from 'react'
import * as ReactDOM from 'react-dom'
import store from './store'

import * as actions from './actiontypes'

const App = () => {
  
  console.log(store.getState())
    store.subscribe(() => {
    console.log("storechanged", store.getState())
  })

  store.dispatch({
    type: actions.bug_added,
    payload: {
      description: "bug1"
    }
  })

      console.log(store.getState())

store.dispatch({
    type: actions.bug_removed,
    payload: {
      id: 1
    }
  })



    console.log(store.getState())

  return (
    <div>
      this is a basic redux application
    </div>
  );
}

ReactDOM.render(
  <div className="App">
    <App/>
  </div>,
  document.getElementById('root')
);
