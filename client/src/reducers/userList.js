const initialState = [];

const userList = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCHUSER':
        case 'GETUSER':
            return action.data;
        case 'DELETEUSER':
            return action.data.users;
        case 'SORTUSER':
            switch (action.sortBy) {
                case "username": return [...state.sort((a, b) => a.username.localeCompare(b.username))];
                case "role": return [...state.sort((a, b) => a.username.localeCompare(b.username))];
                default:
                    break;
            }
            break;

        default:
            return state;
    }
}
export default userList;