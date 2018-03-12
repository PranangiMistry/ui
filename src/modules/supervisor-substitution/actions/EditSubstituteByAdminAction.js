import {GET_EDIT_SUPERVISOR_SUBSTITUTE,CHANGE_SUPERVISOR,CHANGE_USER,CHANGE_NAME_USER,CHANGE_START_DATE,CHANGE_NAME_SUPERVISOR,CHANGE_END_DATE,CHANGE_SEND_EMAIL,UPDATE_EDIT_SUPERVISOR_SUBSTITUTE } from '../../../constants';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from "react-day-picker/moment";

const URL='http://localhost:9797/webapp/SupervisorSubstitution/retriveBy';
const URL_UPDATE='http://localhost:9797/webapp/SupervisorSubstitution/update'

export const getEdituSupervisorSubstitteData = (ID) => async dispatch => {
    const response = await fetch(`${URL}/${ID}`, { method: 'GET' })
    const responseBody = await response.json();
   dispatch(getEditSupervisorSubstitteDataSuccess(responseBody));
}

export const getEditSupervisorSubstitteDataSuccess = responseBody => ({
type: GET_EDIT_SUPERVISOR_SUBSTITUTE, 
payload: responseBody
}) 

export const changeSupevisor = data => ({
    type: CHANGE_SUPERVISOR,
    payload: data
}) 

export const changeUser = data => ({
    type: CHANGE_USER,
    payload: data
}) 

export const changeStartDate= data => ({
    type: CHANGE_START_DATE,
    payload: data
}) 

export const changeEndDate = data => ({
    type: CHANGE_END_DATE,
    payload: data
}) 

export const changeSendEmail = data => ({
    type: CHANGE_SEND_EMAIL,
    payload: data
}) 

export const changeSupervisorName =data =>({
    type: CHANGE_NAME_SUPERVISOR,
    payload: data
})

export const changeUserName =data =>({
    type: CHANGE_NAME_USER,
    payload: data
})



export const updateEdituSupervisorSubstitteData = (ID) => async (dispatch, getState) => {
    // let data = getState().EditSubstituteByAdmin[0];
    let data={
        supervisorSubstitutionId:ID,
        supervisorId:getState().EditSubstituteByAdmin[0].supervisorId,
        userId:getState().EditSubstituteByAdmin[0].userId,
        startDate:formatDate(getState().EditSubstituteByAdmin[0].startDate, "DD-MMM-YYYY"),
        endDate:formatDate(getState().EditSubstituteByAdmin[0].endDate, "DD-MMM-YYYY"),
        // sendEmail:getState().EditSubstituteByAdmin[0].sendEmail

    }
    let sendEmail=getState().EditSubstituteByAdmin[0].sendEmail
    if(sendEmail===true)
    {
        data.sendEmail=1;
    }
    if(sendEmail===false)
    {
        data.sendEmail=0;
    }
        const response = await fetch(`${URL_UPDATE}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseBody = await response.json().then(data => {
        });
        dispatch(updateEdituSupervisorSubstitteDataSuccess(responseBody));
        // dispatch(getAllVendorData());
    }

export const updateEdituSupervisorSubstitteDataSuccess = (responseBody) => ({
    type: UPDATE_EDIT_SUPERVISOR_SUBSTITUTE,
    payload: responseBody
})