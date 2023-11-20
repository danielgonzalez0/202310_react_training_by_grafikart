import React from 'react';


/**
 * 
 * @param {"danger" | "info" | "warning"} type 
 * @returns {JSX.Element}
 */
const Alert = ({type = 'info', children}) => {
    return (
      <div className={`alert alert-${type}`} role="alert">
       {children}
      </div>
    );
};

export default Alert;