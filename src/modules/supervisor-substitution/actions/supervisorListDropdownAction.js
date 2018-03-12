import { SUPERVISOR_LIST_DROPDOWN} from '../../../constants'
const URL = 'http://localhost:9797/webapp/dropdown/SuperviorSubstitute-supervisorDropDown'
/*-----------------------------------------------------------------------------------------

--------------------------------------supervisor dropdown for substitute supervisor---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getSupervisorDropdown = () => async dispatch => {
        const response = await fetch(`${URL}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getSupervisorDropdownResponse(responseBody));
}

export const getSupervisorDropdownResponse = responseBody => ({
    type: SUPERVISOR_LIST_DROPDOWN,
    payload: responseBody
})
