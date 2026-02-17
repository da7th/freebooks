import "./Sidebar.css";
// import { useState, useEffect } from "react";

function Sidebar({onSelectGenre, activeGenre}) {

const categories = [
  'Fiction', 'Fantasy', 'Romance', 'Thriller', 'Mystery', 'Horror', 
  'Biography', 'History', 'Science', 'Philosophy', 'Religion', 'Art', 
  'Psychology', 'Cooking', 'Juvenile', 'Computers', 'Business',
  'Poetry', 'Drama', 'Education', 'Self-Help', 'Health', 'Fitness',
  'Medical', 'Law', 'Music', 'Photography', 'Architecture', 'Design',
  'Travel', 'Gardening', 'Pets', 'Nature', 'Sports', 'Recreation',
  'True Crime', 'Social Science', 'Political Science', 'Economics', 
  'Mathematics', 'Technology', 'Engineering', 'Crafts', 'Antiques', 
  'Comics', 'Graphic Novels', 'Language Arts', 'Foreign Languages',
  'Reference', 'Family', 'Relationships', 'Humor'
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
