import React from "react";
import { Note } from "../types/Note";

interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void;
}

export const NoteList: React.FC<NoteListProps> = ({notes, onDelete}) => {
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => onDelete(note.id)}>削除</button>
        </div>
      ))}
    </div>
  )
}