import { ACTIVITY_DROPDOWN} from '../../../constants'
const URL_ACTIVITY_LIST = 'http://localhost:9797/webapp/dropdown/activityDropdown'
/*-----------------------------------------------------------------------------------------

--------------------------------------project dropdown---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getActivityDropdown = () => async dispatch => {
        const response = await fetch(`${URL_ACTIVITY_LIST}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getActivityDropdownResponse(responseBody));
}

export const getActivityDropdownResponse = responseBody => ({
    type: ACTIVITY_DROPDOWN,
    payload: responseBody
})