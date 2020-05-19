import React from 'react';
import {connect} from "react-redux";
import {IS_LOGIN} from "../../redux/actionNames";
import {Form, Button} from 'react-bootstrap'


@connect(
    state => ({
        state
    }),
    dispatch => ({
        dispatch
    })
)
class Login extends React.Component {
    componentDidMount() {
        this.props.dispatch({type: IS_LOGIN})
    }

    render() {
        return (
            <div className="content">
                <h1>LOG IN</h1>
                <Form>
                    <label>USERNAME</label>
                    <input type="text" name="username"/>
                    <label>E-MAIL</label>
                    <input type="text" name="email"/>
                    <label>PASSWORD</label>
                    <input type="password" name="password"/>
                    <input className="form bt" type="submit" value="LOG IN"/>
                </Form>
            </div>
        );
    }
}

export default Login;