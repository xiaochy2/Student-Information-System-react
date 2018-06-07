const initialState = {};

const singleMark = (state = initialState, action) => {
    switch (action.type) {
        case 'EDITING':
            // console.log("editing: "+action.data);
            return action.data;
        default:
            return state;
    }
}
export default singleMark;