import {GET_SUBDEPARTMENTS,GET_ALL_SUBDEPARTMENTS_SUCCESS,ACTIVE_DEACTIVE_SUBDEPARTMENT,DELETE_SUBDEPARTMENT_PERMANENT} from '../../../constants'
const URL_ALL_SUBDEPARTMENTS = 'http://localhost:9797/webapp/setupSubDepartment/allsubdepartments'
/*-----------------------------------------------------------------------------------------

--------------------------------------all  departments---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getAllSubDepartments = () => async dispatch => {
    try {
        const response = await fetch(`${URL_ALL_SUBDEPARTMENTS}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getAllSubDepartmentsSuccess(responseBody));
    }
    catch (error) {
        dispatch(getAllSubDepartmentsError());
    }
}
export const getAllSubDepartmentsSuccess = responseBody => ({
    type: GET_ALL_SUBDEPARTMENTS_SUCCESS,
    payload: responseBody
})

/*-----------------------------------------------------------------------------------------

--------------------------------------ACtive/de active Department---------------------------------------

-------------------------------------------------------------------------------------------*/

export const activeDeActiveSubDepartment=(subdepartmentId,isActive)=>async (dispatch) => {
    
    let data={}

    data.subDepartmentId=subdepartmentId;
    if(isActive===true)
    {
    data.dIsActive=0;
    }
    else{
    data.dIsActive=1;
    }

    const response = await fetch(`http://localhost:9797/webapp/setupSubDepartment/updateActiveDeActive`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseBody = await response.json();
        dispatch(activeDeactiveSuceess(responseBody));

}
export const activeDeactiveSuceess = responseBody => ({
    type: ACTIVE_DEACTIVE_SUBDEPARTMENT,
    payload: responseBody
})

/*-----------------------------------------------------------------------------------------

--------------------------------------delete  department---------------------------------------

-------------------------------------------------------------------------------------------*/
export const deleteSubDepartmentPermanent = (subDepartmentId) => async (dispatch) => {
 
        const response = await fetch(`http://localhost:9797/webapp/setupSubDepartment/${subDepartmentId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            },
        })
        const responseBody = await response.json();

        dispatch(deleteSubDepartmentSuccess(responseBody));
        dispatch(getAllSubDepartments());
    
}
export const deleteSubDepartmentSuccess = responseBody => ({
    type: DELETE_SUBDEPARTMENT_PERMANENT,
    payload: responseBody
})
// })