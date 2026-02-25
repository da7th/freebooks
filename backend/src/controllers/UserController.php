<?php

namespace src\controllers;

use src\repositories\UserRepository;

// require '../src/db/DBConnection.php';

use PDOException;

class UserController
{
    public function register()
    {
        try {
            if ($_SERVER["REQUEST_METHOD"] === "POST") {

                $content = file_get_contents("php://input");
                $data = json_decode($content, true);
                $repo = new UserRepository();

                $errors = [];

                // $name = $data->name;
                // $username = $data->username;
                // $email = $data->email;
                // $password = $data->password;
                // $confirmPassword = $data->confirmPassword;

                // $response = [
                //     "user" => $user,
                //     "email" => $email,
                //     "password" => $password,
                //     "confirmPassword" => $confirmPassword
                // ];

                // echo json_encode($response);

                $name = $data["name"] ?? '';
                $username = $data["username"] ?? '';
                $email = $data["email"] ?? '';
                $password = $data["password"] ?? '';
                $confirmPassword = $data["confirmPassword"];
                
                if(empty($name) || strlen($name) < 3) {
                    $errors['name'] = "O nome deve ter pelo menos 3 caracteres.";
                }

                if(empty($username)) {
                    $errors['username'] = "Insira o nome de usuário.";
                } else if(str_contains($username, '')) {
                    $errors['username'] = "Há espaços no nome de usuário.";
                }

                if(empty($email)) {
                    $errors['email'] = "Insira o e-mail.";
                } else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    $errors['email'] = "Insira um e-mail válido.";
                }

                if(strlen($password) < 6) {
                    $errors['password'] = "A senha deve conter pelo menos 6 caracteres";
                }

                if(empty($confirmPassword)) {
                    $errors['confirmPassword'] = "Confirme sua senha.";
                } else if($password !== $confirmPassword) {
                    $errors['confirmPassword'] = "As senhas não coincidem.";
                }

                if(!empty($errors)) {
                    header('Content-Type: application/json');
                    http_response_code(422);
                    echo json_encode(['errors' => $errors]);
                    exit;
                }

                $repo->addUser($name, $username, $email, $password);
                
                header('Content-Type: application/json');
                echo json_encode(['message' => 'Usuário registrado com sucesso!']);
            }
        } catch (PDOException $e) {
            echo "Falha ao adicionar usuário" . $e->getMessage();
        }
    }

    public function login()
    {
        session_start();
        $repo = new UserRepository();

        try {
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                $content = file_get_contents("php://input");
                $data = json_decode($content, true);

                $username = $data['username'];
                $password = $data['password'];

                $user = $repo->handleLogin($username);

                if (password_verify($password, $user['user_password'])) {
                    $_SESSION['user_id'] = $user['user_id'];
                    $_SESSION['user_username'] = $user['user_username'];

                    echo json_encode([
                        'success' => true,
                        'message' => 'Logado com sucesso!',
                        'username' => $user['user_username']
                    ]);

                    exit;
                } else {
                    echo json_encode([
                        'sucess' => false,
                        'message' => 'Credenciais incorretas'
                    ]);
                }
            }
        } catch (PDOException $e) {
            echo "Falha ao adicionar usuário" . $e->getMessage();
        }
    }
}
