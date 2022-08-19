import React from 'react'
import { render } from 'react-dom'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component 

class App extends React.Component{
  render(){
    return(
    <div>
      <div>
          < NavBar color='black' title="Giphy Search" />
     </div>
      <div>
        < GifListContainer />
      </div>
    </div>
  )}
}

export default App
