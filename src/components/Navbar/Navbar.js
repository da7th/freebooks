import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className="nav-menu">
                <a href="/" className="navbar-category">New Books</a>
                <a href="/" className="navbar-category">Best Sellers</a>
                <a href="/" className="navbar-category">Juvenile</a>
                <a href="/" className="navbar-category">Didatic</a>
                <a href="/" className="navbar-category">About Us</a>
            </nav>
        </div>
    );
}

export default Navbar;