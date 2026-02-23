import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function App() {
  const [activeGenre, setActiveGenre] = useState("fiction");
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

    const handleLogout = () => {
    localStorage.removeItem('username');
    setUser(null);
    navigate('/login');
  }

  return (
    <div className="app-container">
      <Header setSearch={setSearch} search={search} activeUser={user} handleLogout={handleLogout}/>
      <Navbar onSelectGenre={setActiveGenre} />

      <div className="main-layout">
        <Sidebar onSelectGenre={setActiveGenre} activeGenre={activeGenre} />
        <Main genre={activeGenre} search={search} />
      </div>
    </div>
  );
}

export default App;
