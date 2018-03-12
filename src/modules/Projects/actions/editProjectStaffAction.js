import { GET_EDIT_PROJ_STAFF, UPDATE_PROJ_STAFF_SUCCESS,TS_START_DATE, TS_END_DATE, WEEK_OFF1, WEEK_OFF2, TS_SPLIT_DATE, WEEK_START_DAY, TS_TYPE, SUPERVISOR_DROPDOWN, SUPERVISOR_1, SUPERVISOR_2, SUPERVISOR_3 } from '../../../constants';
import { formatDate, parseDate } from "react-day-picker/moment";

const URL_EDIT_STAFF = 'http://localhost:9797/webapp/setupProject/editProjectStaff'
/*-----------------------------------------
                 add staff
--------------------------------------------*/
export const getEditProjectStaffData = (ID) => async dispatch => {
    const response = await fetch(`${URL_EDIT_STAFF}/${ID}`, { method: 'GET' })
    const responseBody = await response.json();
    dispatch(getEditProjectStaffDataSuccess(responseBody));
}
export const getEditProjectStaffDataSuccess = responseBody => ({
    type: GET_EDIT_PROJ_STAFF,
    payload: responseBody
})



export const updateProjectStaff = (listDeliverables) => async (dispatch, getState) => {
    let data = {};
    data.listDeliverables = listDeliverables;
    data.projStaffId=getState().editProjectStaffData[0].projStaffId;
    data.supervisor1=getState().editProjectStaffData[0].supervisor1;
    data.supervisor2=getState().editProjectStaffData[0].supervisor2;
    data.supervisor3=getState().editProjectStaffData[0].supervisor3;
    data.tsEndDate=formatDate(getState().editProjectStaffData[0].tsEndDate, "DD-MMM-YYYY");
    data.tsSplitDate=formatDate(getState().editProjectStaffData[0].tsSplitDate, "DD-MMM-YYYY");
    data.tsStartDate=formatDate(getState().editProjectStaffData[0].tsStartDate, "DD-MMM-YYYY");
    data.timeSheetType=getState().editProjectStaffData[0].tsType;
    data.weekOff1=getState().editProjectStaffData[0].weekOff1;
    data.weekOff2=getState().editProjectStaffData[0].weekOff2;
    data.weekStartDay=getState().editProjectStaffData[0].weekStartDay;

     try {
        const response = await fetch(`http://localhost:9797/webapp/setupProject/updateProjectStaff`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseBody = await response.json();
        dispatch(updateProjectStaffSuccess(responseBody));
      //  dispatch(getAllUsers());
    }
    catch (error) {
    }
}
export const updateProjectStaffSuccess = responseBody => ({
    type: UPDATE_PROJ_STAFF_SUCCESS,
    payload: responseBody
})











export const changeTsStartDate = data => ({
    type: TS_START_DATE,
    payload: data
})
export const changeTsEndDate = data => ({
    type: TS_END_DATE,
    payload: data
})
export const changeWeekOff1 = data => ({
    type: WEEK_OFF1,
    payload: data
})
export const changeWeekOff2 = data => ({
    type: WEEK_OFF2,
    payload: data
})
export const changeTsSplitDate = data => ({
    type: TS_SPLIT_DATE,
    payload: data
})
export const changeWeekStartDay = data => ({
    type: WEEK_START_DAY,
    payload: data
})
export const changeTsType = data => ({
    type: TS_TYPE,
    payload: data
})
export const changeSupervisor1 = data => ({
    type: SUPERVISOR_1,
    payload: data
})
export const changeSupervisor2 = data => ({
    type: SUPERVISOR_2,
    payload: data
})
export const changeSupervisor3 = data => ({
    type: SUPERVISOR_3,
    payload: data
})