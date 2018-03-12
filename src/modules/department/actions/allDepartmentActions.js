import {GET_DEPARTMENTS,GET_ALL_DEPARTMENTS_SUCCESS,ACTIVE_DEACTIVE_DEPARTMENT,DELETE_DEPARTMENT_PERMANENT} from '../../../constants'
const URL_ALL_DEPARTMENTS = 'http://localhost:9797/webapp/setupDepartment/alldepartments'
/*-----------------------------------------------------------------------------------------

--------------------------------------all  departments---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getAllDepartments = () => async dispatch => {
    console.log("called")
    try {
        const response = await fetch(`${URL_ALL_DEPARTMENTS}`, { method: 'GET' })
        const responseBody = await response.json();
        console.log("response : ",responseBody)
        dispatch(getAllDepartmentsSuccess(responseBody));
    }
    catch (error) {
        console.log("error")
        dispatch(getAllDepartmentsError());
    }
}
export const getAllDepartmentsSuccess = responseBody => ({
    type: GET_ALL_DEPARTMENTS_SUCCESS,
    payload: responseBody
})

/*-----------------------------------------------------------------------------------------

--------------------------------------ACtive/de active Department---------------------------------------

-------------------------------------------------------------------------------------------*/

export const activeDeActiveDepartment=(departmentId,isActive)=>async (dispatch) => {
    
    let data={}

    data.departmentId=departmentId;
    if(isActive===true)
    {
    data.dIsActive=0;
    }
    else{
    data.dIsActive=1;
    }

    const response = await fetch(`http://localhost:9797/webapp/setupDepartment/updateActiveDeActive`, {
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
    type: ACTIVE_DEACTIVE_DEPARTMENT,
    payload: responseBody
})

/*-----------------------------------------------------------------------------------------

--------------------------------------delete  department---------------------------------------

-------------------------------------------------------------------------------------------*/
export const deleteDepartmentPermanent = (departmentId) => async (dispatch) => {
 
        const response = await fetch(`http://localhost:9797/webapp/setupDepartment/${departmentId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            },
        })
        const responseBody = await response.json();

        dispatch(deleteDepartmentSuccess(responseBody));
        dispatch(getAllDepartments());
    
}
export const deleteDepartmentSuccess = responseBody => ({
    type: DELETE_DEPARTMENT_PERMANENT,
    payload: responseBody
})
// })