import {ADD_NEW_USER_SUCCESS,ADD_NEW_USER_ERROR} from '../../../constants';
const URL_NEW_USER = 'http://localhost:9797/webapp/setupUser'
/*-----------------------------------------
                 add new user
--------------------------------------------*/

export const addNewUser = (data) => async dispatch => {
    if (data.uIsActive === true) {
        data.uIsActive = 1;
    }
    else {
        data.uIsActive = 0;
    }
    if (data.isAdmin === true) {
        data.isAdmin= 1;
    }
    else {
        data.isAdmin = 0;
    }
    if (data.isSupervisor === true) {
        data.isSupervisor= 1;
    }
    else {
        data.isSupervisor = 0;
    }
    if (data.isProjectManager === true) {
        data.isProjectManager= 1;
    }
    else {
        data.isProjectManager = 0;
    }
    if (data.isEmployee === true) {
        data.isEmployee= 1;
    }
    else {
        data.isEmployee = 0;
    }
    if (data.isVendor === true) {
        data.isVendor= 1;
    }
    else {
        data.isVendor = 0;
    }
    try {
        const response = await fetch(URL_NEW_USER, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        dispatch(addNewUserSuccess());
    }
    catch (error) {
        dispatch(addNewUserError());
    }
}

export const addNewUserSuccess = () => ({
    type: ADD_NEW_USER_SUCCESS,
    payload: "success"
})
export const addNewUserError = () => ({
    type: ADD_NEW_USER_ERROR,
    payload: "error"
})