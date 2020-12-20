import React from "react";
import "./styles.css";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const PartyConfigurator = (props) => {
    const [currentText, setcurrentText] = useState("");

    const onChangeHandler = (e) => {
        setcurrentText(e.target.value);
    };

    const onSubmitHandler = () => {
        props.submit(parseInt(currentText));
    };

    return (
        <div className="party-size-picker">
            <p>How many people are in your party?</p>
            <input type="number" min="1" max="10" onChange={onChangeHandler} placeholder="0" />
            <br />
            <NavLink onClick={onSubmitHandler} to="/names">
                Next
            </NavLink>
        </div>
    );
};

export default PartyConfigurator;
