import React, { useEffect, useRef, useState } from 'react';
import Title from '../Title';
import BackToHome from '../BackToHome';
import Input from '../decouverte/TP_liste_produit/forms/Input';

const UseRef = () => {

const ref = useRef(null)
const prefixRef = useRef(null)
const [prefix, setPrefix] = useState('')

prefixRef.current = prefix

useEffect(()=>{
    console.log(ref.current.offsetHeight);
},[])
useEffect(()=>{
    const timer = setInterval(()=>{
      console.log(prefixRef.current);
    }, 1000)
    return ()=>{
      clearInterval(timer)
    }
},[])

    return (
        <div ref={ref}>
          <Input label="prefix" value={prefix} onChange={setPrefix}/>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime maiores quis architecto asperiores ullam reprehenderit aliquam id voluptatibus corrupti ipsum, unde fugit tenetur quas cum reiciendis magnam possimus vitae suscipit accusantium voluptatum eveniet? Ea molestias consequatur dolor doloribus odit natus.
        </div>
    )
}

const HookUseRef = () => {
    return (
      <>
        <Title color={'red'} bgColor={'skyBlue'}>
          {' '}
          Les bases: le hook useRef
        </Title>
        <BackToHome />
        <UseRef/>
      </>
    );
};

export default HookUseRef;

// À propos de ce tutoriel
// Le hook useRef va permettre de référencer une valeur qui n'est pas nécessaire au code du rendu et contrairement à l'état sa valeur pourra être mutée.

// const ref = useRef(initialValue)

// // On peut ensuite modifier ou récupérer la valeur via la propriété "current"
// ref.current = "Nouvelle valeur"
// Lorsque l'on modifie la valeur à l'intérieur d'une référence il n'y a pas de changement d'état, le composant n'est alors pas re rendu. Aussi dans le code JSX on ne fera jamais appel à une référence.

// // Interdit !
// return <div>{ref.current}</div>
// Ref et accès au DOM
// Les références seront souvent utilisées pour récupérer un élément du DOM afin d'effectuer des opérations spécifiques.

// function App () {
//     const inputRef = useRef(null)
//     const handleClick = () => {
//         inputRef.current.focus()
//     }

//     return <div>
//         <input type="text" ref={inputRef}/>
//         <button onClick={handleClick}>
//             Focaliser le champs
//             </button>
//     </div>
// }
// Aller plus loin
// En apprendre plus sur la documentation