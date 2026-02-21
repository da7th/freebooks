<?php

include 'DBConnection.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

try {
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // $data = json_decode(file_get_contents("php://input"));

        $content = file_get_contents("php://input");
        $data = json_decode($content, true);

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

        adduser($conn, $name, $username, $email, $password);
    }
} catch (PDOException $e) {
    echo "Falha ao adicionar usuário" . $e->getMessage();
}
