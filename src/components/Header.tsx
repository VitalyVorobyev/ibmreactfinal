import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isProducts = location.pathname === "/products";
    const isCart = location.pathname === "/cart";

    return (
        <header className="navbar">
            <div className="navbar__logo">
                <Link to="/">Paradise Nursery</Link>
            </div>
            <nav className="navbar__nav">
                <Link
                    className={`navbar__link ${isHome ? "navbar__link--disabled" : ""}`}
                    to="/"
                    onClick={(e) => isHome && e.preventDefault()}
                >
                    Home
                </Link>
                <Link
                    className={`navbar__link ${isProducts ? "navbar__link--disabled" : ""}`}
                    to="/products"
                    onClick={(e) => isProducts && e.preventDefault()}
                >
                    Products
                </Link>
                <Link
                    className={`navbar__link ${isCart ? "navbar__link--disabled" : ""}`}
                    to="/cart"
                    onClick={(e) => isCart && e.preventDefault()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="cartIcon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M7 4a1 1 0 00-1 1v1H4a1 1 0 000 2h1.18l1.724 8.618a3 3 0 002.955 2.382h7.726a3 3 0 002.955-2.382L21 8h-2a1 1 0 100 2h1.1l-1.6 6.4H8.6L7 6H5v-.999A1 1 0 006 4h1z" />
                        <circle cx="9" cy="20" r="2" />
                        <circle cx="17" cy="20" r="2" />
                    </svg>
                    ({3})
                </Link>
            </nav>
        </header>
    );
}
