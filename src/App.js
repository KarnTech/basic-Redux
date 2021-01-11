import * as React from 'react'
import * as ReactDOM from 'react-dom'
import store from './store'
const App = () => {
  
  console.log(store.getState())

  store.dispatch({
    type: "bugAdded",
    payload: {
      description: "bug1"
    }
  })

      console.log(store.getState())

store.dispatch({
    type: "bugRemoved",
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
