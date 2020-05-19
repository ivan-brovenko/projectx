import React from 'react';
import './Header.scss'
import {connect} from "react-redux";
import {LOGIN, MAIN_PAGE, REGISTRATION} from "../../../routesConfig";

@connect(
    state => ({
        linkReducer: state.linkToggleReducer
    }),
    dispatch => ({
        dispatch
    })
)
class Header extends React.Component {

    render() {
        const isPage = (isPage, component) => {
            return (!isPage) ? component : ''
        };

        return (
            <header>
                <label className="logo">FCK</label>
                {isPage(this.props.linkReducer.isRegistration, <a href={REGISTRATION}>SIGN UP</a>)}
                {isPage(this.props.linkReducer.isMain, <a href={MAIN_PAGE}>MAIN PAGE</a>)}
                {isPage(this.props.linkReducer.isLogin, <a href={LOGIN}>LOG IN</a>)}
            </header>
        );
    }
}

export default Header;