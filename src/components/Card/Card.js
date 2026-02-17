import "./Card.css";
import { useState, useEffect } from "react";

function Card({genre}) {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const apiKey = "AIzaSyCF6-ohKrgU1H_cx_Zmq7lk4CbPsKMvZkU";
      const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&orderBy=newest&maxResults=40&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data.items || []);
        console.log(data);
      } catch (error) {
        console.error("Erro na busca: ", error);
      }
    }

    fetchBooks();
  }, [genre]);

  return (
    <>
      {books.map((book) => (
        <div key={book.id} className="card-container">
          <div className="card-image">
            <img src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/128x192?text=Sem+Capa"} alt={book.volumeInfo.title} />
          </div>
          <div className="card-info">
            <span className="card-category">
              {book.volumeInfo.categories}
            </span>
            <h3 className="card-title">{book.volumeInfo.title}</h3>
            <button className="card-button">Access Book</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
