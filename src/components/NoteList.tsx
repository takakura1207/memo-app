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
        <div className="container border ml-6 flex flex-col space-y-2 my-5" key={note.id}>
          <h3>title:{note.title}</h3>
          <p className="break-words overflow-hidden">content:{note.content}</p>
          <div className="px-1 text-right">
            <button 
              className="my-1 px-2 py-2 
                        border-1 border-red-500 rounded-md 
                        bg-gradient-to-b from-red-600 to-red-400
                        hover:from-red-500 hover:to-red-300
                        text-white shadow-lg
                        "
              onClick={() => onDelete(note.id)}
            >
              削除
            </button>
          </div>        
        </div>
      ))}
    </div>
  )
}