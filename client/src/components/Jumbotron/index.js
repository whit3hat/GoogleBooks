import React from 'react';

function Jumbotron({ chidlren }) {
    return (
        <div style={{ height: 300, clear: 'both', paddingTop: 120, textAlign: 'center'}}
        className='jumbotron'
        >
            {chidlren}
        </div>
    );
}

export default Jumbotron;