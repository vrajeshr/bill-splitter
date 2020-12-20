import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import "./component-styles.css";

import PartyConfigurator from "./PartyConfigurator/PartyConfigurator";

import * as actionTypes from "../actions";
import EnterNames from "./EnterNames/EnterNames";
import EnterFood from "./EnterFood/EnterFood";

const Content = (props) => {
    return (
        <div className="App-content">
            {
                <Switch>
                    <Route exact path="/">
                        <PartyConfigurator submit={(num) => props.onPartySizeReceived(num)} />
                    </Route>
                    <Route exact path="/names">
                        <EnterNames
                            submit={(names) => props.onNamesReceived(names)}
                            partySize={props.data.partySize}
                        />
                    </Route>
                    <Route exact path="/food">
                        <EnterFood />
                    </Route>
                </Switch>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPartySizeReceived: (num) =>
            dispatch({ type: actionTypes.PARTY_SIZE_RECIEVED, payload: { partySize: num } }),
        onNamesReceived: (names) =>
            dispatch({ type: actionTypes.NAMES_RECIEVED, payload: { names: names } }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
