import { SUB_DEPARTMENT_DROPDOWN} from '../../../constants'
const URL_SUB_DEPT_LIST = 'http://localhost:9797/webapp/dropdown/subDepartmentDropdown'
/*-----------------------------------------------------------------------------------------

--------------------------------------deliverableDropdown ---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getSubdepartmentDropdown = () => async dispatch => {
        const response = await fetch(`${URL_SUB_DEPT_LIST}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getSubdepartmentDropdownResponse(responseBody));
}

export const getSubdepartmentDropdownResponse = responseBody => ({
    type: SUB_DEPARTMENT_DROPDOWN,
    payload: responseBody
})