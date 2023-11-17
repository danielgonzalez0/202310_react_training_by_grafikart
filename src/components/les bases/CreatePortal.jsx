import React from 'react';
import Title from '../Title';
import BackToHome from '../BackToHome';
import { createPortal } from 'react-dom';

function Modal() {
  return createPortal(
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: '50%',
        padding: 10,
        border: 'solid 1px grey',
        background: '#FFF',
        transform: 'translate(50%, -50%)',
      }}
    >
      Je suis une modale
    </div>, document.body
  );
}

const CreatePortal = () => {
  return (
    <>
      <Title color={'red'} bgColor={'skyBlue'}>
        {' '}
        Les portails dans React
      </Title>
      <BackToHome />
      <div
        style={{
          height: 300,
          overflowY: 'scroll',
          background: '#EEE',
          margin: 20,
          position: 'relative',
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          iusto sapiente blanditiis doloremque. Sapiente recusandae vel velit
          eveniet, consequuntur nemo sint non nam expedita aperiam rem,
          laboriosam, dolor quasi neque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          iusto sapiente blanditiis doloremque. Sapiente recusandae vel velit
          eveniet, consequuntur nemo sint non nam expedita aperiam rem,
          laboriosam, dolor quasi neque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          iusto sapiente blanditiis doloremque. Sapiente recusandae vel velit
          eveniet, consequuntur nemo sint non nam expedita aperiam rem,
          laboriosam, dolor quasi neque?
        </p>
        <Modal />
      </div>
    </>
  );
};

export default CreatePortal;

//         Les portails sont un moyen de "téléporter" un élément dans un endroit spécifique du DOM plutôt que comme un enfant de notre élément courant. Ils sont très intéressants pour les boîtes modales ou les systèmes de notification qui doivent souvent se retrouver au premier niveau de la structure d'une page.

// Pour créer un portail , il suffit d'utiliser la méthode createPortal()en lui spécifiant l'élément cible en second paramètre.

// import { createPortal } from 'react-dom';

// function MyComponent() {
//   return (
//     <div style={{ border: '2px solid black' }}>
//       <p>Cet enfant est placé dans la div parente.</p>
//       {createPortal(
//         <p>Cet enfant est placé dans le corps du document.</p>,
//         document.body
//       )}
//     </div>
//   );
// }
