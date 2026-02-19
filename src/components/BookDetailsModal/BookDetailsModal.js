import "./BookDetailsModal.css";

function BookDetailsModal({ isOpen, setOpenModal, book }) {
  if (!isOpen || !book) return null;
  
  const info = book?.volumeInfo;

  if (!info) {
    return (
      <div className="modal-overlay" onClick={() => setOpenModal(false)}>
        <div className="modal-container">
          <p>Informações do livro não encontradas.</p>
          <button onClick={() => setOpenModal(false)}>Fechar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={() => setOpenModal(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-x" onClick={() => setOpenModal(false)}>
          &times;
        </button>

        <div className="modal-content">
          <div className="modal-left">
            <img
              src={
                info.imageLinks?.thumbnail || "https://via.placeholder.com/150"
              }
              alt={info.title}
              className="modal-cover"
            />
          </div>

          <div className="modal-right">
            <span className="modal-category">
              {info.categories?.[0] || "Geral"}
            </span>
            <h2 className="modal-title">{info.title}</h2>
            <h3 className="modal-author">{info.authors?.join(", ")}</h3>

            <div className="modal-scroll-area">
              <p className="modal-description">
                {info.description?.replace(/<[^>]*>?/gm, "") ||
                  "Sem descrição disponível."}
              </p>
            </div>

            <div className="modal-meta">
              <span>
                <strong>Páginas:</strong> {info.pageCount || "N/A"}
              </span>
              <span>
                <strong>Editora:</strong> {info.publisher || "N/A"}
              </span>
              <span>
                <strong>Ano:</strong> {info.publishedDate?.split("-")[0]}
              </span>
            </div>

            <div className="modal-actions">
              <a
                href={info.previewLink}
                target="_blank"
                rel="noreferrer"
                className="modal-button"
              >
                Ler Preview
              </a>
              <button
                className="modal-button secondary"
                onClick={() => setOpenModal(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailsModal;
