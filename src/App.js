import React, {useEffect} from 'react';
import './App.css';
import store from './store';
import { GET_TITLE_REQUEST } from './duck';
import {connect} from 'react-redux'

function App({title}) {
  useEffect(() => {
    store.dispatch({type: GET_TITLE_REQUEST})
  },[] )

  return (
    <div className="App">
      <header className="App-header">
        <h1>title: {title}</h1>
      </header>
    </div>
  );
}

export default connect(state => ({
  title: state.title
}))(App)
