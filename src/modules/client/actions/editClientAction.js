import {GET_EDIT_CLIENT,UPDATE_EDIT_CLIENT,CLIENT_NAME,CLIENT_CODE,CLIENT_STREETNAME1,CLIENT_STREETNAME2,CLIENT_CITY,CLIENT_STATE
    ,CLIENT_COUNTRY,CLIENT_ZIP_CODE,CLIENT_REPORT_TO_NAME,CLIENT_REPORT_TO_EMAIL,CLIENT_REPORT_TO_CELL
,CLIENT_REPORT_TO_PHONE,GET_ALL_CLIENT} from '../../../constants';

const URL='http://localhost:9797/webapp/setupclient';
const URL_UPDATE='http://localhost:9797/webapp/setupclient/update';

export const getAllClientData = () => async dispatch => {
  
        const response = await fetch(`${URL}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getClientData(responseBody));
    
}
export const getClientData = responseBody => ({
    type: GET_ALL_CLIENT,
    payload: responseBody
})
/*-----------------------------------------------------------------------------------------

--------------------------------------get data to be edit from client id---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getEditClientData = (ID) => async dispatch => {
    const response = await fetch(`${URL}/${ID}`, { method: 'GET' })
    const responseBody = await response.json();
   dispatch(getEditClientDataSuccess(responseBody));
}
export const getEditClientDataSuccess = responseBody => ({
type: GET_EDIT_CLIENT,
payload: responseBody
})

/*-----------------------------------------------------------------------------------------

--------------------------------------updare data to client id---------------------------------------

-------------------------------------------------------------------------------------------*/

export const updateEditClient = (ID) => async (dispatch, getState) => {
    let data = getState().editClient;
    //data.ClientId = ID;
    let newData={
        clientID:data[0].clientId,
        clientName:data[0].clientName,
        clientCode:data[0].clientCode,
        streetName1:data[0].streetName1,
        streetName2:data[0].streetName2,
        city:data[0].city,
        state:data[0].state, 
        country:data[0].country,
        zipCode:data[0].zipCode,
        reportToName:data[1].reportToName,
        reportToEmail:data[1].reportToEmail,
        reportToCell:data[1].reportToCell,
        reportToPhone:data[1].reportToPhone
    }
        const response = await fetch(`${URL_UPDATE}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        const responseBody = await response.json()
        dispatch(updateEditClientSuccess(responseBody));
        dispatch(getAllClientData());
    }

export const updateEditClientSuccess = (responseBody) => ({
    type: UPDATE_EDIT_CLIENT,
    payload: responseBody
})

/*-----------------------------------------------------------------------------------------

--------------------------------------update props---------------------------------------

-------------------------------------------------------------------------------------------*/

export const changeClientName = data => ({
    type: CLIENT_NAME,
    payload: data
})

export const changeClientCode = data => ({
    type: CLIENT_CODE,
    payload: data
})

export const changeStreetName1 = data => ({
    type: CLIENT_STREETNAME1,
    payload: data
})

export const changeStreetName2 = data => ({
    type: CLIENT_STREETNAME2,
    payload: data
})

export const changeCity = data => ({
    type: CLIENT_CITY,
    payload: data
})

export const changeState = data => ({
    type: CLIENT_STATE,
    payload: data
})

export const changeCountry = data => ({
    type: CLIENT_COUNTRY,
    payload: data
})

export const changeZipCode = data => ({
    type: CLIENT_ZIP_CODE,
    payload: data
})

export const changeReportToName = data => ({
    type: CLIENT_REPORT_TO_NAME,
    payload: data
})

export const changeReportToEmail= data => ({
    type: CLIENT_REPORT_TO_EMAIL,
    payload: data
})

export const changeReportToCell = data => ({
    type: CLIENT_REPORT_TO_CELL,
    payload: data
})

export const changeReportToPhone= data => ({
    type: CLIENT_REPORT_TO_PHONE,
    payload: data
})
