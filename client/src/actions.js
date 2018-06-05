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