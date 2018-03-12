import {GET_ALL_VENDOR,DELETE_VENDOR} from '../../../constants';

const URL='http://localhost:9797/webapp/setupvendor';

export const getAllVendorData = () => async dispatch => 
{
        const response = await fetch(`${URL}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getVendorData(responseBody));
    
}
export const getVendorData = responseBody => ({
    type: GET_ALL_VENDOR,
    payload: responseBody
})
/*-----------------------------------------------------------------------------------------

--------------------------------------delete  vedor---------------------------------------

-------------------------------------------------------------------------------------------*/
export const deleteVendor = (vendorId) => async (dispatch) => {
        const response = await fetch(`http://localhost:9797/webapp/setupvendor/${vendorId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            },
        })
        const responseBody = await response.json();

        dispatch(deleteVendorSuccess(responseBody));
        dispatch(getAllVendorData());
    
}
export const deleteVendorSuccess = responseBody => ({
    type: DELETE_VENDOR,
    payload: responseBody
})