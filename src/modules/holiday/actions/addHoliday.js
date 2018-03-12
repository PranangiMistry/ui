import { ADD_HOLIDAY } from '../../../constants'

export const addNewHoliday = (data) => async (dispatch) => {
    
        const response = await fetch('http://localhost:9797/webapp/holidays', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseBody = await response.json();
        dispatch(addHolidayResponse(responseBody));
    
}
export const addHolidayResponse = responseBody => ({
    type: ADD_HOLIDAY,
    payload: responseBody
})