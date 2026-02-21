import "./Navbar.css";

function Navbar({onSelectGenre}) {
  return (
    <div>
      <nav className="nav-menu">
        <button onClick={() => onSelectGenre('*')} className="navbar-category">
          New Books
        </button>
        <button onClick={() => onSelectGenre('bestsellers')} className="navbar-category">
          Best Sellers
        </button >
        <button onClick={() => onSelectGenre('juvenile')} className="navbar-category">
          Juvenile
        </button>
        <button onClick={() => onSelectGenre('education')}  className="navbar-category">
          Didatic
        </button>
        <a href="/" className="navbar-category">
          About Us
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
