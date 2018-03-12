import { GET_EDIT_DEPARTMENT, UPDATE_DEPARTMENT } from '../../../constants';
import { getAllDepartments } from '../../department/actions/addDepartmentActions';

const URL = 'http://localhost:9797/webapp/setupDepartment';
const URL_UPDATE = 'http://localhost:9797/webapp/setupDepartment/updateDepartment';

export const getEditDepartmentData = (ID) => async dispatch => {
    const response = await fetch(`${URL}/${ID}`, { method: 'GET' })
    const responseBody = await response.json();
    dispatch(getEditDepartmentDataSuccess(responseBody));
}
export const getEditDepartmentDataSuccess = responseBody => ({
    type: GET_EDIT_DEPARTMENT,
    payload: responseBody
})

export const updateDepartment = (data) => async dispatch => {

    const response = await fetch(`${URL_UPDATE}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const responseBody = await response.json();
    dispatch(updateSuceess(responseBody));
    dispatch(getAllDepartments());

}
export const updateSuceess = responseBody => ({
    type: UPDATE_DEPARTMENT,
    payload: responseBody
})
