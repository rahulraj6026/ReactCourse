import React,{useState} from 'react';
import "./App.css"

const App = () => {
  const [counter, setCounter] = useState(0)
  //state can be declared with a variable and a method and we can pass
  //default value if any in braces present in useState()
  //multiple value can be passed in {}
  return(
    <div className="App">
      <header>
        <h1>Counter app using state/hooks</h1>
      </header>
      <h2>Current value of count is {counter}</h2>
      <button onClick={ () => setCounter(0)}>Reset</button>
      <button onClick={ () => (counter > 10 ?"":setCounter(counter + 1))}>Increase counter</button>
      <button onClick={ () => (counter<=0?"":setCounter(counter - 1))}>Decrease counter</button>
    </div>
  )
}
export default App