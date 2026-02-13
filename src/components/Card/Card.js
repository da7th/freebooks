import "./Card.css";
import { useState, useEffect } from "react";
import { getBooks } from "../../js/functions.js";

function Card() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data.items || []);
      } catch (error) {
        console.log("Não foi possível encontrar os livros", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      {books.map((book) => (
        <div key={book.id} className="card-container">
          <div className="card-image">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          </div>
          <div className="card-info">
            <span className="card-category">
              {book.volumeInfo.categories}
            </span>
            <h3 className="card-title">{book.volumeInfo.title}</h3>
            <button className="card-button">Acessar conteúdo</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
