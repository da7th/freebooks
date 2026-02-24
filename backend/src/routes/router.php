<?php

use src\controllers\UserController;

function load($controller, $action) {
    $controllerNamespace = "src\\controllers\\{$controller}";

    if(!class_exists($controllerNamespace)) {
        throw new Exception("O controller {$controller} não existe");
    }

    $controllerInstance = new $controllerNamespace;

    if(!method_exists($controllerInstance, $action)) {
        throw new Exception("O controller {$controller} não existe");
    }

    $controllerInstance->$action();
}

$routes = [
    'GET' => [
    ],
    'POST' => [
        '/login' => ["UserController", "login"],
        '/register' => ["UserController", "register"]
    ]
];