import { PROJECT_DROPDOWN} from '../../../constants'
const URL_PROJECT_LIST = 'http://localhost:9797/webapp/dropdown/projectDropdown'
/*-----------------------------------------------------------------------------------------

--------------------------------------project dropdown---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getProjectDropdown = () => async dispatch => {
        const response = await fetch(`${URL_PROJECT_LIST}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getProjectDropdownResponse(responseBody));
}

export const getProjectDropdownResponse = responseBody => ({
    type: PROJECT_DROPDOWN,
    payload: responseBody
})