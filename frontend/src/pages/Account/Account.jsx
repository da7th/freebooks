import React from 'react'
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Main from '../../components/Main/Main';
import Sidebar from '../../components/Sidebar/Sidebar';

function Account() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
           <Main />
        </div>
      </div>
    </div>
  )
}

export default Account;