import React, { useState, useEffect } from 'react';
import Card from './components/card.jsx';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/about')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Student Data</h1>
      {data.map(student => (
        <Card key={student.id} data={{ id: student.id, name: student.name, className: student.class }} />
      ))}
    </div>
  );
}

export default App;