import React from 'react';
import Button from './Button';

/**
 * Composant de carte réutilisable pour afficher des informations structurées.
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.image - L'URL de l'image à afficher dans la carte.
 * @param {string} props.title - Le titre de la carte.
 * @param {string} props.description - La description de la carte.
 * @param {string} props.href - L'URL de destination du bouton (si présent).
 * @param {string} props.buttonLabel - Le libellé du bouton (si présent).
 * @returns {JSX.Element} Composant de carte React.
 */
const Card = ({ image, title, description, href, buttonLabel }) => {
  const showButton = !!(href && buttonLabel);

  return (
    <div className="card">
      {image && <img src={image} className="card-img-top" alt="" />}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {description && <p className="card-text">{description}</p>}
        {showButton && (
          <Button variant="primary" href={href}>
            {buttonLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
