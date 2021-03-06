import * as actionTypes from "./actions";

const initialState = {
    partySize: 0,
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
        case actionTypes.FOOD_RECIEVED:
            return {
                ...state,
                foodlist: action.payload.foodlist,
            };
    }
    return state;
};

export default reducer;
