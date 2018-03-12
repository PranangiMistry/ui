import {ADD_PROJECT_ACTIVITY} from '../../../constants';
const URL_ADD_ACTIVITY = 'http://localhost:9797/webapp/setupProject/activity'
/*-----------------------------------------
                 add staff
--------------------------------------------*/

export const addProjectActivity = (data) => async dispatch => {
        const response = await fetch(URL_ADD_ACTIVITY, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        dispatch(addProjectActivitySuccess());
}

export const addProjectActivitySuccess = () => ({
    type: ADD_PROJECT_ACTIVITY,
    payload: "success"
})