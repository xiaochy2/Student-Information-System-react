const initialState = false;

const isLoading = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return true;
        case 'SERVER_ERROR':
            return false;
        case 'LOAD_COMPLETE':

            return false;
        case 'GET':
            return false;
        default:
            return state;
    }
}

export default isLoading;
