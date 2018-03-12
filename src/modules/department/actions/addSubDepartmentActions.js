import { ADD_SUBDEPARTMENT } from '../../../constants'
import {getAllSubDepartments} from '../../department/actions/allSubDepartmentActions'

export const addNewSubDepartment = (data) => async (dispatch) => {
    
        const response = await fetch('http://localhost:9797/webapp/setupSubDepartment', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseBody = await response.json();
        dispatch(addSubDepartmentResponse(responseBody));
        dispatch(getAllSubDepartments())
    
}
export const addSubDepartmentResponse = responseBody => ({
    type: ADD_SUBDEPARTMENT,
    payload: responseBody
})