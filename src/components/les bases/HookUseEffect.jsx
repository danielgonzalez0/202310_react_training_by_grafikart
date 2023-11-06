import React, { useEffect, useState } from 'react';
import Title from '../Title';
import BackToHome from '../BackToHome';
import Input from '../../components/decouverte/TP_liste_produit/forms/Input';
import Checkbox from '../decouverte/TP_liste_produit/forms/Checkbox';

const EditTitle = () => {
  const [title, setTitle] = useState('');
  const [firstname, setFirstname] = useState('');
  const [y, setY] = useState(0);

  useEffect(() => {
    const originalTitle = document.title;
    return () => {
      document.title = originalTitle;
    };
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const handler = () => {
      console.log('scroll');
      setY(window.scrollY);
    };

    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <div className="vstack gap-2">
      <div>Scroll Y : {y}</div>
      <Input
        placeholder={'Modifier le titre'}
        value={title}
        onChange={setTitle}
      />
      <Input placeholder={'Prénom'} value={firstname} onChange={setFirstname} />
    </div>
  );
};

const HookUseEffect = () => {
  const [showInput, setShowInput] = useState(true);
  const [duration, setDuration] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(duration);

  const handleChange = (v) => {
    setDuration(v);
    setSecondsLeft(v);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((v) => {
        if (v <= 1) {
          clearInterval(timer);
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [duration]);

  return (
    <>
      <Title color={'red'} bgColor={'skyBlue'}>
        {' '}
        Les bases: le hook useEffect
      </Title>
      <BackToHome />
      <Checkbox
        checked={showInput}
        onChange={setShowInput}
        id="titleshow"
        label={'Afficher le champ titre'}
      />
      {showInput && <EditTitle />}
      <Input value={duration} onChange={handleChange} placeholder="Timer..." />
      <p>Décompte : {secondsLeft}</p>
      <div style={{ height: '300vh' }}></div>
    </>
  );
};

export default HookUseEffect;

// À propos de ce tutoriel
// Dans certains cas certains composants vont avoir besoin de transférer des informations à des systèmes externes à React. Dans ce cas là on va pouvoir utiliser la fonction useEffect.

// Cette fonction prendra en paramètre une fonction qui sera appelée lorsque la valeur d'au moins une des dépendances change (passée sous forme de tableau en 2 paramètres). Par exemple il est possible de mettre à jour le titre d'une page en fonction de l'état du composant.

// useEffect(() => {
//     document.title = title
// }, [title])
// L'utilisation de cette fonction doit être limitée à la gestion des effets de bord et il sera important de respecter les règles suivantes :

// On ne fera pas de changement d'état directement à la racine du useEffect.

// // On ne fera jamais ça !
// useEffect(() => {
//     setTitle(`Editer ${firstname} ${lastname}`)
// }, [firstname, lastname])

// // On peut simplement créer une variable
// const title = `Editer ${firstname} ${lastname}`
// En revanche vous pouvez par exemple utiliser un changement d'état dans le cas d'une opération asynchrone.

// useEffect(() => {
//    fetch('url')
//        .then(r => r.json())
//        .then((data) => setData(data))
// }, [])
// Un useEffect qui n'aurait pas de dépendance est un use effect qui ne sera appelé que lors du rendu initial du composant.

// Penser à nettoyer
// Dans certains cas on peut utiliser le useEffect pour venir brancher un écouteur sur un événement global (par exemple écouter le défilement dans la page). Dans ce cas là il sera impératif de penser à supprimer l'écouteur d'événements lorsque le composant est supprimé. Pour cela il faudra retourner une fonction dans la fonction d'appel du useEffect.

// useEffect(() => {
//   const handler = () => console.log('scroll')
//   window.addEventListener('scroll', handler)
//   return () => window.removeEventListener('scroll', handler)
// })
// De manière générale, il faut penser que les composants doivent nettoyer tous les effets de bord qu'ils enregistrent.

// Attention aux dépendances
// Enfin un dernier point . Lors de l'utilisation d'un useEffect dès qu'une variable provenant du composant est utilisée elle devra impérativement être ajoutée au tableau de dépendance. On pourra cependant omettre les fonctions de changement d'état qui ne changent jamais (comme par exemple le setter reçu dans le cas du useState).
