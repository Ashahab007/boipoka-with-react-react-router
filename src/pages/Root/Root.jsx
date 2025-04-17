import NavBar from "../../components/Header/NavBar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

// 2.1 Created Root component along with Navbar Footer and implemented it in Root component.
const Root = () => {
  return (
    <div>
      <NavBar></NavBar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Root;
