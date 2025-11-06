import React from 'react'

function Login() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
      fontFamily: 'Arial, sans-serif'
    },
    form: {
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '300px'
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
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }
  }

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.heading}>Login</h2>
        <input type="text" placeholder="Username" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  )
}

export default Login