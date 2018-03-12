import { UPDATE_PROJECT_SUCCESS,GET_EDIT_PROJECT,P_IS_ACTIVE,P_PROJECT_TYPE ,P_START_DATE,P_END_DATE,P_CLIENT_NAME,P_DEPT_NAME,P_SUB_DEPT_NAME,P_PROJECT_NAME} from '../../../constants';
import { formatDate, parseDate } from "react-day-picker/moment";

const URL_EDIT_PROJECT = 'http://localhost:9797/webapp/setupProject'

/*-----------------------------------------------------------------------------------------

--------------------------------------get project---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getEditProjectData = (ID) => async dispatch => {
        const response = await fetch(`${URL_EDIT_PROJECT}/${ID}`, { method: 'GET' })
        const responseBody = await response.json();
       dispatch(getEditProjectDataSuccess(responseBody));
}
export const getEditProjectDataSuccess = responseBody => ({
    type: GET_EDIT_PROJECT,
    payload: responseBody
})


export const updateProject = () => async (dispatch, getState) => {
    let data = getState().editProject[0];
    if(data.isActive===true)
        data.isActive=1;
    else
        data.isActive=0;
    
    data.projectStartDate=formatDate(data.projectStartDate, "DD-MMM-YYYY");
    data.projectEndDate=formatDate(data.projectEndDate, "DD-MMM-YYYY");
    try {
        const response = await fetch(`${URL_EDIT_PROJECT}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseBody = await response.json();
        dispatch(updateProjectSuccess(responseBody));
      //  dispatch(getAllUsers());
    }
    catch (error) {
    }
}
export const updateProjectSuccess = responseBody => ({
    type: UPDATE_PROJECT_SUCCESS,
    payload: responseBody
})


export const changeActive = data => ({
    type: P_IS_ACTIVE,
    payload: data
})
export const changeProjectType = data => ({
    type: P_PROJECT_TYPE,
    payload: data
})
export const changeStartDate = data => ({
    type: P_START_DATE,
    payload: data
})
export const changeEndDate = data =>({
    type:P_END_DATE,
    payload:data
}) 
export const changeClient= data =>({
    type:P_CLIENT_NAME,
    payload:data
})
export const changeDepartment= data =>({
    type:P_DEPT_NAME,
    payload:data
})
export const changeSubdepartment= data =>({
    type:P_SUB_DEPT_NAME,
    payload:data
})
export const changeProjectName= data =>({
    type:P_PROJECT_NAME,
    payload:data
})