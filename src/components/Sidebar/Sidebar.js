import "./Sidebar.css";
import { useState, useEffect } from "react";
import { getBooks } from "../../js/functions.js";

function Sidebar() {
  
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
    <div className="sidebar-div">
      <h2 className="sidebar-title">Categorias</h2>
      {books.map((book) => (
      <nav className="sidebar-nav">
        <a href="/" className="x-name">
          {book.volumeInfo.categories}
        </a>
      </nav>
      ))}
    </div>
  );
}

export default Sidebar;
