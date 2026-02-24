<?php

namespace src\controllers;

use src\repositories\UserRepository;

// require '../src/db/DBConnection.php';

use PDOException;

class UserController
{
    public function login()
    {
        echo "teste login";
    }

    public function register()
    {
        try {
            if ($_SERVER["REQUEST_METHOD"] === "POST") {
                // $data = json_decode(file_get_contents("php://input"));

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
}
