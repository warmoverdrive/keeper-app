import React from "react";

function Note() {
  // temporary
  let title = "Title";
  let content = "Content";

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Note;
