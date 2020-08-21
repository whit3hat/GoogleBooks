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