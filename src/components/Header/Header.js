import "./Header.css";

function Header() {
  return (
    <nav className="header-container">
      <div className="header-logo">
        <a href="/">Freebooks</a>
      </div>

      <form className="search-bar" action="/" method="GET">
        <input type="search" placeholder="Pesquisar" />
        <button type="submit">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>

      <div className="header-menu">
        <a href="/login" className="login-link">
          Login
        </a>
        <a href="/register" className="register-btn">
          Registro
        </a>
      </div>
    </nav>
  );
}

export default Header;
