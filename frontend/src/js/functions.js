export function validateRegister(values) {
  let errors = [];

  if (values.name === "") {
    errors.name = "Digite um nome.";
  } else {
    if (values.name.length < 3) {
      errors.name = "O nome deve ter pelo menos 3 caracteres.";
    }
  }

  if (values.username === "") {
    errors.username = "Digite um nome de usuário.";
  } else {
    if (values.username.includes(" ") || values.username === "") {
      errors.username = "Nome de usuário inválido ou contém espaços.";
    }
  }

  if (values.email === "") {
    errors.email = "Digite um e-mail.";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!"" && !emailRegex.test(values.email)) {
      errors.email = "Insira um e-mail válido.";
    }
  }

  if(values.password === "") {
    errors.password = "Digite uma senha.";
  } else {
  if (!"" && values.password.length < 6) {
    errors.password = "A senha deve ter no mínimo 6 caracteres.";
  }
  }

  if(values.confirmPassword === "") {
    errors.confirmPassword = "Confirme sua senha.";
  } else {
      if (!"" && values.password !== values.confirmPassword) {
    errors.confirmPassword = "As senhas não coincidem.";
  }
  }


  return errors;
}
