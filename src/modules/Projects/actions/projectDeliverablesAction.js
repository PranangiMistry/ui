import {ADD_PROJECT_DELIVERABLE} from '../../../constants';
const URL_ADD_DELIVERABLE = 'http://localhost:9797/webapp/setupProject/projectDeliverable'
/*-----------------------------------------
                 add project deliverable
--------------------------------------------*/

export const addProjectDeliverable = (data) => async dispatch => {
        const response = await fetch(URL_ADD_DELIVERABLE, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        dispatch(addProjectDeliverableSuccess());
}

export const addProjectDeliverableSuccess = () => ({
    type: ADD_PROJECT_DELIVERABLE,
    payload: "success"
})