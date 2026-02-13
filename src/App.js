import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from './components/Main/Main';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <div className="main-layout">
        <Sidebar />
          <Main />
      </div>
    </div>
  );
}

export default App;
