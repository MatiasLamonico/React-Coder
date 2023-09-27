import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className={"containerNavbar"}>
      <h4>FMT</h4>
      <ul className="categories">
        <li>Todos los productos</li>
        <li>Remeras Retro</li>
        <li>Remeras Actuales</li>
      </ul>
      <CartWidget />
    </div>
  );
};
