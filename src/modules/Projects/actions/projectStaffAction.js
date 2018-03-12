import {ADD_PROJECT_STAFF} from '../../../constants';
const URL_ADD_STAFF = 'http://localhost:9797/webapp/setupProject/projectStaff'
/*-----------------------------------------
                 add staff
--------------------------------------------*/

export const addProjectStaff = (data) => async (dispatch,getState) => {
    data.supervisor1 = getState().supervisorDropdown.l1;
    data.supervisor2  = getState().supervisorDropdown.l2;
    data.supervisor3  = getState().supervisorDropdown.l3;
        const response = await fetch(URL_ADD_STAFF, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        dispatch(addProjectStaffSuccess());
}

export const addProjectStaffSuccess = () => ({
    type: ADD_PROJECT_STAFF,
    payload: "success"
})