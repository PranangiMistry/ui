import {GET_PROJECT_STAFF_DISPLAY,DELETE_PROJ_STAFF_SUCCESS} from '../../../constants'
const URL_PROJECT_STAFF = 'http://localhost:9797/webapp/setupProject'
/*-----------------------------------------------------------------------------------------

--------------------------------------all  projects---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getProjectStaffDisplay = () => async dispatch => {
    try {
        const response = await fetch(`${URL_PROJECT_STAFF}/projectStaffDisplay`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getProjectStaffDisplaySuccess(responseBody));
    }
    catch (error) {
    }
}
export const getProjectStaffDisplaySuccess = responseBody => ({
    type: GET_PROJECT_STAFF_DISPLAY,
    payload: responseBody
})
// export const getAllProjectsError = ()=> ({
//     type: GET_ALL_PROJECTS_ERROR,
//     payload: "ERROR"
// })
/*-----------------------------------------------------------------------------------------

--------------------------------------delete  user---------------------------------------

-------------------------------------------------------------------------------------------*/
export const delProjectStaff = (projectStaffId) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:9797/webapp/setupProject/delStaff/${projectStaffId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            },
        })
        const responseBody = await response.json();
        dispatch(delProjectStaffSuccess(responseBody));
        dispatch(getProjectStaffDisplay());
    }
    catch (error) {
    }
}
export const delProjectStaffSuccess = responseBody => ({
    type: DELETE_PROJ_STAFF_SUCCESS,
    payload: responseBody
})