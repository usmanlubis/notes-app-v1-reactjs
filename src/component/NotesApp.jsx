import React from 'react';
import NotesAppHeader from './NotesAppHeader';
import NotesAppInput from './NotesAppInput';
import NotesAppActive from './NotesAppActive';
import NotesAppArchived from './NotesAppArchived';
import { getInitialData } from '../utils/initData';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchNotes: getInitialData(),
    };

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onDeleteNoteEventHandler = this.onDeleteNoteEventHandler.bind(this);
    this.onArchiveNoteEventHandler = this.onArchiveNoteEventHandler.bind(this);
  }

  onSearchEventHandler(event) {
    this.setState((previousState) => ({
      searchNotes: previousState.notes.filter((note) => note.title.toLowerCase().includes(event.target.value.toLowerCase())),
    }));
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((previousState) => ({
      notes: [
        ...previousState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: new Date().toISOString(),
        },
      ],
      searchNotes: [
        ...previousState.searchNotes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: new Date().toISOString(),
        },
      ],
    }));
  }

  onDeleteNoteEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const searchNotes = this.state.searchNotes.filter((note) => note.id !== id);

    this.setState({
      notes,
      searchNotes,
    });
  }

  onArchiveNoteEventHandler(id) {
    this.setState((previousState) => ({
      notes: previousState.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)),
      searchNotes: previousState.searchNotes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)),
    }));
  }

  render() {
    return (
      <>
        <NotesAppHeader onSearch={this.onSearchEventHandler} />
        <main className="note-app__body">
          <NotesAppInput addNote={this.onAddNoteEventHandler} />
          <NotesAppActive
            notes={this.state.searchNotes}
            onDelete={this.onDeleteNoteEventHandler}
            onArchive={this.onArchiveNoteEventHandler}
          />
          <NotesAppArchived
            notes={this.state.searchNotes}
            onDelete={this.onDeleteNoteEventHandler}
            onArchive={this.onArchiveNoteEventHandler}
          />
        </main>
      </>
    );
  }
}

export default NotesApp;
