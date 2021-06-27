import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import {sagaMiddleware, store} from './store'
import rootSaga from './rootSaga'
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";

import './App.css'

sagaMiddleware.run(rootSaga)


class _App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/search" component={SearchPage} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default _App