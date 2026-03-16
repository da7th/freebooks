import "./Sidebar.css";
// import { useState, useEffect } from "react";

function Sidebar({onSelectGenre, onSelectItem, activeGenre, title = "Categories", items = []}) {

const categories = [
  'Fiction', 'Fantasy', 'Romance', 'Thriller', 'Mystery', 'Horror', 
  'Biography', 'History', 'Science', 'Philosophy', 'Religion', 'Art', 
  'Psychology', 'Cooking', 'Juvenile Fiction', 'Computers', 'Business',
  'Poetry', 'Drama', 'Education', 'Self-help', 'Health', 'Fitness',
  'Medical', 'Law', 'Music', 'Photography', 'Architecture', 'Design',
  'Travel', 'Gardening', 'Pets', 'Nature', 'Sports', 'Recreation',
  'True Crime', 'Social Science', 'Political Science', 'Economics', 
  'Mathematics', 'Technology', 'Engineering', 'Crafts', 'Antiques', 
  'Comics', 'Graphic Novels', 'Language Arts', 'Reference', 
  'Family', 'Relationships', 'Humor'
];

const listToRender = items.length > 0 ? items : categories;

  return (
    <div className="sidebar-div">
      <h2 className="sidebar-title">{title}</h2>
      <nav className="sidebar-nav">
        {listToRender.map(cat => (
        <button key={cat} onClick={() => {
          if (onSelectItem) onSelectItem(cat);
          else if (onSelectGenre) onSelectGenre(cat.toLowerCase());
        }} className={`x-name ${activeGenre === cat.toLowerCase() ? 'active' : ''}`}>
          {cat}
        </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
