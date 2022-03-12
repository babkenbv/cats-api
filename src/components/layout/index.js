import { Link, Outlet } from "react-router-dom";
import Navbar from "../navbar";

const Layout = () => {
  return (
    <div>
      <nav>
        <Navbar>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </Navbar>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
