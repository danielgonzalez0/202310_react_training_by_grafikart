import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, onClose }) => {
  const dialogRef = useRef(null);

  const handleClose = (e) => {
    e.preventDefault();
    onClose?.();
  };

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  return createPortal(
    <dialog
      style={{ width: 'calc(100vw - 2rem)', maxWidth: 600 }}
      ref={dialogRef}
      onCancel={handleClose}
      onClose={handleClose}
    >
      {children}
    </dialog>,
    document.body
  );
};

export default Modal;
