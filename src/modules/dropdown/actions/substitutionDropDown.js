import {SUBSTITUTION_DROPDOWN} from '../../../constants'
const URL= 'http://localhost:9797/webapp/SupervisorSubstitution/approverlist'
/*-----------------------------------------------------------------------------------------

--------------------------------------substitution DropDown dropdown---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getSubstitutionDropdown = () => async dispatch => {

        const response = await fetch(`${URL}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(SubstitutionDropdownResponse(responseBody));
}

export const SubstitutionDropdownResponse = responseBody => ({
    type: SUBSTITUTION_DROPDOWN,
    payload: responseBody
})