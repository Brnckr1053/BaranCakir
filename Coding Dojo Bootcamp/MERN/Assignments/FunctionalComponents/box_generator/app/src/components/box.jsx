import React from 'react';

const Box = props => {

    const inlineStyles = {
        height: `${props.size}px`,
        width: `${props.size}px`,
        backgroundColor: props.color,
        display: 'inline-block',
        margin: '20px'
    }

    return (
        <div style={inlineStyles}></div>
        );
}

export default Box;