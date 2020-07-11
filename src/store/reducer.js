import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state, //1
                counter: state.counter + action.val
            };
        case actionTypes.DECREMENT:
            const newState = Object.assign({}, state); //2 1 And 2 are the same
            newState.counter = state.counter - action.val
            return newState;
        case actionTypes.ADD_FIVE:
            return {
                ...state,
                counter: state.counter + action.val
            };
        case actionTypes.SUBTRACT_FIVE:
            return {
                ...state,
                counter: state.counter - action.val
            };
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            };
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1); OR
            const newArr = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: newArr
            };
    }
    //default:
    return state;
};

export default reducer;