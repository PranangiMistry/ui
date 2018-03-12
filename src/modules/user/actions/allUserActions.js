import { DELETE_USER_PERMANENT_SUCCESS,GET_ALL_USERS_SUCCESS,GET_ALL_USERS_ERROR,DELETE_USER_ERROR,DELETE_USER_SUCCESS} from '../../../constants'
const URL_ALL_USERS = 'http://localhost:9797/webapp/setupUser'
/*-----------------------------------------------------------------------------------------

--------------------------------------all  user---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getAllUsers = () => async dispatch => {
    try {
        const response = await fetch(`${URL_ALL_USERS}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getAllUsersSuccess(responseBody));
    }
    catch (error) {
        dispatch(getAllUsersError());
    }
}
export const getAllUsersSuccess = responseBody => ({
    type: GET_ALL_USERS_SUCCESS,
    payload: responseBody
})
export const getAllUsersError = ()=> ({
    type: GET_ALL_USERS_ERROR,
    payload: "ERROR"
})

/*-----------------------------------------------------------------------------------------

--------------------------------------delete  user---------------------------------------

-------------------------------------------------------------------------------------------*/

export const deleteUser = (userId,uIsActive) => async (dispatch) => {
    let data={}
    data.userId=userId;
    if(uIsActive===true)
    {
    data.uIsActive=0;
    }
    else{
    data.uIsActive=1;
    }
    try {
        const response = await fetch(`http://localhost:9797/webapp/setupUser/deleteUser`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseBody = await response.json();
        dispatch(deleteUserSuccess(responseBody));
        dispatch(getAllUsers());
    }
    catch (error) {
        dispatch(deleteUserError());
    }
}
export const deleteUserSuccess = responseBody => ({
    type: DELETE_USER_SUCCESS,
    payload: responseBody
})
export const deleteUserError = () => ({
    type: DELETE_USER_ERROR,
    payload: "ERROR"
})

/*-----------------------------------------------------------------------------------------

--------------------------------------delete  user---------------------------------------

-------------------------------------------------------------------------------------------*/
export const delUserPermanent = (userId) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:9797/webapp/setupUser/${userId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            },
        })
        const responseBody = await response.json();
        dispatch(delUserPermanentSuccess(responseBody));
        dispatch(getAllUsers());
    }
    catch (error) {
        //dispatch(deleteUserError());
    }
}
export const delUserPermanentSuccess = responseBody => ({
    type: DELETE_USER_PERMANENT_SUCCESS,
    payload: responseBody
})