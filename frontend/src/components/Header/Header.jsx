import "./Header.css";

function Header({ search, setSearch, activeUser, handleLogout, loading }) {
  if (loading) return <nav className="header-container">Carregando...</nav>;

  return (
    <nav className="header-container">
      <div className="header-logo">
        <a href="/">Freebooks</a>
      </div>

      <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          placeholder="Pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
      {activeUser ? (
        <div className="header-menu">
          <a href="/" className="login-link">
            Minha Conta
          </a>
          <div
            href="/"
            className="register-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleLogout();
            }}
            style={{ cursor: "pointer", textAlign: "center" }}
          >
            Logout
          </div>
        </div>
      ) : (
        <div className="header-menu">
          <a href="/login" className="login-link">
            Login
          </a>
          <a href="/register" className="register-btn">
            Register
          </a>
        </div>
      )}
    </nav>
  );
}

export default Header;
