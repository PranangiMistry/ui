import {GET_ALL_VENDOR,GET_EDIT_VENDOR,UPDATE_EDIT_VENDOR,VENDOR_COMPANY_NAME,VENDOR_ID,
    VENDOR_STREET_NAME1,
    VENDOR_STREET_NAME2,VENDOR_CITY,VENDOR_STATE,VENDOR_COUNTRY,VENDOR_EMAIL,VENDOR_CELL,VENDOR_PHONE} from '../../../constants';

const URL='http://localhost:9797/webapp/setupvendor';

export const getAllVendorData = () => async dispatch => {
  
        const response = await fetch(`${URL}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getVendorData(responseBody));
    
}
export const getVendorData = responseBody => ({
    type: GET_ALL_VENDOR,
    payload: responseBody
})
/*-----------------------------------------------------------------------------------------

--------------------------------------get data to be edit from vendor id---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getEditVendorData = (ID) => async dispatch => {
    const response = await fetch(`${URL}/${ID}`, { method: 'GET' })
    const responseBody = await response.json();
   dispatch(getEditVendorDataSuccess(responseBody));
}
export const getEditVendorDataSuccess = responseBody => ({
type: GET_EDIT_VENDOR,
payload: responseBody
})

/*-----------------------------------------------------------------------------------------

--------------------------------------updare data to vendor id---------------------------------------

-------------------------------------------------------------------------------------------*/

export const updateEditVendor = (ID) => async (dispatch, getState) => {
    let data = getState().editVendor[0];
    data.vendorId = ID;

        const response = await fetch(`${URL}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseBody = await response.json().then(data => {
        });
        dispatch(updateEditVendorSuccess(responseBody));
        dispatch(getAllVendorData());
    }

export const updateEditVendorSuccess = (responseBody) => ({
    type: UPDATE_EDIT_VENDOR,
    payload: responseBody
})

/*-----------------------------------------------------------------------------------------

--------------------------------------update props---------------------------------------

-------------------------------------------------------------------------------------------*/

export const changeVendorCompanyName= data => ({
    type: VENDOR_COMPANY_NAME ,
    payload: data
})

export const changeVendorStreetName1= data => ({
    type: VENDOR_STREET_NAME1,
    payload: data
})

export const changeVendorStreetName2 = data => ({
    type: VENDOR_STREET_NAME2,
    payload: data
})

export const changeVendorCity = data => ({
    type: VENDOR_CITY,
    payload: data
})

export const changeVendorState = data => ({
    type: VENDOR_STATE,
    payload: data
})

export const changeVendorCountry = data => ({
    type: VENDOR_COUNTRY,
    payload: data
})


export const changeVendorEmail= data => ({
    type: VENDOR_EMAIL,
    payload: data
})

export const changeVendorCell = data => ({
    type: VENDOR_CELL,
    payload: data
})

export const changeVendorPhone= data => ({
    type: VENDOR_PHONE,
    payload: data
})
