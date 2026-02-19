// import React from "react";
// import "./Modal.css";

function Modal({ isOpen, setOpenModal }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Detaihes do Livro</h2>
        <p className="modal-text">AQUI VAI FICAR OS DETALHES DO LIVRO</p>
        <button className="modal-button" onClick={() => setOpenModal(false)}>
          FECHAR
        </button>
      </div>
    </div>
  );
}

export default Modal;