import { ADD_PROJECT_SUCCESS } from '../../../constants'

export const addNewProject = (data) => async (dispatch) => {
    const response = await fetch('http://localhost:9797/webapp/setupProject', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const responseBody = await response.json();
    dispatch(addNewProjectSuccess(responseBody));

}
export const addNewProjectSuccess = responseBody => ({
    type: ADD_PROJECT_SUCCESS,
    payload: responseBody
})