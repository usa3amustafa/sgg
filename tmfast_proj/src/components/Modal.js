import React from "react";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => closeModal(false)}>X</button>
        <div className="modal-title">Existing Contacts</div>
        <div className="modal-body">Body</div>
        <div className="modal-footer">
          <button>Deselect All x </button>
          <button>Add Selected </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
