<<<<<<< HEAD
import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
=======
import React from 'react';
import './style.css';

// This file exports both the list and list item comps

export function List({ children }) {
    return (
        <div className='list-overflow-container'>
            <ul className='list=group'>{children}</ul>
        </div>
    );
}

export function ListItem({ children }) {
return <li className='list-group-item'>{children}</li>;
}
>>>>>>> 0c7d7352aebcbf282b975e4d23e986e84e845f26
