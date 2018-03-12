import { combineReducers } from 'redux';
import userProfile from '../modules/user/reducers/userProfileReducer';
import setUpClient from '../modules/client/reducers/setUpClientReducer';
import newUser from '../modules/user/reducers/newUserReducer';
import login from '../modules/login-logout/reducers/loginReducer';
import allClients from '../modules/client/reducers/allClientsReduer';
import allUsers from '../modules/user/reducers/allUsersReducer';
import editUser from '../modules/user/reducers/editUserReducer';
import editClient from '../modules/client/reducers/editClientReducer';
import clientDropdown from '../modules/dropdown/reducers/clientDropdownReducer';
import vendorDropDown from '../modules/dropdown/reducers/vendorDropDownReducer';
import setUpVendor from '../modules/vendor/reducers/setUpVendorReducer';
import departmentData from '../modules/department/reducers/addDepartmentReducer';
import editVendor from '../modules/vendor/reducers/editVendorReducer';
import vendors from '../modules/vendor/reducers/vendorReducer';
import addProject from '../modules/Projects/reducers/addProjectReducer';
import departmentDropdown from '../modules/dropdown/reducers/departmentDropdownReducer';
import supervisorDropdown from '../modules/dropdown/reducers/supervisorDropdownReducer';
import projectDropdown from '../modules/dropdown/reducers/projectDropdownReducer';
import employeeDropdown from '../modules/dropdown/reducers/employeeDropdownReducer';
import projectStaff from '../modules/Projects/reducers/projectStaffReducer';
import projectActivity from '../modules/Projects/reducers/projectActivityReducer';
import activityDropdown from '../modules/dropdown/reducers/activityDropdownReducer';
import projectDeliverable from '../modules/Projects/reducers/projectDeliverablesReducer';
import deliverableDropdown from '../modules/dropdown/reducers/deliverableDropdownReducer';
import subDepartmentData from '../modules/department/reducers/addSubDepartmentReducer';
import holidayData from '../modules/holiday/reducers/addHolidayReducer';
import allHolidays from '../modules/holiday/reducers/view-delete-holidaysReducer';
import allProjects from '../modules/Projects/reducers/allProjectsReducer';
import projectStaffDisplayData from '../modules/Projects/reducers/projectStaffDisplayReducer';
import subDepartmentDropdown from '../modules/dropdown/reducers/subdepartmentDropdownReducer';
import editProject from '../modules/Projects/reducers/editProjectDataReducer';
import ProjectPO from '../modules/Projects/reducers/projectPOReducer';
import PaginationPage from '../modules/pagination/reducers/paginationReducer';
import editProjectStaffData from '../modules/Projects/reducers/editProjectStaffReducer';
import timesheet from '../modules/timesheet/reducers/timesheetReducer';
import SubstitutionDropDown from '../modules/dropdown/reducers/substitutionDropDownReducer';
import SupervisorSubstitution from '../modules/supervisor-substitution/reducers/supervisorSubstitutionReducer'
import SubstituteByMe from '../modules/supervisor-substitution/reducers/substituteByMeReducer';
import AllSupervisorSubstitute from '../modules/supervisor-substitution/reducers/allSupervisorSubstitutionReduer';
import SupervisorListDropDown from '../modules/dropdown/reducers/supervisorListDropdownReducer';
import EditSubstituteByAdmin from '../modules/supervisor-substitution/reducers/editSubstituteByAdminReducer'
import allDepartments from '../modules/department/reducers/allDepartmentsReducer';
import editDepartment from '../modules/department/reducers/editDepartmentReducer';
import allSubDepartments from '../modules/department/reducers/allSubDepartmentsReducer';
import editSubDepartment from '../modules/department/reducers/editSubDepartmentReducer';
import tsProjectDropdown from '../modules/dropdown/reducers/timesheetProjectDropdownReducer';
import timesheetDropdown from '../modules/dropdown/reducers/timesheetDropdownReducer';
import ErrorNotification from '../components/Notifications/errorNotificationReducer';
import ChangePassword from '../modules/change-password/reducer/changePasswordReduce'

const rootReducer = combineReducers({
    userProfile,
    newUser,
    login,
    setUpClient,
    allClients,
    allUsers,
    editUser,
    editClient,
    clientDropdown,
    departmentData,
    setUpVendor,
    vendors,
    editVendor,
    vendorDropDown,
    addProject,
    departmentDropdown,
    supervisorDropdown,
    projectDropdown,
    employeeDropdown,
    projectStaff,
    projectActivity,
    activityDropdown,
    projectDeliverable,
    deliverableDropdown,
    departmentDropdown,
    subDepartmentData,
    holidayData,
    allHolidays,
    addProject,
    subDepartmentDropdown,
    allProjects,
    editProject,
    ProjectPO,
    PaginationPage,
    projectStaffDisplayData,
    editProjectStaffData,
    timesheet,
    SubstitutionDropDown,
    SupervisorSubstitution,
    projectStaffDisplayData,
    SubstituteByMe,
    AllSupervisorSubstitute,
    SupervisorListDropDown,
    EditSubstituteByAdmin,
    allDepartments,
    editDepartment,
    allSubDepartments,
    editSubDepartment,
    projectStaffDisplayData,
    tsProjectDropdown,
    timesheetDropdown,
    ErrorNotification,ChangePassword
});

export default rootReducer;