const initialState = [];

const dataList = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
        case 'GET':
            return action.data;
        case 'DELETE':
            return action.data.marks;
        case 'SORT':
            switch (action.sortBy) {
                case "username": return [...state.sort((a, b) => a.username.localeCompare(b.username))];
                case "math": return [...state.sort((a, b) => a.Math - b.Math)];
                case "english": return [...state.sort((a, b) => a.English - b.English)];
                case "physics": return [...state.sort((a, b) => a.Physics - b.Physics)];
                default:
                    break;
            }
            break;

        default:
            return state;
    }
}
export default dataList;