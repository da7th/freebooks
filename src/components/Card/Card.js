import "./Card.css";
import { useState, useEffect } from "react";
import BookDetailsModal from "../BookDetailsModal/BookDetailsModal";

function Card({ genre, search }) {
  const [loading, setLoading] = useState(true);
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookDetails = (book) => {
    setSelectedBook(book);
    setOpenModal(true);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      // const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_KEY;
      const genreQuery = genre
        ? `+subject:${genre.toLowerCase().replace(" ", "_")}`
        : "";

      const url = `https://openlibrary.org/search.json?q=has_fulltext:true+language:por${genreQuery}&sort=new&fields=title,author_name,cover_i,cover_edition_key,subject,key`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        const dataWithCover = data.docs.filter(
          (book) => book.cover_i || book.cover_edition_key || book.isbn,
        );
        setOriginalData(dataWithCover || []);
        setFilteredData(dataWithCover || []);
        // console.log(data.docs.title);
      } catch (error) {
        console.error("Erro na busca: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [genre]);

  useEffect(() => {
    const lowerSearch = (search || "").toLowerCase();
    const filtered = originalData.filter((item) => {
      const title = item.title?.toLowerCase() || "";
      return title.includes(lowerSearch);
    });
    setFilteredData(filtered);
  }, [search, originalData]);

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
                    "https://via.placeholder.com/128x192?text=Sem+Capa";
                }}
              />
            </div>
            <div className="card-info">
              <span className="card-category">{categoria}</span>
              <h3 className="card-title">{book.title}</h3>
              <p className="card-author">
                {book.author_name ? book.author_name[0] : "Autor Desconhecido"}
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
