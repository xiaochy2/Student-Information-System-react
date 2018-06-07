const initialState = false;

const isLoading = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return true;
        default:
            return false;
    }
}

export default isLoading;
