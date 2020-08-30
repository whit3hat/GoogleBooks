<<<<<<< HEAD
import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
=======
import React from 'react';

// Export the container, row, and col comps from this file

// This container comp allows us to use a bootstrap container without needing class names
export function Container({ fluid, children }) {
return <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without needing classnames
export function Row({ fluid, chidlren }) {
return <div className={`row${fluid ? '-fluid' : ''}`}>{chidlren}</div>;
}

//This is col component lets us use bootstrap cols with less syntax
// eg <Col size='md-12'> Instead of <div className='col-md-12'>
export function Col({ size, children }) {
    return (
        <div 
          className={size
            .split('') 
            .map(size => 'col-' + size)
            .join('')}
        >
            {children}
        </div>
    );
}
>>>>>>> 0c7d7352aebcbf282b975e4d23e986e84e845f26
