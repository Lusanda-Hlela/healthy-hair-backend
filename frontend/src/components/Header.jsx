import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">NexusShop</Link>
      </div>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart 🛒</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
