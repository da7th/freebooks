<?php

define('HOST', '127.0.0.1');
define('PORT', '3306');
define('DBNAME', 'freebooks');
define('DBUSER', 'root');
define('PASSWORD', '');

try {
    $dsn = "mysql:host=" . HOST . ";port=" . PORT . ";dbname=" . DBNAME . ";charset=utf8";
    $conn = new PDO($dsn, DBUSER, PASSWORD);
    echo "Conectado com sucesso!";
} catch (PDOException $e) {
    echo "Falha ao realizar conexão. Erro: " . $e->getMessage();
}
