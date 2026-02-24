<?php

namespace src\db;

use PDO;
use PDOException;

define('HOST', '127.0.0.1');
define('PORT', '3306');
define('DBNAME', 'freebooks');
define('DBUSER', 'root');
define('PASSWORD', '');

class DBConnection
{
    private static $instance = null;

    public static function getConnection()
    {
        if (!self::$instance) {

            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
            ];
            try {
                $dsn = "mysql:host=" . HOST . ";port=" . PORT . ";dbname=" . DBNAME . ";charset=utf8";
                self::$instance = new PDO($dsn, DBUSER, PASSWORD, $options);
                // echo "Conectado com sucesso!";
            } catch (PDOException $e) {
                die("Erro na conexão: " . $e->getMessage());
            }
        }

        return self::$instance;
    }
}
