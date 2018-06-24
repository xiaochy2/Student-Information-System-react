const initialState = 1;

const page_num = (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT': return state + 1;
        case 'PREV': return state - 1;
        case 'DELETE':
        case 'DELETEUSER':
        case 'SEARCHUSER':
        case 'SEARCH':
        case 'CHANGE_PAGE':
            return 1;
        default:
            return state;
    }
}

export default page_num;