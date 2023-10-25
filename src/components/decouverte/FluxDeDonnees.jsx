import React, { useState } from 'react';
import Title from '../Title';
import BackToHome from '../BackToHome';

const CGUCheckbox = ({ checked, onCheck }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheck(e.target.checked)}
        />
        Accepter les conditions d'utilisation
      </label>
    </div>
  );
};

const FluxDeDonnees = () => {
  const [isTermAccepted, setIsTermAccepted] = useState(false);

  return (
    <>
      <Title color={'red'} bgColor={'skyBlue'}>
        {' '}
        Découverte: le flus de données dans React
      </Title>
      <BackToHome />
      {/* partie cours Grafikart */}
      <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
      <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
    </>
  );
};

export default FluxDeDonnees;
