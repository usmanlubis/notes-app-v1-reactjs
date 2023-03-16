import React from 'react';

function NotesAppHeader({ onSearch }) {
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input type="text" placeholder="Cari catatan..." onChange={(event) => onSearch(event)} />
      </div>
    </header>
  );
}

export default NotesAppHeader;
