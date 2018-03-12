import {GET_ALL_PROJECTS_SUCCESS,DELETE_PROJECT_PERMANENT_SUCCESS} from '../../../constants'
const URL_ALL_PROJECTS = 'http://localhost:9797/webapp/setupProject'
/*-----------------------------------------------------------------------------------------

--------------------------------------all  projects---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getAllProjects = () => async dispatch => {
    try {
        const response = await fetch(`${URL_ALL_PROJECTS}/allProjects`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getAllProjectsSuccess(responseBody));
    }
    catch (error) {
        dispatch(getAllProjectsError());
    }
}
export const getAllProjectsSuccess = responseBody => ({
    type: GET_ALL_PROJECTS_SUCCESS,
    payload: responseBody
})

// /*-----------------------------------------------------------------------------------------

// --------------------------------------delete  user---------------------------------------

// -------------------------------------------------------------------------------------------*/
export const delProjectPermanent = (projectId) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:9797/webapp/setupProject/${projectId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            },
        })
        const responseBody = await response.json();
        dispatch(delProjectPermanentSuccess(responseBody));
        dispatch(getAllProjects());
    }
    catch (error) {
    }
}
export const delProjectPermanentSuccess = responseBody => ({
    type: DELETE_PROJECT_PERMANENT_SUCCESS,
    payload: responseBody
})