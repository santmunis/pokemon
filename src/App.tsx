import React from 'react';
import './App.css'
import Routes from './routes/route'
import { Provider } from 'react-redux'
import store from './store'

const App = () => <Provider store={store}><Routes /></Provider>;


export default App;
