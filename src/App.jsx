import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NotesList from './components/NoteList';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);
  const [editNote, setEditNote] = useState(null);

   useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
      completed: false
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleComplete = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, completed: !note.completed } : note
    ));
  };

  const editNoteHandler = (id, newText) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, text: newText } : note
    ));
    setEditNote(null);
  };

  const filteredNotes = notes
    .filter(note => {
      if (filter === 'complete') return note.completed;
      if (filter === 'incomplete') return !note.completed;
      return true;
    })
    .filter(note =>
      note.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <Header 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          setFilter={setFilter}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <NotesList 
          notes={filteredNotes}
          onDelete={deleteNote}
          onToggle={toggleComplete}
          onEdit={setEditNote}
        />
        <button 
          className="add-button"
          onClick={() => setIsModalOpen(true)}
        >
          +
        </button>
        {isModalOpen && (
          <Modal
            onClose={() => setIsModalOpen(false)}
            onSubmit={(text) => {
              addNote(text);
              setIsModalOpen(false);
            }}
          />
        )}
        {editNote && (
          <Modal
            onClose={() => setEditNote(null)}
            onSubmit={(text) => editNoteHandler(editNote.id, text)}
            initialValue={editNote.text}
            isEdit
          />
        )}
      </div>
    </div>
  );
}

export default App;
