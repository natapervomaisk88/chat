import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home({ socket }) {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", user);
    navigate("/chat");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Вход в чат</h2>
      <label htmlFor="user">User Name</label>
      <input
        type="text"
        id="user"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <button type="submit">OK</button>
    </form>
  );
}
