<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/src/routes/router.php';
require __DIR__ . '/src/db/DBConnection.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = str_replace('/backend', '', $uri);
$uri = rtrim($uri, '/') ?: '/';
$method = $_SERVER['REQUEST_METHOD'];

if(isset($routes[$method][$uri])) {
    [$controller, $action] = $routes[$method][$uri];
    load($controller, $action);
} else {
    http_response_code(404);
    echo json_encode(["error" => "Rota não encontrada"]);
}