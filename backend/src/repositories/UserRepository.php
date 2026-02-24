<?php

namespace src\repositories;

use PDOException;
use src\db\DBConnection;

class UserRepository
{
    private $db;

    public function __construct()
    {
        $this->db = DBConnection::getConnection();
    }

    public function addUser($name, $username, $email, $password)
    {
        $sql = "INSERT INTO users (user_name, user_username, user_email, user_password) VALUES (:user_name, :user_username, :user_email, :user_password)";
        try {
            $stmt = $this->db->prepare($sql);

            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            $stmt->bindParam(':user_name', $name);
            $stmt->bindParam(':user_username', $username);
            $stmt->bindparam(':user_email', $email);
            $stmt->bindParam(':user_password', $hashedPassword);

            // return $stmt->execute([
            //     ':name'     => $name,
            //     ':user'     => $username,
            //     ':email'    => $email,
            //     ':pass'     => password_hash($password, PASSWORD_DEFAULT)
            // ]);

            return $stmt->execute();
        } catch (PDOException $e) {
            echo "Erro ao adicionar usuário: " . $e->getMessage();
        }
    }
}
