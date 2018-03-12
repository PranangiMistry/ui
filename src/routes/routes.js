import LogIn from '../modules/login-logout/views/logIn';
import LogOut from '../modules/login-logout/views/logOut';
import UserProfile from '../modules/user/views/userProfile';
import setUpClient from '../modules/client/views/setUpClient';
import NewUser from '../modules/user/views/newUser';
import AllUsers from '../modules/user/views/allUser';
import AllProject from '../modules/Projects/views/allProject';
import Home from '../modules/home/views/home';
import EditUser from '../modules/user/views/editUser';
import TimeSheet from '../modules/timesheet/views/timeSheet';
import Project from '../modules/Projects/views/project';
import ProjectStaff from '../modules/Projects/views/projectStaff';
import ProjectStaffDisplay from '../modules/Projects/views/projectStaffDisplay';
import EditClient from '../modules/client/views/editClient';
import EditProject from '../modules/Projects/views/editProject';
import AddDepartment from '../modules/department/views/addDepartments';
import AllDepartments from '../modules/department/views/allDepartments';
import EditDepartment from '../modules/department/views/editDepartment';
import AddSubDepartment from '../modules/department/views/addSubDepartments';
import AllSubDepartments from '../modules/department/views/allSubDepartments';
import EditSubDepartment from '../modules/department/views/editSubDepartment';
import ProjectActivity from '../modules/Projects/views/projectActivity';
import ProjectDeliverable from '../modules/Projects/views/projectDeliverables';
import Holidays from '../modules/holiday/views/holidaysEntry';
import ProjectPO from '../modules/Projects/views/projectPO';
import AllClients from '../modules/client/views/allClients';
import Vendor from '../modules/vendor/views/vendors';
import SetUpVendor from '../modules/vendor/views/setUpVendor';
import EditVendor from '../modules/vendor/views/editVendor';
import EditProjectStaff from '../modules/Projects/views/editProjectStaff';
//import WeeklyTimesheet from '../views/TimeSheet/weeklyTimesheet';
import SupervisorSubstitution from '../modules/supervisor-substitution/views/supervisorSubstitution'
import SubstituteByMe from '../modules/supervisor-substitution/views/substituteByMe'
import AllSupervisorSubstitution from '../modules/supervisor-substitution/views/allSupervisorSubstitution'
import EditSubstituteByAdmin from '../modules/supervisor-substitution/views/editSubstituteByAdmin'
import SupervisorSubstitutionForAdmin from '../modules/supervisor-substitution/views/supervisorSubstitutionForAdmin'
import EditSubstituteByMe from '../modules/supervisor-substitution/views/editSubstituteByMe';
import ChangePassword from '../modules/change-password/view/changePassword'
const appRoutes = [
    { path: "/holidays", component: Holidays },
    { path: "/editsubdepartment/:subDepartmentId", component: EditSubDepartment },
    { path: "/allsubdepartments", component: AllSubDepartments },
    { path: "/subDepartments", component: AddSubDepartment },
    { path: "/editdepartment/:departmentId", component: EditDepartment },
    { path: "/alldepartments", component: AllDepartments },
    { path: "/departments", component: AddDepartment },
    { path: "/userProfile", component: UserProfile },
    { path: "/allUsers", component: AllUsers },
    { path: "/allProject", component: AllProject },
    { path: "/projectStaffDisplay", component: ProjectStaffDisplay },
    { path: "/editUser/:userId", component: EditUser },
    { path: "/editProject/:projectId", component: EditProject },
    { path: "/editClient/:clientId", component: EditClient },
    { path: "/newUser", component: NewUser },
    { path: "/project", component: Project },
    { path: "/projectStaff", component: ProjectStaff },
    { path: "/editProjectStaff/:projStaffId", component: EditProjectStaff },
    { path: "/projectDeliverable", component: ProjectDeliverable },
    { path: "/projectActivity", component: ProjectActivity },
    { path: "/timeSheet", component: TimeSheet },
    // { path: "/weeklyTimesheet", component: WeeklyTimesheet },
    { path: "/logOut", component: LogOut },
    { path: "/allClients", component: AllClients },
    { path: "/setupclient", component: setUpClient },
    { path: "/projectPO", component: ProjectPO },
    { path: "/home", component: Home },
    { path: "/vendor", component: Vendor },
    { path: "/editVendor/:vendorId", component: EditVendor },
    { path: "/SetUpVendor", component: SetUpVendor },
    { path: "/supervisorSubstitution", component: SupervisorSubstitution },
    { path: "/SubstituteByMe", component: SubstituteByMe },
    {path:"/changePassword" , component:ChangePassword},
    { path: "/allSupervisorSubstitution", component: AllSupervisorSubstitution },
    { path: "/editSubstituteByMe/:supervisorSubstituteId", component: EditSubstituteByMe },
    { path: "/editSubstituteByAdmin/:supervisorSubstituteId", component: EditSubstituteByAdmin },
    { path: "/supervisorSubstitutionForAdmin", component: SupervisorSubstitutionForAdmin },
    { path: "/", component: LogIn },

];

export default appRoutes;
