import { GET_ALL_HOLIDAYS,DELETE_HOLIDAY_SUCCESS } from '../../../constants'
const URL_ALL_HOLIDAYS = 'http://localhost:9797/webapp/holidays/viewholidays'
/*-----------------------------------------------------------------------------------------

--------------------------------------all  holidays---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getAllHolidays = () => async dispatch => {

        const response = await fetch(`${URL_ALL_HOLIDAYS}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getAllHolidaysResponse(responseBody));
   
}
export const getAllHolidaysResponse = responseBody => ({
    type: GET_ALL_HOLIDAYS,
    payload: responseBody
})

// /*-----------------------------------------------------------------------------------------

// --------------------------------------delete  holiday---------------------------------------

// -------------------------------------------------------------------------------------------*/

export const delHoliday = (Id) => async (dispatch) => {
        const response = await fetch(`http://localhost:9797/webapp/holidays/${Id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            },
        })
        const responseBody = await response.json();
        dispatch(delHolidaySuccess(responseBody));
        dispatch(getAllHolidays());
}
export const delHolidaySuccess = responseBody => ({
    type: DELETE_HOLIDAY_SUCCESS,
    payload: responseBody
})