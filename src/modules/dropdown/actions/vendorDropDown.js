import { VENDOR_DROPDOWN} from '../../../constants'
const URL= 'http://localhost:9797/webapp/dropdown/vendorDropdown'
/*-----------------------------------------------------------------------------------------

--------------------------------------vendor dropdown---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getVendorDropdown = () => async dispatch => {
        const response = await fetch(`${URL}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(vendorDropdownResponse(responseBody));
}

export const vendorDropdownResponse = responseBody => ({
    type: VENDOR_DROPDOWN,
    payload: responseBody
})