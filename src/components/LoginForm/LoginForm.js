import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="form-div">
      <h1 className="login-title">Login</h1>
      <form>
        <label for="username">Nome de usuário:</label>
        <input type="text" name="username" />
        <label for="password">Senha:</label>
        <input type="password" name="password" />
        <button type="submit">Entrar</button>
        <a href="/">Esqueci minha senha</a>
        <p>Não possui uma conta?</p><a href="/">Registre-se</a>
      </form>
    </div>
  );
}

export default LoginForm;
