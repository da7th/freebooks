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

                $repo->addUser($name, $username, $email, $password);
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
