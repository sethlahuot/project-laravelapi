import Profile from "../Components/adminpage/Profile";
import Dashboard from "../Components/adminpage/Dashboard";

const routes = [
    { path: "dashboard", name: "Dashboard", Component: Dashboard }, // ✅ No `/admin`
    { path: "profile", name: "Profile", Component: Profile }, // ✅ No `/admin`
];

export default routes;
