const initialState = "";

const markError = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': 
            // console.log(action.error);
            return action.error;
        default:
            return "";
    }
}

export default markError;