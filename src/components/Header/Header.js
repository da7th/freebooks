import './Header.css'

function Header() {
  return (
    <nav className='header-container'>
        <div className='header-logo'>
            <a href="/">FREEBOOKS</a>
        </div>

        <div className='header-menu'>
            <a href="/login" className='login-link'>Login</a>
            <a href="/register" className='register-btn'>Registro</a>
        </div>
    </nav>
  );
}

export default Header;
