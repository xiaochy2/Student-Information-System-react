import axios from 'axios';

export const log = info => dispatch => {
    axios.post('api/login', info)
        .then(
            res => {  
                dispatch({
                    type: 'LOAD_COMPLETE',
                    data: res.data
                });
            }
        )
        .catch(
            err => {
                dispatch({
                    type: 'SERVER_ERROR',
                    error: err.toString()
                });
            }
        )
}

export const goToPage = num => ({
    type: 'CHANGE_PAGE',
    pageRender : num
})



export const getInfo = () => dispatch => {
    // console.log("get");
    axios.get('api/marks')
        .then(res => dispatch({
            type: 'GET',
            data: res.data
        })
        )
        .catch(err => {
            console.log(err);
        })
}

export const search = text => dispatch => {
    axios.get('api/marks/' + text)
        .then(res => dispatch({
            type: 'SEARCH',
            data: res.data
        })
        )
        .catch(err => {
            console.log(err);
        })
}

export const sort = tag => ({
    type: 'SORT',
    sortBy: tag
})

export const next = () => ({
    type: 'NEXT',
})

export const prev = () => ({
    type: 'PREV',
})

export const editing = singleMark => ({
    type: 'EDITING',
    data: singleMark
})

export const del = id => dispatch => {
    // console.log("delete " + id);
    axios.delete('api/marks/' + id)
        .then(res => dispatch({
            type: 'DELETE',
            data: res.data
        })
        )
        .catch(err => {
            console.log(err);
        })
}

export const update = singleData => dispatch => {
    // console.log("update");
    axios.put('api/marks/' + singleData._id, singleData)
        .then(res => dispatch({
            type: 'UPDATE',
            message: res.data.message
        })
        )
        .catch(err => {
            console.log(err);
        })
}

export const create = singleData => dispatch => {
    // console.log("add " + singalData.firstname);
    axios.post('api/marks', singleData)
        .then(res => dispatch({
            type: 'ADD',
            message: res.data.message,
            error:res.data.error
        })
        )
        .catch(err => {
            console.log(err);
        })
}

export const searchUser = text => dispatch => {
    axios.get('api/users/' + text)
        .then(res => dispatch({
            type: 'SEARCHUSER',
            data: res.data
        })
        )
        .catch(err => {
            console.log(err);
        })
}

export const sortUser = tag => ({
    type: 'SORTUSER',
    sortBy: tag
})

export const getUser = () => dispatch => {
    // console.log("get");
    axios.get('api/users')
        .then(res => dispatch({
            type: 'GETUSER',
            data: res.data
        })
        )
        .catch(err => {
            console.log(err);
        })
}

export const delUser = id => dispatch => {
    // console.log("delete " + id);
    axios.delete('api/users/' + id)
        .then(res => dispatch({
            type: 'DELETEUSER',
            data: res.data
        })
        )
        .catch(err => {
            console.log(err);
        })
}

export const updateUser = singleData => dispatch => {
    // console.log("update");
    axios.put('api/users/' + singleData._id, singleData)
        .then(res => dispatch({
            type: 'UPDATEUSER',
            message: res.data.message,
            error : res.data.error
        })
        )
        .catch(err => {
            console.log(err);
        })
}

export const createUser = singleData => dispatch => {
    console.log(singleData);
    axios.post('api/users', singleData)
        .then(res => dispatch({
            type: 'ADDUSER',
            message: res.data.message,
            error : res.data.error
        })
        )
        .catch(err => {
            console.log(err);
        })
}

export const editingUser = singleUser => ({
    type: 'EDITINGUSER',
    data: singleUser
})