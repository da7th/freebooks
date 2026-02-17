import "./Sidebar.css";
// import { useState, useEffect } from "react";

function Sidebar({onSelectGenre, activeGenre}) {

  const categories = [
    'Fiction', 'Fantasy', 'Romance', 'Thriller', 'Mystery', 'Horror', 
    'Biography', 'History', 'Science', 'Philosophy', 'Religion', 'Art', 
    'Psychology', 'Cooking', 'Juvenile', 'Computers', 'Business'
  ];

  return (
    <div className="sidebar-div">
      <h2 className="sidebar-title">Categories</h2>
      <nav className="sidebar-nav">
        {categories.map(cat => (
        <button key={cat} onClick={() => onSelectGenre(cat.toLowerCase())} className="x-name">
          {cat}
        </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
