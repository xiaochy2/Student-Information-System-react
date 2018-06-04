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