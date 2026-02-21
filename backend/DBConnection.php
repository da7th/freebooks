<?php

define('HOST', '127.0.0.1');
define('PORT', '3306');
define('DBNAME', 'freebooks');
define('DBUSER', 'root');
define('PASSWORD', '');

try {
    $dsn = "mysql:host=" . HOST . ";port=" . PORT . ";dbname=" . DBNAME . ";charset=utf8";
    $conn = new PDO($dsn, DBUSER, PASSWORD);
    // echo "Conectado com sucesso!";
} catch (PDOException $e) {
    echo "Falha ao realizar conexão. Erro: " . $e->getMessage();
}

function adduser($conn, $name, $username, $email, $password) {

    try {
    $stmt = $conn->prepare("INSERT INTO users (user_name, user_username, user_email, user_password) VALUES (:user_name, :user_username, :user_email, :user_password)");

    $stmt->bindParam(':user_name', $name);
    $stmt->bindParam(':user_username', $username);
    $stmt->bindparam(':user_email', $email);
    $stmt->bindParam(':user_password', $password);

    return $stmt->execute();
    } catch (PDOException $e) {
    echo "Erro ao adicionar usuário: " . $e->getMessage();
    }
}