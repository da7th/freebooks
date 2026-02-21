import { useState } from "react";
import "../LoginForm/LoginForm.css";
import Modal from "../Modal/Modal";
import axios from 'axios';

function RegisterForm() {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://freebooks.test/backend/', {name, username, email, password, confirmPassword});
    console.log(response);
  }

  return (
    <div>
      <div className="form-div">
        <h1 className="login-title">Registro</h1>
        <form className="login-register-form" onSubmit={handleSubmit}>

          <label className="login-register-label" >Nome completo:</label>
          <input className="login-register-input" type="text" name="name" onChange={(e) => setName(e.target.value)} />

          <label className="login-register-label" >Nome de usuário:</label>
          <input className="login-register-input" type="text" name="username" onChange={(e) => setUsername(e.target.value)} />

          <label className="login-register-label">E-mail:</label>
          <input className="login-register-input" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />

          <label className="login-register-label">Senha:</label>
          <input className="login-register-input" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />

          <label className="login-register-label">Confirme sua senha:</label>
          <input className="login-register-input" type="password" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />

          <button className="login-register-button" type="submit">Registrar</button>
        </form>
      </div>

      <Modal isOpen={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default RegisterForm;
