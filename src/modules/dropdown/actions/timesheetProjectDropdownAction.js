import { GET_TIMESHEET_PROJECT_DROPDOWN} from '../../../constants'
const URL = 'http://localhost:9797/webapp/dropdown/projectDropdownByUser';
/*-----------------------------------------------------------------------------------------

--------------------------------------project dropdown---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getProjectDropdownByUser = () => async (dispatch,getState) => {
        let ID =getState().login.userId;
        const response = await fetch(`${URL}/${ID}`, { method: 'GET'})
        const responseBody = await response.json();
        dispatch(getProjectDropdownByUserSuccess(responseBody));
}

export const getProjectDropdownByUserSuccess = responseBody => ({
    type: GET_TIMESHEET_PROJECT_DROPDOWN,
    payload: responseBody
})

