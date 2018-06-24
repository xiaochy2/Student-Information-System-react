const initialState = false;

const jumpMessage = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETEUSER' :
        case 'DELETE':return action.data.message;
        case 'UPDATE': 
        case 'ADD':
        case 'UPDATEUSER': 
        case 'ADDUSER':
        return action.message;
        default:
            return false;
    }
}

export default jumpMessage;
