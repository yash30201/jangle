import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import { socketContext, socket } from './context/socket';


const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <socketContext.Provider value={socket}>
      <App />
    </socketContext.Provider>
  </Provider>
  ,
  document.getElementById('root')
);

