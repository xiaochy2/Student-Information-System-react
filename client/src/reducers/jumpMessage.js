const initialState = false;

const jumpMessage = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE':
        case 'UPDATE': 
        case 'ADD':
        return action.message;
        default:
            return false;
    }
}

export default jumpMessage;
