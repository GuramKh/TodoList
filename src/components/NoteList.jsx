import React from 'react';
import Note from './Note';
import emptyStateImage from '../assets/Detective.png';
import '../styles/NotesList.css';

function NotesList({ notes, onDelete, onToggle, onEdit }) {
  if (notes.length === 0) {
    return (
      <div className="empty-state">
        <img src={emptyStateImage} alt="No notes" />
      </div>
    );
  }

  return (
    <div className="notes-list">
      {notes.map(note => (
        <Note
          key={note.id}
          note={note}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default NotesList;
