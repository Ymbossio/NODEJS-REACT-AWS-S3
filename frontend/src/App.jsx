import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [post, setPost] = useState({
    title: '',
    photo: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', post.photo);
    formData.append('title', post.title);

    try {
      const response = await axios.post('http://localhost:2508/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error al subir el archivo:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Título'
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
        />
        <input
          type='file'
          name='photo'
          onChange={e => setPost({ ...post, photo: e.target.files[0] })}
        />
        <button type='submit'>Subir</button>
      </form>
    </>
  );
}

export default App;
