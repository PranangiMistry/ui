import { EMPLOYEE_DROPDOWN} from '../../../constants'
const URL_PROJECT_LIST = 'http://localhost:9797/webapp/dropdown/employeeDropdown'
/*-----------------------------------------------------------------------------------------

--------------------------------------project dropdown---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getEmployeeDropdown = () => async dispatch => {
        const response = await fetch(`${URL_PROJECT_LIST}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getEmployeeDropdownResponse(responseBody));
}

export const getEmployeeDropdownResponse = responseBody => ({
    type: EMPLOYEE_DROPDOWN,
    payload: responseBody
})