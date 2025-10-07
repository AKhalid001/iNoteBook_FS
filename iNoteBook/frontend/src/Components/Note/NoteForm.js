import React, { useContext, useState, useEffect } from "react";
import { NoteContext } from "../../Context/NoteContext";
import { useLocation, useNavigate } from "react-router-dom";
import "../../App.css"; // Ensure this CSS file contains the classes below

const NoteForm = ({ behaviour }) => {
  const isNewForm = behaviour === "create";
  const navigateTo = useNavigate();
  const location = useLocation();
  const { createNote, updateNote } = useContext(NoteContext);

  const noteFromState = location.state || {};
  const { id, title = "", description = "", tag = "" } = noteFromState;

  const [noteData, setNoteData] = useState({ title, description, tag, error: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isNewForm && !id) navigateTo("/myNote");
  }, [isNewForm, id, navigateTo]);

  const handleChange = ({ target: { id, value } }) => {
    setNoteData((prev) => ({ ...prev, [id]: value, error: "" }));
  };

  const validate = () => {
    if (!noteData.title.trim()) {
      setNoteData((prev) => ({ ...prev, error: "Title is required" }));
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      if (isNewForm) await createNote(noteData);
      else await updateNote(id, noteData);
      navigateTo("/myNote");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setNoteData({ title, description, tag, error: "" });
  };

  return (
    <div className="noteform-container">
      <div className="card noteform-card">
        <div className="card-body d-flex flex-column h-100 p-5">
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="fw-bold mb-2 text-primary">
              {isNewForm ? "Create New Note" : "Edit Note"}
            </h2>
            <p className="text-muted small">
              {isNewForm
                ? "Add a new note with title, description, and optional tag."
                : "Modify your note details below."}
            </p>
          </div>

          {/* Title & Tag */}
          <div className="row mb-4">
            <div className="col-md-8 mb-3 mb-md-0">
              <label htmlFor="title" className="form-label fw-semibold">
                Title <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="title"
                className={`form-control form-control-lg rounded-3 ${
                  noteData.error ? "is-invalid" : ""
                }`}
                placeholder="Enter note title"
                value={noteData.title}
                onChange={handleChange}
              />
              {noteData.error && <div className="invalid-feedback">{noteData.error}</div>}
            </div>

            <div className="col-md-4">
              <label htmlFor="tag" className="form-label fw-semibold">
                Tag
              </label>
              <input
                type="text"
                id="tag"
                className="form-control form-control-lg rounded-3"
                placeholder="Optional tag"
                value={noteData.tag}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-4 flex-grow-1">
            <label htmlFor="description" className="form-label fw-semibold">
              Description
            </label>
            <textarea
              id="description"
              className="form-control noteform-textarea"
              rows={8}
              placeholder="Write your note details here..."
              value={noteData.description}
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-end gap-3 mt-auto">
            <button
              type="button"
              className="btn btn-outline-secondary noteform-btn"
              onClick={handleReset}
              disabled={loading}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-primary noteform-btn-primary"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Processing..." : isNewForm ? "Create Note" : "Update Note"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
