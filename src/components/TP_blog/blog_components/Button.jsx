import React from 'react';

/**
 * @description
 * Crée un bouton avec un style défini par la prop `variant`.
 *
 * @param {"primary" | "secondary" | "danger"} variant
 *   Le style du bouton.
 *
 * @param {...any} props
 *   D'autres props à transmettre à l'élément HTML sous-jacent.
 *
 * @returns {JSX.Element}
 *   Un élément HTML de type `button` ou `a`.
 */
const Button = ({ variant = 'primary', ...props }) => {
  const newProps = {
    ...props,
    className: `btn btn-${variant}`,
  };

  if (props.href) {
    return <a {...newProps}></a>;
  }
  return <button {...newProps}></button>;
};

export default Button;


// Le composant Button est un composant React fonctionnel. Il prend deux props :

// variant: Une chaîne qui peut avoir l'une des valeurs "primary", "secondary", ou "danger". Cette prop détermine le style du bouton.
// ...props: Un objet qui contient toutes les autres props qui sont passées au composant. Ces props seront transmises à l'élément HTML sous-jacent.
// La fonction de rendu du composant Button renvoie un élément HTML. Le type d'élément HTML renvoyé dépend de la valeur de la prop props.href. Si la prop props.href est vraie, alors le composant renvoie un élément <a>. Sinon, le composant renvoie un élément <button>.

// Dans tous les cas, la valeur de la prop className est définie sur la valeur de la prop className qui a été créée plus tôt. Cette prop className est utilisée pour spécifier le style du bouton.