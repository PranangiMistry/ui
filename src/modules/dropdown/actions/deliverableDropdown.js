import { DELIVERABLE_DROPDOWN} from '../../../constants'
const URL_DELIVERABLE_LIST = 'http://localhost:9797/webapp/dropdown/deliverableDropdown'
/*-----------------------------------------------------------------------------------------

--------------------------------------deliverableDropdown ---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getDeliverableDropdown = () => async dispatch => {
        const response = await fetch(`${URL_DELIVERABLE_LIST}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getDeliverableDropdownResponse(responseBody));
}

export const getDeliverableDropdownResponse = responseBody => ({
    type: DELIVERABLE_DROPDOWN,
    payload: responseBody
})