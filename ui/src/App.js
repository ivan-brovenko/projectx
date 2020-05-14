import React from 'react';
import {MAIN_PAGE, REGISTRATION} from "../routesConfig";
import MainPage from "./components/MainPage/MainPage";
import {Router, Route} from 'react-router-dom';
import Registration from "./components/Registration/Registration";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
                    </Router>
                    <Footer/>
                </Provider>
            </div>
        );
    }
}

export default App;
