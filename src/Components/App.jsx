import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteCard) => (
        <Note
          key={noteCard.key}
          title={noteCard.title}
          content={noteCard.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
