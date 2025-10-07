import React, { useContext, useEffect } from "react";
import { NoteContext } from "../../Context/NoteContext";
import { useNavigate } from "react-router-dom";

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
    <div className="container py-5" style={{ minHeight: "90vh", backgroundColor: "#f8f9fa" }}>
      {/* Page Header */}
      <h2 className="text-center mb-5" style={{ fontWeight: 600, color: "#333" }}>
        My Notes
      </h2>

      {/* Notes Grid */}
      <div className="row g-4">
        {myNotes?.length === 0 ? (
          <p className="text-center text-muted fs-5 mt-5">
            No notes yet. Click <span className="fw-bold">+</span> to create one.
          </p>
        ) : (
          myNotes?.map((note, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card h-100 border rounded-4 shadow-sm"
                style={{
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                }}
              >
                {/* Card Header */}
                <div className="card-header d-flex justify-content-between align-items-center bg-white border-bottom">
                  <span className="fw-bold" style={{ color: "#495057" }}>
                    {note.title}
                  </span>
                  <div>
                    <i
                      className="fa-solid fa-pencil me-3 text-primary"
                      style={{ cursor: "pointer" }}
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
                      style={{ cursor: "pointer" }}
                      title="Delete Note"
                      onClick={() => deleteNote(note._id)}
                    ></i>
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  {note.tag && (
                    <span
                      className="badge mb-2"
                      style={{
                        backgroundColor: "#ffd966",
                        color: "#333",
                        fontWeight: 500,
                      }}
                    >
                      {note.tag}
                    </span>
                  )}
                  <p className="card-text text-secondary">{note.description}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Floating Add Button */}
      <button
        className="btn shadow rounded-circle d-flex justify-content-center align-items-center"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "60px",
          height: "60px",
          fontSize: "28px",
          backgroundColor: "#0d6efd",
          color: "#fff",
          border: "none",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        }}
        onClick={() => navigateTo("/newNote")}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default MyNotes;
