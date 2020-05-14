import React from 'react';
import './Header.scss'
import {connect} from "react-redux";
import RegistrationLink from "./RegistrationLink";
import LogInLink from "./LogInLink";

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
        return (
            <header>
                <label className="logo">STUD.UA</label>
                {
                    (!this.props.linkReducer.isRegistration) ? <RegistrationLink/> : ''
                }
                {
                    (!this.props.linkReducer.isRegistration) ? <LogInLink/> : ''
                }
                {
                    (!this.props.linkReducer.isMain) ? <a href="/">MAIN PAGE</a>: ''
                }
                <select>
                    <option value="/stud.ua-en">EN</option>
                    <option value="/stud.ua-ru">RU</option>
                    <option value="/stud.ua-ua">UA</option>
                </select>
            </header>
        );
    }
}

export default Header;