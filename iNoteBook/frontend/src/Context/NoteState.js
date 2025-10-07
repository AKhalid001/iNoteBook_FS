import { useState } from "react";
import { NoteContext } from "./NoteContext";

export const NoteState = ({ children }) => {
  const hostname = "http://localhost:5000";

  const getAuthHeaders = () => ({
    "Content-Type": "application/json",
    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDViNjU5YWNmMWYwOWU1ODJhMTg2ZSIsImlhdCI6MTc1ODgzNjM1NH0.IMOwtvyjB6dVDyzy0UdwmxBOjLdhEieCqaH4MRpk-4s"
  });

  const [myNotes, setMyNotes] = useState([]);

  // READ: Get all notes
  const readNote = async () => {
    try {
      const response = await fetch(`${hostname}/notes/read`, {
        method: "GET",
        headers: getAuthHeaders(),
      });
      const data = await response.json();
      setMyNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // CREATE: Add new note
  const createNote = async ({ title, description, tag }) => {
    try {
      const response = await fetch(`${hostname}/notes/create`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ title, description, tag }),
      });
      const data = await response.json();
      setMyNotes([...myNotes, data]);
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  // UPDATE: Modify existing note
  const updateNote = async (id, { title, description, tag }) => {
    try {
      const response = await fetch(`${hostname}/notes/update/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify({ title, description, tag }),
      });
      const data = await response.json();

      setMyNotes((prevNotes) =>
        prevNotes.map((note) => (note._id === id ? data : note))
      );
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  // DELETE: Remove note
  const deleteNote = async (id) => {
    try {
      await fetch(`${hostname}/notes/delete/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      setMyNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ myNotes, createNote, readNote, updateNote, deleteNote }}
    >
      {children}
    </NoteContext.Provider>
  );
};
