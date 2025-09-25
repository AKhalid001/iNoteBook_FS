import React, { useState } from "react";

const NewNote = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [error, setError] = useState("");

    const handleSave = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            setError("Title is required");
            return;
        }
        setError("");
        console.log({ title, description, tag });
    };

    const handleReset = () => {
        setTitle("");
        setDescription("");
        setTag("");
        setError("");
    };

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center bg-light p-4">
            <div className="card shadow w-100" style={{ maxWidth: "900px", height: "90%" }}>
                <div className="card-body d-flex flex-column h-100">
                    <h3 className="text-center mb-4">Create New Note</h3>

                    {/* Top row: Title and Tag */}
                    <div className="row mb-3">
                        <div className="col-md-8 mb-3 mb-md-0">
                            <label htmlFor="noteTitle" className="form-label">
                                Title <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className={`form-control ${error ? "is-invalid" : ""}`}
                                id="noteTitle"
                                placeholder="Enter note title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            {error && <div className="invalid-feedback">{error}</div>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="noteTag" className="form-label">
                                Tag
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="noteTag"
                                placeholder="Optional tag"
                                value={tag}
                                onChange={(e) => setTag(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-3 flex-grow-1">
                        <label htmlFor="noteDescription" className="form-label">
                            Description
                        </label>
                        <textarea
                            className="form-control h-100"
                            id="noteDescription"
                            placeholder="Enter note description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            style={{ resize: "none" }}
                        ></textarea>
                    </div>

                    {/* Buttons container pinned to bottom right with spacing */}
                    <div className="d-flex justify-content-end mt-4">
                        <button
                            type="button"
                            className="btn btn-secondary me-2"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleSave}
                        >
                            Save Note
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewNote;
