import "./Card.css";
import { useCard } from "./useCard";
import BookDetailsModal from "../BookDetailsModal/BookDetailsModal";

function Card({ genre, search }) {
  const {
    loading,
    filteredData,
    openModal,
    setOpenModal,
    selectedBook,
    handleBookDetails,
    PLACEHOLDER_IMAGE,
  } = useCard(genre, search);

  if (loading) {
    return <div className="loading">Carregamdo livros...</div>;
  }

  return (
    <>
      {filteredData.map((book) => {
        const categoria =
          book.subject && book.subject.length > 0
            ? book.subject[0]
            : "Leitura Digital";

        let coverUrl = "https://via.placeholder.com/128x192?text=Sem+Capa";

        if (book.cover_i) {
          coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        } else if (book.cover_edition_key) {
          coverUrl = `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`;
        } else if (book.isbn && book.isbn.length > 0) {
          coverUrl = `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`;
        }

        return (
          <div
            key={book.key || book.cover_edition_key}
            className="card-container"
          >
            <div className="card-image">
              <img
                src={coverUrl}
                alt={book.title}
                onError={(e) => {
                  e.target.src =
                    PLACEHOLDER_IMAGE;
                }}
              />
            </div>
            <div className="card-info">
              <span className="card-category">{categoria}</span>
              <h3 className="card-title">{book.title}</h3>
              <p className="card-author">
                {book.author_name[0] || "Autor Desconhecido"}
              </p>
              <button
                className="card-button"
                onClick={() => handleBookDetails(book)}
              >
                Access Book
              </button>
            </div>
          </div>
        );
      })}

      <BookDetailsModal
        isOpen={openModal}
        setOpenModal={setOpenModal}
        book={selectedBook}
      />
    </>
  );
}

export default Card;
