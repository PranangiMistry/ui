import { CHANGE_PASSWORD } from '../../../constants'
const URL = 'http://localhost:9797/webapp/setupUser' 

export const changePassword = (data) => async (dispatch, getState) => {
    console.log("action get state",data)
        const response = await fetch(`${URL}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseBody = await response.json();
        dispatch(changePasswordSuccess(data));
    
}
export const changePasswordSuccess = data => ({
    type: CHANGE_PASSWORD,
    payload: data.uPassword
})