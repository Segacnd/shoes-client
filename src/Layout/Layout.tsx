import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import DrawerMUI from "../DrawerMUI/DrawerMUI";
import ReactDOM from "react-dom";
function Layout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Layout;
