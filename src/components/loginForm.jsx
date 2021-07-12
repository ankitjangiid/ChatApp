import React, { useState } from "react";
import axios from "axios";

const projectID = "f36b70f3-1417-436b-aeac-3f1244d9bc15";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // this is the object which contains login creds
    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    // here we're just checking if creds are right or wrong
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      // below line of code will only work if login creds are same
      // to store the username and password to the local storage so we don't have to re-enter creds again
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("Username and password doen't match!");
    }
  };

  const handleClick = () => {
    setError("");
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button" onClick={handleClick}>
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
      <div className="copyright">
        <p>&copy; Ankit</p>
      </div>
    </div>
  );
};
export default LoginForm;
