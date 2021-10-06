import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';


// -----------------------Css file--------------------------------
import './App.css'


// -----------------------Redux Store--------------------------------
import store from './redux';


// -----------------------Components--------------------------------
import Layout from './components/layout/Layout'
import Home from './components/Home';



const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
