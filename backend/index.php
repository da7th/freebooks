<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));
    $user = $data->user;
    $email = $data->email;
    $password = $data->password;
    $confirmPassword = $data->confirmPassword;

    $response = [
        "user" => $user,
        "email" => $email,
        "password" => $password,
        "confirmPassword" => $confirmPassword
    ];

    echo json_encode($response);
} else {
    echo json_encode(
        [
            "status" => "false",
            "message" => "error"
        ]
    );
}
