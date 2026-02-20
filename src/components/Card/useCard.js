import { useState, useEffect } from "react";

const BASE_URL = "https://openlibrary.org/";
const PLACEHOLDER_IMAGE = "https://via.placeholder.com/128x192?text=Sem+Capa";

export function useCard(genre, search) {
  const [loading, setLoading] = useState(true);
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookDetails = async (book) => {
    try {
      const response = await fetch(`${BASE_URL}${book.key}.json`);
      const data = await response.json();

      let descriptionText = "Sem descrição disponível.";

      if (data.description) {
        descriptionText =
          typeof data.description === "object"
            ? data.description.value
            : data.description;
      }

      setSelectedBook({
        ...book,
        fullDescription: descriptionText,
      });

      setOpenModal(true);
    } catch (error) {
      console.error("Erro ao buscar descrição:", error);
      setSelectedBook(book);
      setOpenModal(true);
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      // const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_KEY;
      const genreQuery = genre
        ? `+subject:${genre.toLowerCase().replace(" ", "_")}`
        : "";

      const url = `${BASE_URL}search.json?q=has_fulltext:true+language:por${genreQuery}&sort=new&fields=title,author_name,cover_i,subject,key,number_of_pages_median,publisher,first_publish_year`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        const dataWithCover = data.docs.filter(
          (book) => book.cover_i || book.cover_edition_key || book.isbn,
        );
        setOriginalData(dataWithCover || []);
        setFilteredData(dataWithCover || []);
        console.log(data.docs.title);
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

  return {
    loading,
    filteredData,
    openModal,
    setOpenModal,
    selectedBook,
    handleBookDetails,
    PLACEHOLDER_IMAGE,
  };
}