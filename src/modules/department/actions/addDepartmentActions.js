import { ADD_DEPARTMENT } from '../../../constants'
import {getAllDepartments} from '../../department/actions/addSubDepartmentActions'

export const addNewDepartment = (data) => async (dispatch) => {
        const response = await fetch('http://localhost:9797/webapp/setupDepartment', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseBody = await response.json();
        dispatch(addDepartmentResponse(responseBody));
        dispatch(getAllDepartments());
    
}
export const addDepartmentResponse = responseBody => ({
    type: ADD_DEPARTMENT,
    payload: responseBody
})