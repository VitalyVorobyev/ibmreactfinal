import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    return (
        <header className="navbar">
            <div className="navbar__logo">
                <Link to="/">Paradise Nursery</Link>
            </div>
            <nav className="navbar__nav">
                {location.pathname !== "/" && <Link className="navbar__link" to="/">Home</Link>}
                {location.pathname !== "/products" && <Link className="navbar__link" to="/products">Products</Link>}
                {location.pathname !== "/cart" && (
                    <Link className="navbar__link" to="/cart">
                        Cart ({3})
                    </Link>
                )}
            </nav>
        </header>
    );
}
