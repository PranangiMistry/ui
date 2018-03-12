import { SUBDEPARTMENT_DEPARTMENT_DROPDOWN} from '../../../constants'
const URL_DEPARTMENT_LIST = 'http://localhost:9797/webapp/dropdown/departmentDropdown'
/*-----------------------------------------------------------------------------------------

--------------------------------------client dropdown---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getDepartmentDropdown = () => async dispatch => {
        const response = await fetch(`${URL_DEPARTMENT_LIST}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(departmentDropdownResponse(responseBody));
}

export const departmentDropdownResponse = responseBody => ({
    type: SUBDEPARTMENT_DEPARTMENT_DROPDOWN,
    payload: responseBody
})