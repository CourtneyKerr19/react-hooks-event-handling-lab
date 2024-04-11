import React from 'react';

function EyesOnMe() {
    // Function to call when the button is focused
    function handleFocus() {
        console.log('Good!');
    }

    // Function to call when the button loses focus
    function handleBlur() {
        console.log('Hey! Eyes on me!');
    }

    return (
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    );
}

export default EyesOnMe;
