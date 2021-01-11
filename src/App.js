import * as React from 'react'
import * as ReactDOM from 'react-dom'
import store from './store'
const App = () => {
  
  console.log(store)
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
