import React, { useState } from "react";
import "./Notes.css";

function Notes() {
  const takeNote = "Take note";
  const closeNote = "close note";
  const [noteOpen, setNoteOpen] = useState(false);
  // const [currNote, setCurrNote] = useState("hello world"); //to store notes in backend/database we can use currNote

  function handleClick() {
    setNoteOpen(() => {
      return !noteOpen;
    });
  }

  // function handleChange(event) {
  //   // console.log(event.target.value);
  //   setCurrNote(event.target.value);
  //   console.log(currNote);
  // }

  return (
    <div>
      <button onClick={handleClick} className="note-button">
        {" "}
        {noteOpen ? closeNote : takeNote}
      </button>

      <input
        // onChange={handleChange}
        type="textArea"
        className="textArea"
        style={noteOpen ? { visibility: "visible" } : { visibility: "hidden" }}
        placeholder="Take notes here:"
        // value={currNote}
      ></input>
    </div>
  );
}

export default Notes;
