import React from 'react';
import './MainPage.scss';
import BackgroundImage from '../../images/backbround.jpg';
import Square1 from '../../images/square1.jpg';
import Square2 from '../../images/square2.jpg';
import Square3 from '../../images/square3.jpg';
import Square4 from '../../images/square4.jpg';
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
            <div>
                <div className="mainImageSection">
                    <img src={BackgroundImage} alt="admission"/>
                    <div className="headline">
                        ADMISSION
                    </div>
                </div>
                <div className="tabs">
                    <div className="tab">
                        <div className="squareText">
                            SIGN UP
                        </div>
                        <img src={Square1}/></div>
                    <div className="tab">
                        <div className="squareText">
                           CHOOSE A DEPARTMENT
                        </div>
                        <img src={Square2}/></div>
                    <div className="tab">
                        <div className="squareText">
                            FILL THE FORM
                        </div>
                        <img src={Square3}/></div>
                    <div className="tab">
                        <div className="squareText">
                           WAIT FOR RESULTS
                        </div>
                        <img src={Square4}/></div>
                </div>
            </div>
        );
    }
}

export default MainPage;