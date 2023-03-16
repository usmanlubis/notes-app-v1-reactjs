import React from 'react';

class NotesAppInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: { title: '', body: '' },
      titleLimit: { inputTitle: '', limit: 50, char: 50 },
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length <= 50) {
      this.setState((previousState) => ({
        note: {
          ...previousState.note,
          title: event.target.value,
        },
        titleLimit: {
          ...previousState.titleLimit,
          inputTitle: event.target.value,
          char: previousState.titleLimit.limit - event.target.value.length,
        },
      }));
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState((previousState) => ({
      ...previousState,
      note: {
        ...previousState.note,
        body: event.target.value,
      },
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state.note);
    this.setState((previousState) => ({
      note: {
        title: '',
        body: '',
      },
      titleLimit: {
        ...previousState.titleLimit,
        inputTitle: '',
        char: 50,
      },
    }));
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa karakter :
          {' '}
          {this.state.titleLimit.char}

        </p>

        <form className="note-input" onSubmit={this.onSubmitEventHandler}>
          <input className="note-input__title" type="text" placeholder="Masukkan Judul Catatan..." required value={this.state.note.title} onChange={this.onTitleChangeEventHandler} />
          <textarea className="note-input__body" type="text" placeholder="Tuliskan Catatanmu Disini..." required value={this.state.note.body} onChange={this.onBodyChangeEventHandler} />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NotesAppInput;
