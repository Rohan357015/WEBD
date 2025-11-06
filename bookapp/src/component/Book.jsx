import React, { useState } from 'react';

const Book = ({ title, price }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);

  // Internal (object-based) CSS
  const styles = {
    box: {
      border: '2px solid #ccc',
      borderRadius: '12px',
      padding: '20px',
      width: '200px',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease',
      margin: '15px auto',
    },
    img: {
      borderRadius: '10px',
      marginBottom: '10px',
    },
    info: {
      fontSize: '16px',
      margin: '8px 0',
      color: '#333',
      fontWeight: '500',
    },
    button: {
      backgroundColor: '#007bff',
      border: 'none',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '6px',
      cursor: 'pointer',
      margin: '0 8px',
      fontSize: '18px',
      transition: '0.2s',
    },
  };

  return (
    <div
      style={{
        ...styles.box,
        transform: count > 0 ? 'scale(1.03)' : 'scale(1)',
      }}
    >
      <img
        src="https://marketplace.canva.com/EAFpzM5bvfU/2/0/1236w/canva-blue-and-yellow-illustrative-math-notebook-cover-VcHnH1J3slU.jpg"
        alt="Book Cover"
        width={150}
        height={100}
        style={styles.img}
      />
      <p style={styles.info}>{title}</p>
      <p style={styles.info}>₹{price}</p>
      <div>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
          onClick={increment}
        >
          +
        </button>
        <span style={styles.info}>{count}</span>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Book;
