import React from 'react'
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Main from '../../components/Main/Main';
import Sidebar from '../../components/Sidebar/Sidebar';

function Account() {

  const accountMenu = ['Editar dados', 'Livros lidos', 'Livros em progresso', 'Quero ler', 'Livros favoritos'];

  const handleMenuClick = (item) => {
    console.log("Clicou em: ", item);
  }

  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <h1 style={{ textAlign: 'center', margin: '30px 0' }}>Bem-vindo, Erick!</h1>

      <div className="main-layout">

        <Sidebar 
        title="Minha conta"
        items={accountMenu}
        onSelectItem={handleMenuClick} 
        />

        <div className="content">
           <Main />
        </div>
      </div>
    </div>
  )
}

export default Account;