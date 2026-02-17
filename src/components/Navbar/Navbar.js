import "./Navbar.css";

function Navbar({onSelectGenre}) {
  return (
    <div>
      <nav className="nav-menu">
        <button onClick={() => onSelectGenre('*')} className="navbar-category">
          New Books
        </button>
        <a href="/" className="navbar-category">
          Best Sellers
        </a>
        <a href="/" className="navbar-category">
          Juvenile
        </a>
        <a href="/" className="navbar-category">
          Didatic
        </a>
        <a href="/" className="navbar-category">
          About Us
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
