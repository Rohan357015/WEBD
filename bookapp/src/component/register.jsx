import React from 'react'

function Register() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#e8f0fe',
      fontFamily: 'Arial, sans-serif'
    },
    form: {
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '320px'
    },
    heading: {
      marginBottom: '20px',
      textAlign: 'center',
      color: '#333'
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px'
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }
  }

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.heading}>Register</h2>
        <input type="text" placeholder="Full Name" style={styles.input} />
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <input type="password" placeholder="Confirm Password" style={styles.input} />
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  )
}

export default Register