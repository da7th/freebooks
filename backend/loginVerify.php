<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include 'DBConnection.php';
session_start();

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $content = file_get_contents("php://input");
    $data = json_decode($content, true);

    $username = $data['username'];
    $password = $data['password'];

    $stmt = $conn->prepare("SELECT user_id, user_username, user_password FROM users WHERE user_username = :user_username");

    $stmt->bindValue('user_username', $username);
    $stmt->execute();

    if($stmt->rowCount() == 1) {
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if(password_verify($password, $user['user_password'])) {
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
}