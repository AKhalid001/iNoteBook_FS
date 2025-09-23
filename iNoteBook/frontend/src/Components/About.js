import { useContext } from "react"
import { NoteContext } from "../Context/NoteContext";

export const About = () => {
  const a = useContext(NoteContext);
  return (
    <div>
      <h1>This is about {a.name} </h1>
    </div>
  )
}
