import { useContext } from "react";
import { NoteContext } from "../../Context/NoteContext";

export const About = () => {
  const { name } = useContext(NoteContext); // Assuming you have a name in your context

  const description = `
    iNotebook is a simple, fast, and intuitive note-taking application designed to help you 
    organize your thoughts, tasks, and important information efficiently. With iNotebook, 
    you can create, edit, and manage your notes with ease, add optional tags for better 
    categorization, and access your notes anytime, anywhere. Whether it's for personal use, 
    work, or study, iNotebook is your reliable digital notebook to keep everything in one place.
  `;

  return (
    <div className="container py-5" style={{ minHeight: "80vh" }}>
      <div className="card shadow-sm rounded-4 p-4 mx-auto" style={{ maxWidth: "700px" }}>
        <h1 className="mb-3 text-primary" style={{ fontWeight: 600 }}>
          About {name || "iNotebook"}
        </h1>
        <p className="text-secondary" style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </div>
  );
};
