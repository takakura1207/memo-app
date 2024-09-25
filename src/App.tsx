import { useEffect, useState } from 'react'
import './App.css'
import NoteForm from './components/NoteForm'
import { Note } from './types/Note'
import { NoteList } from './components/NoteList'
import { supabase } from './supabaseClient'

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data, error } = await supabase.from('notes').select('*');

      if (error) {
        console.error('エラーが発生しました:', error.message);
      } else {
        setNotes(data || []);
      }
    };

    fetchNotes();
  }, []);

  const handleSaveNote = async (newNote: Note) => {
    setNotes((prevNotes) => [...prevNotes, newNote]); // 新しいノートを追加

    // ここで再度ノートをフェッチする必要はない
    // Supabase に追加したノートの状態を反映するため
  };

  const handleDeleteNote = async (id: string) => {
    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('削除中にエラーが発生しました:', error.message);
    } else {
      setNotes((prevNotes) => prevNotes.filter(note => note.id !== id)); // ノートを削除
    }
  };

  return (
    <div>
      <h1 className='text-center font-bold'>ノートアプリ</h1>
      <div className='note-view'>
        <NoteForm onSave={handleSaveNote} /> {/* onSaveを渡す */}
        <NoteList notes={notes} onDelete={handleDeleteNote} />
      </div>
    </div>
  );
};

export default App;

