const initialState = [];

const dataList = (state = initialState, action) => {
    switch (action.type) {
        
        case 'SEARCH':
        case 'GET':
        
            return action.data;
            
        case 'SORT':
            switch (action.sortBy) {
                case "username": return state.sort((a, b) => a.username.localeCompare(b.username));
                case "math": return state.sort((a, b) => a.math - b.math);
                case "english": return state.sort((a, b) => a.english - b.english);
                case "physics": return state.sort((a, b) => a.physics - b.physics);
                default:
                    break;
            }
            break;

        default:
            return state;
    }
}
export default dataList;