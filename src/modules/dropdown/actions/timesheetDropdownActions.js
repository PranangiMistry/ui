import { GET_TIMESHEET_DROPDOWN } from '../../../constants'
const URL = 'http://localhost:9797/webapp/dropdown/timesheetByProject';
/*-----------------------------------------------------------------------------------------

--------------------------------------project dropdown---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getTimesheetDropdown = (projectId) => async (dispatch, getState) => {
    let ID = getState().login.userId;
    let data = {
        projectIdFk: projectId,
        userIdFk: ID
    }
    const response = await fetch(`${URL}`, { 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const responseBody = await response.json();
    dispatch(getTimesheetDropdownSuccess(responseBody));
}

export const getTimesheetDropdownSuccess = responseBody => ({
    type: GET_TIMESHEET_DROPDOWN,
    payload: responseBody
})

