import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="form-div">
      <h1 className="login-title">Login</h1>
      <form className="login-register-form">
        <label className="login-register-label" for="username">Nome de usuário:</label>
        <input className="login-register-input"  type="text" name="username" />
        <label className="login-register-label" for="password">Senha:</label>
        <input className="login-register-input" type="password" name="password" />
        <button className="login-register-button" type="submit">Entrar</button>
        <a className="login-register-a" href="/">Esqueci minha senha</a>
        <p className="login-register-p">Não possui uma conta?</p><a className="login-register-a" href="/">Registre-se</a>
      </form>
    </div>
  );
}

export default LoginForm;
