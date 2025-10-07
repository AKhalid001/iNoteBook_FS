import React, { useContext, useState, useEffect } from "react";
import { NoteContext } from "../../Context/NoteContext";
import { useLocation, useNavigate } from "react-router-dom";

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
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center p-4"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <div
        className="card shadow-lg border-0 rounded-4 w-100"
        style={{ maxWidth: "850px", minHeight: "85vh" }}
      >
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
                style={{ transition: "all 0.2s" }}
              />
              {noteData.error && (
                <div className="invalid-feedback">{noteData.error}</div>
              )}
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
              className="form-control rounded-3"
              rows={8}
              placeholder="Write your note details here..."
              value={noteData.description}
              onChange={handleChange}
              style={{ resize: "none", fontSize: "15px" }}
            />
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-end gap-3 mt-auto">
            <button
              type="button"
              className="btn btn-outline-secondary px-4 py-2 rounded-3"
              onClick={handleReset}
              disabled={loading}
              style={{ fontWeight: 500 }}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-primary px-4 py-2 rounded-3 shadow-sm"
              onClick={handleSubmit}
              disabled={loading}
              style={{
                fontWeight: 500,
                background:
                  "linear-gradient(90deg, #0d6efd 0%, #0a58ca 100%)",
                border: "none",
              }}
            >
              {loading
                ? "Processing..."
                : isNewForm
                ? "Save Note"
                : "Update Note"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
