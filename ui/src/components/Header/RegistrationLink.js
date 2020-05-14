import React from 'react';
import {REGISTRATION} from "../../../routesConfig";
import {IS_REGISTRATION} from "../../redux/actionNames";


const RegistrationLink = () => {

    return (
        <a href={REGISTRATION}>SIGN UP</a>
    );
};

export default RegistrationLink;