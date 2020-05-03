import React, { Fragment } from 'react'

import Provider from "./Provider"
import Context from "./Context"

const PassMission1 = () => {
  return <PassMission2 />
}

const PassMission2 = () =>{
  return(
    <Context.Consumer>
      {
        context => (
          <Fragment>
            <h2>Name of the Mission: {context.data.name}</h2>
            <h3>Code of the Mission: {context.data.code}</h3>
            <button onClick={context.changeAcceptToYes} >Changing the Acceptence</button>
            <button onClick={context.changeAcceptToNo}>Changing the Acceptence</button>
            <h3>Acceptence: {context.data.accepted}</h3>
          </Fragment>
        )}
    </Context.Consumer>
}

const App = () => {
  return(
    <Fragment>
      <h1>Calling Provider</h1>
      <Provider>
        <PassMission1 />
      </Provider>
    </Fragment>
  )
}

export default App