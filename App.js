import React from 'react';
import { Provider } from 'react-redux';
import Root from './Root.js';
import store from './src/store';

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}