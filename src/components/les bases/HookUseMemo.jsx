import React, { useId, useMemo, useState } from 'react';
import Title from '../Title';
import BackToHome from '../BackToHome';
import Input from '../decouverte/TP_liste_produit/forms/Input';

function passwordSecurity(password) {
  //fausse lenteur
  let startTime = performance.now();
  while (performance.now() - startTime < 200) {}

  if (password.length < 3) {
    return 'Faible';
  } else if (password.length < 6) {
    return 'Moyen';
  }
  return 'Fort';
}

const UseMemo = () => {
  const [firstName, setFirstname] = useState('John');
  const [password, setPassword] = useState('MotDePasse');
  const security = useMemo(() => {
    return passwordSecurity(password);
  }, [password]);

  console.log(useId())

  return (
    <div className="container my-3 vstack gap-2">
      <Input
        label="Nom d'utilisteur"
        value={firstName}
        onChange={setFirstname}
      />
      <div>
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        sécurité : {security}
      </div>
    </div>
  );
};

const HookUseMemo = () => {
  return (
    <>
      <Title color={'red'} bgColor={'skyBlue'}>
        {' '}
        Les bases: le hook useMemo
      </Title>
      <BackToHome />
      <UseMemo />
    </>
  );
};

export default HookUseMemo;

// Comme on l'a vu dans le chapitre parlant des changements d'état la fonction d'un composant est appelée à chaque nouveau rendu ce qui peut parfois amener à des problèmes si certains éléments sont complexes à calculer.

// function App () {
//     const [password, setPassword] = useState('password')
//     const [count, setCount] = useState(0)
//     const hashedPassword = slowHashingMethod(password)

//     return <div>
//         <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
//         Hash : {hashedPassword}
//         Compteur : {count}
//         <button onClick={setCount(v => v + 1)}>Incrémenter</button>
//     </div>
// }
// Dans cette situation il est un petit peu dommage de demander à React de recalculer le hash du mot de passe si seul "count" change. Pour limiter l'impact en termes de performance on va avoir la possibilité d'utiliser la fonction useMemo() qui permettra de mémoriser une valeur tant que ses dépendances ne changent pas.

// function App () {
//     const [password, setPassword] = useState('password')
//     const [count, setCount] = useState(0)
//     const hashedPassword = useMemo(() => {
//         return slowHashingMethod(password)
//     }, [password])

//     return <div>
//         <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
//         Hash : {hashedPassword}
//         Compteur : {count}
//         <button onClick={setCount(v => v + 1)}>Incrémenter</button>
//     </div>
// }
// Cette fonction n'aura d'autres utilisations que d'améliorer les performances afin de limiter les calculs . On pourrait alors être tenté de l'utiliser systématiquement , mais cela serait une mauvaise chose. Pour des opérations simples il est dommage d'utiliser plus de mémoire que nécessaire et on laissera dans ce cas là React refaire les calculs à chaque rendu. On réservera l'utilisation de cette fonction à des opérations lentes.
