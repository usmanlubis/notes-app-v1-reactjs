import React from 'react';
import NotesAppItem from './NotesAppItem';

function NotesAppActive({ notes, onDelete, onArchive }) {
  const activeNotes = notes.filter(e => e.archived === false);

  return (
    <>
      <h2>Catatan Aktif</h2>
      {activeNotes.length === 0 ? (<p className='notes-list__empty-message'>Tidak ada catatan</p>) :
        (
          <div className="notes-list">
            {activeNotes.map((note, id) => {
              return (
                <NotesAppItem key={id} note={note} onDelete={onDelete} onArchive={onArchive} />
              );
            })}
          </div>
        )}
    </>
  );
}

export default NotesAppActive;