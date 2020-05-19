import React from 'react';
import './MainPage.scss';
import {IS_MAIN} from "../../redux/actionNames";
import {connect} from "react-redux";

@connect(
    state => ({
        state
    }),
    dispatch => ({
        dispatch
    })
)
class MainPage extends React.Component {

    componentDidMount() {
        this.props.dispatch({type: IS_MAIN})
    }

    render() {
        return (
            <div className="content">
                <div className="mainImageSection">
                    <div className="headline">
                        FCK COMPANY
                    </div>
                    <div className="openDatabase">
                        OPEN SOCIAL MEDIA DATABASE
                    </div>
                    <div className="description">
                        GET ACCESS TO UR FRIENDS' SOCIAL MEDIA
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;