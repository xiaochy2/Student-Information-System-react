const initialState = {};

const singleUser = (state = initialState, action) => {
    switch (action.type) {
        case 'EDITINGUSER':
            // console.log("editing: "+action.data);
            return action.data;
        default:
            return state;
    }
}
export default singleUser;