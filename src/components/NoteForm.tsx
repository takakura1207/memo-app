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
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="内容"
      />
      <button onClick={handleSubmit}>保存</button>
    </div>
  );
};

export default NoteForm;
