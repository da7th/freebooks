import { useState } from "react";
import "../LoginForm/LoginForm.css";
import Modal from "../Modal/Modal";
import axios from 'axios';
import { validateRegister } from '../../js/functions';
 
function RegisterForm() {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateRegister({name, username, email, password, confirmPassword})

    setErrors(validationErrors);

    // if(Object.keys(validationErrors).length > 0) {
    //   return;
    // }

    try {
      const response = await axios.post('http://freebooks.test/backend/register', {name, username, email, password, confirmPassword});
    console.log(response);    
    } catch (error) {
      if(error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        console.error("Erro inesperado no servidor.");
      }
    }




  }

  return (
    <div>
      <div className="form-div">
        <h1 className="login-title">Registro</h1>
        <form className="login-register-form" id="register-form" onSubmit={handleSubmit}>

          <label className="login-register-label" >Nome completo:</label>
          <input className="login-register-input" type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />
          {errors.name && <span className="error-msg">{errors.name}</span>}

          <label className="login-register-label" >Nome de usuário:</label>
          <input className="login-register-input" type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
          {errors.username && <span className="error-msg">{errors.username}</span>}

          <label className="login-register-label">E-mail:</label>
          <input className="login-register-input" type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <span className="error-msg">{errors.email}</span>}

          <label className="login-register-label">Senha:</label>
          <input className="login-register-input" type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <span className="error-msg">{errors.password}</span>}

          <label className="login-register-label">Confirme sua senha:</label>
          <input className="login-register-input" type="password" id="confirmPassword" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
          {errors.confirmPassword && <span className="error-msg">{errors.confirmPassword}</span>}

          <button className="login-register-button" type="submit">Registrar</button>
        </form>
      </div>

      <Modal isOpen={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default RegisterForm;
