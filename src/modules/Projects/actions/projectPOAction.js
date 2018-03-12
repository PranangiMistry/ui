const URL = 'http://localhost:9797/webapp/payOrder';
import { ADD_PROJECT_PAY_ORDER } from "../../../constants";
/*-----------------------------------------
                 pay order insert
--------------------------------------------*/

export const payOrder = (data) => async dispatch => {
        const response = await fetch(URL, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        response.json().then(data => {
        });
        
        dispatch(insertPayOrder(response));
}

export const insertPayOrder = (response) => ({
    type: ADD_PROJECT_PAY_ORDER,
    payload: response
})
