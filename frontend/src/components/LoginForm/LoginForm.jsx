import { useState } from "react";
import "./LoginForm.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
    const response = await axios.post('http://freebooks.test/backend/loginVerify.php', {username, password});
    console.log(response);

    if (response.data.success) {
      navigate('/');
    }
    } catch (error) {
      console.error("Erro no login", error)
    }

  }

  return (
    <div className="form-div">
      <h1 className="login-title">Login</h1>
      <form className="login-register-form" onSubmit={handleLogin}>
        <label className="login-register-label" for="username">Nome de usuário:</label>
        <input className="login-register-input"  type="text" name="username" onChange={(e) => setUsername(e.target.value)} />

        <label className="login-register-label" for="password">Senha:</label>
        <input className="login-register-input" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />

        <button className="login-register-button" type="submit">Entrar</button>
        <a className="login-register-a" href="/">Esqueci minha senha</a>
        <p className="login-register-p">Não possui uma conta?</p><a className="login-register-a" href="/">Registre-se</a>
      </form>
    </div>
  );
}

export default LoginForm;
