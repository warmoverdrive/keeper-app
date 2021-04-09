import React, { useState } from "react";
import Add from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
export default CreateArea;

function CreateArea(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [isFolded, setIsFolded] = useState(true);

  function updateNewNote(e) {
    const { value, name } = e.target;
    setNewNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="create-note">
        {!isFolded && (
          <input
            name="title"
            placeholder="Title"
            value={newNote.title}
            onChange={updateNewNote}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isFolded ? 1 : 3}
          value={newNote.content}
          onChange={updateNewNote}
          onFocus={() => setIsFolded(false)}
        />
        <Zoom in={!isFolded}>
          <Fab
            onClick={(e) => {
              props.onAdd(newNote);
              setNewNote({ title: "", content: "" });
              setIsFolded(true);
            }}
          >
            <Add />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
