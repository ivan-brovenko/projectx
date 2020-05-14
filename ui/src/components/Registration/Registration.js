import React from 'react';
import './Registration.scss';
import {IS_MAIN, IS_REGISTRATION} from "../../redux/actionNames";
import {connect} from "react-redux";

@connect(
    state => ({
        state
    }),
    dispatch => ({
        dispatch
    })
)
class Registration extends React.Component {

    componentDidMount() {
        this.props.dispatch({type: IS_REGISTRATION})
    }

    render() {
        return (
            <div className="content">
                <h1>REGISTRATION</h1>
                <form id="regForm">
                    <label>USERNAME</label>
                    <input type="text" name="username"/>
                    <label>E-MAIL</label>
                    <input type="text" name="email"/>
                    <label>PASSWORD</label>
                    <input type="password" name="password"/>
                    <label>REPEAT PASSWORD</label>
                    <input type="password" name="rePassword"/>
                    <input className="form bt" type="submit" value="SIGN UP"/>
                </form>
            </div>
        );
    }
}

export default Registration;