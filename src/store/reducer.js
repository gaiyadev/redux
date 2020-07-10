
const initialState = {
    counter: 0,
    result
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: counter + action.val
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: counter - action.val
            };
        case 'ADD_FIVE':
            return {
                ...state,
                counter: counter + action.val
            };
        case 'SUBTRACT_FIVE':
            return {
                ...state,
                counter: counter - action.val
            };
        case 'STORE_RESULT':
            return {

            };
    }
    //default:
    return state;
};

export default reducer;