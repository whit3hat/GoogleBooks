<<<<<<< HEAD
import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
=======
import React from 'react';
import './style.css';

function DeleteBtn(props){
    return (
        <span className='delete-btn' {...props} roles='button' tabIndex='0'>
           ✗ 
        </span>
    );
}

export default DeleteBtn;
>>>>>>> 0c7d7352aebcbf282b975e4d23e986e84e845f26
