import { GET_PROFILE_SUCCESS, GET_PROFILE_ERROR, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_ERROR, UEMAIL, CITY, COUNTRY, STATE, STREETNAME1, STREETNAME2, UFIRSTNAME, ULASTNAME, UPHONE, UPHONE2 } from '../../../constants'
const URL_USER_PROFILE = 'http://localhost:9797/webapp/setupUser'

/*-----------------------------------------------------------------------------------------

--------------------------------------get profile---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getProfileData = () => async (dispatch,getState) => {
    let ID =getState().login.userId;
    try {
        const response = await fetch(`${URL_USER_PROFILE}/${ID}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getProfileDataSuccess(responseBody));
    }
    catch (error) {
        dispatch(getProfileDataError(response));
    }
}
export const getProfileDataSuccess = responseBody => ({
    type: GET_PROFILE_SUCCESS,
    payload: responseBody
})
export const getProfileDataError = (response) => ({
    type: GET_PROFILE_ERROR,
    payload: response
})

/*-----------------------------------------------------------------------------------------

--------------------------------------updateProfile---------------------------------------

-------------------------------------------------------------------------------------------*/

export const updateProfile = () => async (dispatch, getState) => {
    let ID =getState().login.userId;
    let data = getState().userProfile[0];
    data.userId = ID;
    data.isSupervisor=0;
    data.isAdmin=0;
    data.isProjectManager=0;
    data.isEmployee=0;
    data.isVendor=0;

    try {
        const response = await fetch(`${URL_USER_PROFILE}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseBody = await response.json();
        dispatch(updateProfileSuccess(responseBody));
    }
    catch (error) {
        dispatch(updateProfileError());
    }
}
export const updateProfileSuccess = responseBody => ({
    type: UPDATE_PROFILE_SUCCESS,
    payload: "success"
})
export const updateProfileError = () => ({
    type: UPDATE_PROFILE_ERROR,
    payload: "error"
})
/*-----------------------------------------------------------------------------------------

--------------------------------------update props---------------------------------------

-------------------------------------------------------------------------------------------*/
export const changeuEmail = data => ({
    type: UEMAIL,
    payload: data
})
export const changeCity = data => ({
    type: CITY,
    payload: data
})
export const changeCountry = data => ({
    type: COUNTRY,
    payload: data
})
export const changeState = data => ({
    type: STATE,
    payload: data
})
export const changeStreetName1 = data => ({
    type: STREETNAME1,
    payload: data
})
export const changeStreetName2 = data => ({
    type: STREETNAME2,
    payload: data
})
export const changeuFirstName = data => ({
    type: UFIRSTNAME,
    payload: data
})
export const changeuLastName = data => ({
    type: ULASTNAME,
    payload: data
})
export const changeuPhone = data => ({
    type: UPHONE,
    payload: data
})
export const changeuPhone2 = data => ({
    type: UPHONE2,
    payload: data
})