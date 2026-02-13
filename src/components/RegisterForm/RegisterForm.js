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
        <form onSubmit={handleRegister}>
          <label>Nome de usuário:</label>
          <input type="text" name="username" />

          <label>E-mail:</label>
          <input type="email" name="email" />

          <label>Senha:</label>
          <input type="password" name="password" />

          <label>Confirme sua senha:</label>
          <input type="password" name="password" />

          <button type="submit">Registrar</button>
        </form>
      </div>

      <Modal isOpen={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default RegisterForm;
