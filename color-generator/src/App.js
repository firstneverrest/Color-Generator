import React, { useState } from 'react'
import Values from 'values.js'

import SingleColor from './components/SingleColor'
import './sass/main.scss'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error);
    }
    
  }

  return (
    <div className="container">
        <form onSubmit={handleSubmit} className="Form">
            <input type="text" 
                   value={color}
                   placeholder="#f15025" 
                   onChange={(e) => setColor(e.target.value)}/>
            <button type="submit">submit</button>
        </form>
        <section className="colors">
          {list.map((color, index) => {
            return <SingleColor key={index} {...color} index={index}/>
          })}
        </section>
    </div>
  );
}

export default App;
