import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const style = {
  display: 'inline-block',
  margin: '10px 0',
};

const BackToHome = memo(function BackLink() {
  return (
    <NavLink to={'/'} style={style}>
      retour page principal
    </NavLink>
  );
});

export default BackToHome;
