import { useState } from 'react'
import './App.css'
import NoteForm from './components/NoteForm'
import { Note } from './types/Note'
import { NoteList } from './components/NoteList'

const App = () => {
  const [notes, setNotes] = useState<Note[]>([])

  const handleSaveNote = (newNote: Note) => {
    setNotes([...notes, newNote]);
  }
  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id)); // ノートを削除
  };

  return (
    <div>
      <NoteForm onSave={handleSaveNote} />
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  )
}

export default App
