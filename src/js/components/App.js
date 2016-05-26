import React, { Component } from 'react'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import reducers from '../reducers/index'

import SearchBar from '../containers/SearchBar'
import WeatherList from '../containers/WeatherList'

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
       <Provider store={createStoreWithMiddleware(reducers)}>
         <div>
           <SearchBar />
           <WeatherList />
         </div>
        </Provider>
    )
  }
}


export default App
