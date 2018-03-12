const URL_NEW_VENDOR = 'http://localhost:9797/webapp/setupvendor';
import { ADD_NEW_VENDOR } from "../../../constants";
/*-----------------------------------------
                 add new vendor(set up vendor)
--------------------------------------------*/

export const addnewVendor = (data) => async dispatch => {
      const response = await fetch(URL_NEW_VENDOR, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        response.json().then(data => {
            console.log('******',data);
            dispatch(addNewVendorSuccess(data));
        });
        
       
}

export const addNewVendorSuccess = (response) => ({
    type: ADD_NEW_VENDOR,
    payload: response
})
