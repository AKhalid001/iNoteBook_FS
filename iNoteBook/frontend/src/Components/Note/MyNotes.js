import React, { useContext, useEffect } from "react";
import { NoteContext } from "../../Context/NoteContext";
import { useNavigate } from "react-router-dom";
import "../../App.css"; // Ensure this CSS file contains the classes below

const MyNotes = () => {
  const navigateTo = useNavigate();
  const { myNotes, deleteNote, readNote } = useContext(NoteContext);

  useEffect(() => {
    readNote();
  }, []);

  const updateNoteValue = (id, title, description, tag) => {
    navigateTo("/myNote/updateNote", {
      state: { id, title, description, tag },
    });
  };

  return (
    <div className="container mynotes-container">
      <h2 className="text-center mynotes-header">My Notes</h2>

      <div className="row g-4">
        {myNotes?.length === 0 ? (
          <p className="text-center text-muted fs-5 mt-5">
            No notes yet. Click <span className="fw-bold">+</span> to create one.
          </p>
        ) : (
          myNotes?.map((note, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card note-card">
                <div className="card-header note-card-header">
                  <span className="note-title">{note.title}</span>
                  <div className="note-actions">
                    <i
                      className="fa-solid fa-pencil text-primary"
                      title="Edit Note"
                      onClick={() =>
                        updateNoteValue(
                          note._id,
                          note.title,
                          note.description,
                          note.tag
                        )
                      }
                    ></i>
                    <i
                      className="fa-solid fa-trash text-danger"
                      title="Delete Note"
                      onClick={() => deleteNote(note._id)}
                    ></i>
                  </div>
                </div>
                <div className="card-body">
                  {note.tag && <span className="note-badge">{note.tag}</span>}
                  <p className="card-text text-secondary">{note.description}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <button className="btn add-note-btn" onClick={() => navigateTo("/newNote")}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default MyNotes;
