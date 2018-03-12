import { GET_TIMESHEET} from '../../../constants'
const URL = 'http://localhost:9797/webapp/timesheet/getTimesheetByUser';
/*-----------------------------------------------------------------------------------------

--------------------------------------time sheet---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getTimesheet = () => async (dispatch,getState) => {
        let ID =getState().login.userId;
        console.log(ID);
        const response = await fetch(`${URL}/${ID}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getTimesheetSuccess(responseBody));
}

export const getTimesheetSuccess = responseBody => ({
    type: GET_TIMESHEET,
    payload: responseBody
})

