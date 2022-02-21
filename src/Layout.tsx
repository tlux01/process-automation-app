import { Outlet } from "react-router";
import SideNavDrawer from "./components/nav/SideNavDrawer";

function Layout() {
  return (
    <div className="flex min-h-screen">
      <SideNavDrawer />
      <div className="bg-gray-200 flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
