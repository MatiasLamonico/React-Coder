import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className={"containerNavbar"}>
        <Link to="/">
          <h4>FMT</h4>
        </Link>
        <ul className="categories">
          <Link to="/">
            <li>Todas</li>
          </Link>
          <Link to="/category/Camisetas">
            <li>Camisetas</li>
          </Link>
          <Link to="/category/Botines">
            <li>Botines</li>
          </Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
