const initialState = 1;

const pageRender = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_PAGE':
            return action.pageRender;
        default:
            return state;
    }
}

export default pageRender;
