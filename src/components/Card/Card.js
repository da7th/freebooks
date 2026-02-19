import "./Card.css";
import { useState, useEffect } from "react";

function Card({ genre, search }) {
  const [loading, setLoading] = useState(true);
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_KEY;
      const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&orderBy=newest&maxResults=40&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setOriginalData(data.items || []);
        setFilteredData(data.items || []);
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
      const title = item.volumeInfo?.title?.toLowerCase() || "";
      return title.includes(lowerSearch);
    });
    setFilteredData(filtered);
  }, [search, originalData]);

  if (loading) {
    return <div className="loading">Carregamdo livros...</div>;
  }

  return (
    <>
      {filteredData.map((book) => (
        <div key={book.id} className="card-container">
          <div className="card-image">
            <img
              src={
                book.volumeInfo.imageLinks?.thumbnail ||
                "https://via.placeholder.com/128x192?text=Sem+Capa"
              }
              alt={book.volumeInfo.title}
            />
          </div>
          <div className="card-info">
            <span className="card-category">{book.volumeInfo.categories}</span>
            <h3 className="card-title">{book.volumeInfo.title}</h3>
            <button className="card-button">Access Book</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
