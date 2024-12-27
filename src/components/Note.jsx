import React from 'react';
import '../styles/Note.css';

function Note({ note, onDelete, onToggle, onEdit }) {
  return (
    <div className={`note ${note.completed ? 'completed' : ''}`}>
      <div className="note-content">
        <input
          type="checkbox"
          checked={note.completed}
          onChange={() => onToggle(note.id)}
          className="checkbox"
        />
        <span className="note-text">{note.text}</span>
      </div>
      <div className="note-actions">
        <button onClick={() => onEdit(note)} className="edit-btn">
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button onClick={() => onDelete(note.id)} className="delete-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Note;
