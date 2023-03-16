import React from 'react';
import NotesAppItem from './NotesAppItem';

function NotesAppArchived({ notes, onDelete, onArchive }) {
  const archivedNotes = notes.filter(e => e.archived === true);

  return (
    <>
      <h2>Arsip</h2>
      {archivedNotes.length === 0 ? (<p className='notes-list__empty-message'>Tidak ada catatan</p>) :
        (
          <div className="notes-list">
            {archivedNotes.map((note, id) => {
              return (
                <NotesAppItem key={id} note={note} onDelete={onDelete} onArchive={onArchive} />
              );
            })}
          </div>
        )}
    </>
  );
}

export default NotesAppArchived;