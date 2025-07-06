import { useState,useEffect } from 'react'
import api from './api';
import './App.css'

function App() {
  const [items,setItems] = useState([]);
  const [text,setText] = useState('');

  useEffect(() =>{
    fetchItems();
  }, []);

  const fetchItems = async () =>{
    const res = await api.get('/items');
    setItems(res.data);
  };

  const addItem = async () => {
    if (!text.trim()) return;
    const res =  await api.post('/items', { text });
    setItems([...items, res.data]);
    setText('');
  };

  const deleteItem = async (id) => {
    await api.delete(`/items/${id}`);
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className='container'>
      <h1>רשימת קניות</h1>
 
      <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder='הוסף פריט...'
      />
      <div className='add-row'>
      </div>
      <button onClick={addItem}>הוסף</button>

        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => deleteItem(item.id)}>מחק</button>
            </li>
          ))}
        </ul>

    </div>
  );
}

export default App
