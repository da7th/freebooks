<?php

namespace src\repositories;

use PDO;
use src\db\DBConnection;

class BookRepository
{
    private $db;

    public function __construct()
    {
        $this->db = DBConnection::getConnection();
    }

    // Garante que o livro exista no banco e retorna o ID interno dele

    public function findOrCreateBook($data)
    {

        // Verifica se já temos esse livro pelo ID da API
        $sql = "SELECT id FROM books WHERE google_book_id = :google_id";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':google_id' => $data['google_book_id']]);
        $book = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($book) {
            return $book['id'];
        }

        $sql = "INSERT INTO books (google_book_id, title, authors, thumbnail, page_count) 
                VALUES (:google_id, :title, :authors, :thumbnail, :pages)";

        $stmt = $this->db->prepare($sql);

        $stmt->execute([
            ':google_id' => $data['google_book_id'],
            ':title' => $data['title'],
            ':authors' => $data['authors'],
            ':thumbnail' => $data['thumbnail'],
            ':pages' => $data['page_count'] ?? 0
        ]);

        return $this->db->lastInsertId();
    }

    // Cria ou atualiza o status do livro para o usuário (Favorito, Lendo, etc)

    public function saveUserBookRelation($userId, $bookId, $status, $isFavorite)
    {
        $sql = "INSERT INTO user_book (user_id, book_id, status, is_favorite) 
                VALUES (:u_id, :b_id, :status, :fav)
                ON DUPLICATE KEY UPDATE status = :status, is_favorite = :fav";

        $stmt = $this->db->prepare($sql);

        return $stmt->execute([
            ':u_id'   => $userId,
            ':b_id'   => $bookId,
            ':status' => $status,
            ':fav'    => $isFavorite
        ]);
    }
}
