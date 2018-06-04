const initialState = "";

const loginError = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return "";
        case 'SERVER_ERROR': 
            return action.error;
        case 'LOAD_COMPLETE':
            return "";
        default:
            return state;
    }
}

export default loginError;