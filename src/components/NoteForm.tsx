import React, { useState } from 'react';
import { Note } from '../types/Note';

interface NoteFormProps {
  onSave: (note: Note) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    const newNote: Note = {
      id: new Date().toISOString(),
      title,
      content,
      date: new Date(),
    };
    onSave(newNote);

    // 入力欄を空にセット
    setTitle('');
    setContent('');
  };

  return (
    <div className='flex justify-center items-center gap-4'>
      <input
        className='border border-black'
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル"
      />
      <textarea
        className='border border-black '
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="内容"
      />
      <button 
        onClick={handleSubmit}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
      >
        保存
      </button>
    </div>
  );
};

export default NoteForm;
