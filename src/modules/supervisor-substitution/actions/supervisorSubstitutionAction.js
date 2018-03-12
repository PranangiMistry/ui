const URL_INSERT_SUBDTITUTION = 'http://localhost:9797/webapp/SupervisorSubstitution';
import { ADD_SUBSTITUTION } from "../../../constants";
/*-----------------------------------------
                substitute supervisor
--------------------------------------------*/

export const addSubstitution = (data) => async dispatch => {
    if (data.sendEmail === true) {
        data.sendEmail = 1;
    }
    else {
        data.sendEmail = 0;
    }
        const response = await fetch(URL_INSERT_SUBDTITUTION, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        response.json().then(data => {
        });
        
        dispatch(addNewSubstitution(response));
}

export const addNewSubstitution = (response) => ({
    type: ADD_SUBSTITUTION,
    payload: response
})
