import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from './components/Main/Main';
import { useState } from "react";

function App() {
  const [activeGenre, setActiveGenre] = useState('fiction');
  const [search, setSearch] = useState("");

  return (
    <div className="app-container">
      <Header setSearch={setSearch} search={search}/>
      <Navbar onSelectGenre={setActiveGenre} />

      <div className="main-layout">
        <Sidebar onSelectGenre={setActiveGenre} activeGenre={activeGenre} />
          <Main genre={activeGenre} search={search} />
      </div>
    </div>
  );
}

export default App;
