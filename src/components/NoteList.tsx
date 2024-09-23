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
        <div className="container border ml-6 flex flex-col space-y-2" key={note.id}>
          <h3>title:{note.title}</h3>
          <p>content:{note.content}</p>
          <button 
            className="my-1 px-2 py-2 
                       border-1 border-blue-500 rounded-md 
                       bg-gradient-to-b from-blue-600 to-blue-400
                       hover:from-blue-500 hover:to-blue-300
                       text-white shadow-lg
                       "
            onClick={() => onDelete(note.id)}
          >
            削除
          </button>
        </div>
      ))}
    </div>
  )
}