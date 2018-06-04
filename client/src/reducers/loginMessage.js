const initialState = "";

const loginMessage = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return "Loading...";
        case 'SERVER_ERROR':
            return action.error;
        case 'LOAD_COMPLETE':;
            if(action.message){
                return "Success!"
            }else{
                return "Invalid username/password"
            }
        default:
            return state;
    }
}

export default loginMessage;