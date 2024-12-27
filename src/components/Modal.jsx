import React, { useState, useEffect } from 'react';
import '../styles/Modal.css';

function Modal({ onClose, onSubmit, initialValue = '', isEdit = false }) {
  const [text, setText] = useState(initialValue);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{isEdit ? 'Edit Note' : 'NEW NOTE'}</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Input your note..."
          autoFocus
        />
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>
            CANCEL
          </button>
          <button
            className="apply-btn"
            onClick={() => text.trim() && onSubmit(text)}
          >
            {isEdit ? 'Save' : 'APPLY'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
