import {GET_ALL_CLIENT,DELETE_CLIENT_PERMANENT,ACTIVE_DEACTIVE_CLIENT} from '../../../constants';

const URL='http://localhost:9797/webapp/setupclient';

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

--------------------------------------ACtive/de active Client---------------------------------------

-------------------------------------------------------------------------------------------*/

export const activeDeActiveClient=(clientID,isActive)=>async (dispatch) => {
    
    let data={}

    data.clientID=clientID;
    if(isActive===true)
    {
    data.isActive=0;
    }
    else{
    data.isActive=1;
    }

    const response = await fetch(`http://localhost:9797/webapp/setupclient/updateActiveDeActive`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseBody = await response.json();
        dispatch(activeDeactiveSuceess(responseBody));

}
export const activeDeactiveSuceess = responseBody => ({
    type: ACTIVE_DEACTIVE_CLIENT,
    payload: responseBody
})
/*-----------------------------------------------------------------------------------------

--------------------------------------delete  client---------------------------------------

-------------------------------------------------------------------------------------------*/
export const deleteClientPermanent = (clientId) => async (dispatch) => {
 
        const response = await fetch(`http://localhost:9797/webapp/setupclient/${clientId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            },
        })
        const responseBody = await response.json();

        dispatch(deleteClientForEverSuccess(responseBody));
        dispatch(getAllClientData());
    
}
export const deleteClientForEverSuccess = responseBody => ({
    type: DELETE_CLIENT_PERMANENT,
    payload: responseBody
})