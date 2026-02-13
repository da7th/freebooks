import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className="nav-menu">
                <a href="/" className="navbar-category">Novidades</a>
                <a href="/" className="navbar-category">Best Sellers</a>
                <a href="/" className="navbar-category">Infantis</a>
                <a href="/" className="navbar-category">Didáticos</a>
                <a href="/" className="navbar-category">Sobre Nós</a>
            </nav>
        </div>
    );
}

export default Navbar;