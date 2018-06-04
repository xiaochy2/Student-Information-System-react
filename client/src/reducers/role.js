const initialState = "";

const role = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_COMPLETE':
            if (action.data.message){
                return action.data._doc.role;
            }
            return state;
        default:
            return state;
    }
}

export default role;