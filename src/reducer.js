import * as actionTypes from "./actions";

const initialState = {
    partySize: -1,
};

const reducer = (state = initialState, action) => {
    console.log();
    switch (action.type) {
        case actionTypes.PARTY_SIZE_RECIEVED:
            return {
                ...state,
                partySize: action.payload.partySize,
            };
        case actionTypes.NAMES_RECIEVED:
            return {
                ...state,
                names: action.payload.names,
            };
    }
    return state;
};

export default reducer;
