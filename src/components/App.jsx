import React from "react";
import notes from "../notes";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
export default App;

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}
