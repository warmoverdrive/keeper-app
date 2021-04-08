import React, { useState } from "react";
export default CreateArea;

function CreateArea(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  function updateNewNote(e) {
    const { value, name } = e.target;
    setNewNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          name="title"
          placeholder="Title"
          value={newNote.title}
          onChange={updateNewNote}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
          onChange={updateNewNote}
        />
        <button
          onClick={(e) => {
            props.onAdd(newNote);
            setNewNote({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
