import React, { useState } from 'react';
import { Note } from '../types/Note';
import { supabase } from '../supabaseClient';

interface NoteFormProps {
  onSave: (note: Note) => void;
}


const NoteForm: React.FC<NoteFormProps> = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    if (title.trim() === '' || content.trim() === '') {
      alert('タイトルと内容は必須です');
      return;
    }
  
    const { data, error } = await supabase
      .from('notes')
      .insert([
        {
          title,
          content,
          date: new Date(),
        },
      ])
      .select();
  
    if (error) {
      console.error('エラーが発生しました:', error.message);
      return;
    }
  
    // dataがnullでないことを確認
    if (data && Array.isArray(data) && data.length > 0) {
      const newNote: Note = {
        id: data[0].id, // 新しいノートのIDを取得
        title,
        content,
        date: new Date(),
      };
  
      onSave(newNote); // 親コンポーネントの状態を更新
  
      // 入力欄を空にセット
      setTitle('');
      setContent('');
    } else {
      console.error('挿入後のデータが取得できませんでした。', data);
    }
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
