import { DEPARTMENT_CLIENT_DROPDOWN} from '../../../constants'
const URL_CLIENT_LIST = 'http://localhost:9797/webapp/dropdown/clientDropdown'
/*-----------------------------------------------------------------------------------------

--------------------------------------client dropdown---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getClientDropdown = () => async dispatch => {
        const response = await fetch(`${URL_CLIENT_LIST}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(clientDropdownResponse(responseBody));
}

export const clientDropdownResponse = responseBody => ({
    type: DEPARTMENT_CLIENT_DROPDOWN,
    payload: responseBody
})