import React, { Children, useState } from "react";

const Modal = ({ isOpen, onClose, heading, children }) => {
  const modalStyles = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "9999",
  };

  const modalContentStyles = {
    backgroundColor: "#fff",
    padding: "20px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "5px",
    minWidth: "80%",
  };

  return (
    <div style={modalStyles}>
      <div style={modalContentStyles}>
        <div className="flex justify-between mb-3">
          {heading && <h2>{heading}</h2>}

          <button
            className="ml-auto bg-black text-white h-8 w-8 aspect-square flex items-center justify-center rounded-full"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
