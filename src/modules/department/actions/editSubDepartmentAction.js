import { GET_EDIT_SUBDEPARTMENT, UPDATE_SUBDEPARTMENT } from '../../../constants';
import { getAllSubDepartments } from '../../department/actions/allSubDepartmentActions';

const URL = 'http://localhost:9797/webapp/setupSubDepartment';
const URL_UPDATE = 'http://localhost:9797/webapp/setupSubDepartment/updateSubDepartment';

export const getEditSubDepartmentData = (ID) => async dispatch => {
    const response = await fetch(`${URL}/${ID}`, { method: 'GET' })
    const responseBody = await response.json();
    dispatch(getEditSubDepartmentDataSuccess(responseBody));
}
export const getEditSubDepartmentDataSuccess = responseBody => ({
    type: GET_EDIT_SUBDEPARTMENT,
    payload: responseBody
})

export const updateSubDepartment = (data) => async dispatch => {

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
    dispatch(getAllSubDepartments());

}
export const updateSuceess = responseBody => ({
    type: UPDATE_SUBDEPARTMENT,
    payload: responseBody
})
