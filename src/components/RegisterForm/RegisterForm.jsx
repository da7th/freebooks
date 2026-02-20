import { useState } from "react";
import "../LoginForm/LoginForm.css";
import Modal from "../Modal/Modal";

function RegisterForm() {
  const [openModal, setOpenModal] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  return (
    <div>
      <div className="form-div">
        <h1 className="login-title">Registro</h1>
        <form className="login-register-form" onSubmit={handleRegister}>
          <label className="login-register-label" >Nome de usuário:</label>
          <input className="login-register-input" type="text" name="username" />

          <label className="login-register-label">E-mail:</label>
          <input className="login-register-input" type="email" name="email" />

          <label className="login-register-label">Senha:</label>
          <input className="login-register-input" type="password" name="password" />

          <label className="login-register-label">Confirme sua senha:</label>
          <input className="login-register-input" type="password" name="password" />

          <button className="login-register-button" type="submit">Registrar</button>
        </form>
      </div>

      <Modal isOpen={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default RegisterForm;
