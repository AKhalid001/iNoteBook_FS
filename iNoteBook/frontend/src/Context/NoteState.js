import { NoteContext } from "./NoteContext";


export const NoteState = (props) => {
    const state = {
        name: "Abd001",
        email: "abd.001@gmail.com",
        password : "abd@001"   
    };
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    );
}