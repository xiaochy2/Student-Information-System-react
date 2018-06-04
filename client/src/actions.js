import axios from 'axios';

export const log = info => dispatch => {
    axios.post('api/login', info)
        .then(
            res => {  
                dispatch({
                    type: 'LOAD_COMPLETE',
                    message: res.data.message
                });
            }
        )
        .catch(
            err => {
                dispatch({
                    type: 'SERVER_ERROR',
                    error: "Cannot connect to the server"
                });
            }
        )
}