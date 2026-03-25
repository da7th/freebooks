<?php

namespace src\controllers;

use src\repositories\BookRepository;

class BookController
{

    public function saveBook()
    {
        session_start();

        if (!isset($_SESSION['user_id'])) {
            http_response_code(401);
            echo json_encode(['error' => 'Não autorizado']);
            exit;
        }

        $content = file_get_contents("php://input");
        $data = json_decode($content, true);

        $bookRepo = new BookRepository();

        try {
            $internalBookId = $bookRepo->findOrCreateBook($data['book']);


            $sucess = $bookRepo->saveUserBookRelation(
                $_SESSION['user_id'],
                $internalBookId,
                $data['status'] ?? 'wishlist',
                $data['is_favorite'] ?? 0
            );

            echo json_encode(['sucess' => $sucess, 'message' => 'Livro salvo na sua conta!']);
        } catch (\Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}