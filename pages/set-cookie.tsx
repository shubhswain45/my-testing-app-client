// App.tsx (Frontend React Component)
const App = () => {

  const handleSetCookie = () => {
    // Send a GET request to set the cookie
    fetch('https://my-testing-app-server.onrender.com/set-cookie', {
      method: 'GET',
      credentials: 'include', // Allow cookies to be sent and received with cross-origin requests
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Log response when cookie is set
        // Optionally, fetch the cookie value after setting it
      });
  };

  return (
    <div>
      <h1>Frontend</h1>
      <button onClick={handleSetCookie}>Set Cookie</button>
    </div>
  );
};

export default App;
