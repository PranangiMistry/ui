import {IS_VENDOR,EDIT_PROJECT_MANAGER,EDIT_VENDOR_NAME,GET_EDIT_USER_SUCCESS,EDIT_ADMIN,EDIT_EMPLOYEE,EDIT_SUPERVISOR,UPDATE_EDIT_USER_SUCCESS} from '../../../constants'
import { getAllUsers } from '../../user/actions/allUserActions';
const URL_EDIT_PROFILE = 'http://localhost:9797/webapp/setupUser'

/*-----------------------------------------------------------------------------------------

--------------------------------------get profile---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getEditUserProfileData = (ID) => async dispatch => {
        const response = await fetch(`${URL_EDIT_PROFILE}/${ID}`, { method: 'GET' })
        const responseBody = await response.json();
       dispatch(getEditUserProfileDataSuccess(responseBody));
}
export const getEditUserProfileDataSuccess = responseBody => ({
    type: GET_EDIT_USER_SUCCESS,
    payload: responseBody
})

/*-----------------------------------------------------------------------------------------

--------------------------------------updateProfile---------------------------------------

-------------------------------------------------------------------------------------------*/
export const updateEditUser = (ID) => async (dispatch, getState) => {
    let data = getState().editUser[0];
    data.userId = ID;
    let isVendor=getState().editUser[0].isVendor;
    let isAdmin=getState().editUser[0].isAdmin;
    let isSupervisor=getState().editUser[0].isSupervisor;
    let isEmployee=getState().editUser[0].isEmployee;
    let isProjectManager=getState().editUser[0].isProjectManager;
    if(isVendor===true)
    {
        data.isVendor=1;
    }
    else
    {
        data.isVendor=0;
    }
    if(isAdmin===true)
    {
        data.isAdmin=1;
    }
    else
    {
        data.isAdmin=0;
    }
    if(isSupervisor===true)
    {
        data.isSupervisor=1;
    }
    else
    {
        data.isSupervisor=0;
    }
    if(isEmployee===true)
    {
        data.isEmployee=1;
    }
    else
    {
        data.isEmployee=0;
    }
    if(isProjectManager===true)
    {
        data.isProjectManager=1;
    }
    else
    {
        data.isProjectManager=0;
    }
    try {
        const response = await fetch(`${URL_EDIT_PROFILE}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseBody = await response.json();
        dispatch(updateEditUserSuccess(responseBody));
        dispatch(getAllUsers());
       // dispatch(getEditUserProfileData(ID));
    }
    catch (error) {
    }
}
export const updateEditUserSuccess = responseBody => ({
    type: UPDATE_EDIT_USER_SUCCESS,
    payload: responseBody
})
/*-----------------------------------------------------------------------------------------

--------------------------------------store update---------------------------------------

-------------------------------------------------------------------------------------------*/

export const changeEditAdmin = data => ({
    type: EDIT_ADMIN,
    payload: data
})
export const changeEditEmployee = data => ({
    type: EDIT_EMPLOYEE,
    payload: data
})
export const changeEditProjectManager = data => ({
    type: EDIT_PROJECT_MANAGER,
    payload: data
})
export const changeEditSupervisor = data => ({
    type: EDIT_SUPERVISOR,
    payload: data
})
export const changeIsVendor = data =>({
    type:IS_VENDOR,
    payload:data
}) 
export const changeVendor= data =>({
    type:EDIT_VENDOR_NAME,
    payload:data
})