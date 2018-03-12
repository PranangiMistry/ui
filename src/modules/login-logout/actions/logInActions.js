import { DO_LOGIN } from '../../../constants'

export const doLogin = (auth) => async (dispatch) => {
        const response = await fetch('http://localhost:9797/webapp/setupUser/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(auth)
        })
        const responseBody = await response.json();
        dispatch(loginResponse(responseBody));
    
}
export const loginResponse = responseBody => ({
    type: DO_LOGIN,
    payload: responseBody
})