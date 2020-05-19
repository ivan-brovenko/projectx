import React from 'react';
import {LOGIN, MAIN_PAGE, REGISTRATION} from "../routesConfig";
import MainPage from "./components/MainPage/MainPage";
import {Router, Route} from 'react-router-dom';
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import {createBrowserHistory} from "history";
import {Provider} from 'react-redux';
import configureStore from './redux/store';

class App extends React.Component {
    render() {
        return (
            <div>
                <Provider store={configureStore()}>
                    <Header/>
                    <Router history={createBrowserHistory()}>
                        <Route exact path={MAIN_PAGE} component={MainPage}/>
                        <Route path={REGISTRATION} component={Registration}/>
                        <Route path={LOGIN} component={Login}/>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;
