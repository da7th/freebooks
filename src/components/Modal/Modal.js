import React from "react";
import "./Modal.css";

function Modal({ isOpen, setOpenModal }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">SUCESSO!</h2>
        <p className="modal-text">Seu registro foi concluído com êxito.</p>
        <button className="modal-button" onClick={() => setOpenModal(false)}>
          FECHAR
        </button>
      </div>
    </div>
  );
}

export default Modal;