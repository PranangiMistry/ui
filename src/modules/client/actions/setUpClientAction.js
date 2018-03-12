const URL_NEW_CLIENT = 'http://localhost:9797/webapp/setupclient';
import { ADD_NEW_CLIENT_SUCCESS , ADD_NEW_CLIENT_ERROR } from "../../../constants";
/*-----------------------------------------
                 add new client(set up client)
--------------------------------------------*/

export const addnewClient = (data) => async dispatch => {
    if (data.isActive === true) {
        data.isActive = 1;
    }
    else {
        data.isActive = 0;
    }
        const response = await fetch(URL_NEW_CLIENT, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responceBody = await response.json();
        console.log("action responce======",responceBody);
        dispatch(addNewClientSuccess(responceBody));
}

export const addNewClientSuccess = (response) => ({
    type: ADD_NEW_CLIENT_SUCCESS,
    payload: response
})
