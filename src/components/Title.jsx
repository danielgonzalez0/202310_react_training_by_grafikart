import React from 'react';

const Title = ({ color, bgColor, children }) => {
    const style = { color: color, backgroundColor: bgColor };
    const props = { id: 'monId', className: 'maClass' };
    const handleClick = () => {
      alert("J'ai cliqué sur le titre");
    };
    return (
      <h1
        id="title"
        className="title"
        style={style}
        {...props}
        onClick={handleClick}
      >
        {children}
      </h1>
    );
};

export default Title;