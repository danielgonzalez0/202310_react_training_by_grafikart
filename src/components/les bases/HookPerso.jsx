import React, { useState } from 'react';
import Title from '../Title';
import BackToHome from '../BackToHome';
import { useToggle } from '../../hooks/useToggle';
import { useIncrement } from '../../hooks/useIncrement';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import Input from '../decouverte/TP_liste_produit/forms/Input';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const HookPerso = () => {
  const [checked, toggleCheck] = useToggle(false);
  const { count, increment, decrement } = useIncrement({
    base: 0,
    max: 10,
    min: 0,
  });
  const [name, setName] = useState('');
  useDocumentTitle(name ? `Editer ${name}` : null);
  const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')

  return (
    <>
      <Title color={'red'} bgColor={'skyBlue'}>
        {' '}
        Les bases: Créer un hook personnalisé
      </Title>
      <BackToHome />
      <div>
        <input type="checkbox" checked={checked} onChange={toggleCheck} />
        {checked ? 'Je suis coché' : 'Je ne suis pas coché'}
      </div>
      <div>
        Compteur {count}
        <button onClick={increment}>Incrémenter</button>
        <button onClick={decrement}>Décrémenter</button>
      </div>
      <Input value={name} onChange={setName} label="Nom" />
      <div>
        {loading && (
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Chargement...</span>
          </div>
        )}
        {errors && (
          <div className="alert alert-danger">{errors.toString()}</div>
        )}
        {data && (
          <div>
            <ul>
              {data.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default HookPerso;

// Lorsque l'on travaille avec React on va avoir la possibilité de créer des hooks personnalisés en se basant sur les fonctions que l'on a déjà vu précédemment. L'objectif est de limiter la répétition à l'intérieur de nos composants en se créant des fonctions réutilisable. Par convention une fonction qui utilise un hook deviendra un hook et on préfixera son nom par use pour les identifier plus facilement. Aussi, je vous propose quelques exemples pour pratiquer.

// useToggle()
// On aura souvent besoin de faire osciller une valeur entre vrai et faux pour par exemple gérer l'affichage ou le masquage d'un élément. Afin de nous simplifier la tâche nous allons nous créer un Hook useToggle() qui permettra de faire cette logique.

// /**
//  * @param {boolean} initial
//  */
// export function useToggle (initial = false) {
//     const [state, setState] = useState(initial)
//     const toggle = () => setState(v => !v)
//     return [state, toggle]
// }
// useIncrement()
// Pour cet exemple nous allons créer un hook permettant d'incrémenter ou de décrémenter une valeur tout en offrant la possibilité de définir une valeur maximale ou minimale à ne pas dépasser.

// import {useState} from "react";

// export function useIncrement ({base = 0, max = Infinity, min = -Infinity}) {
//     const [state, setState] = useState(base)
//     return {
//         count: state,
//         increment: () => setState(v => v < max ? v+1 : v),
//         decrement: () => setState(v => v > min ? v-1 : v)
//     }
// }
// useDocumentTitle()
// On a vu dans un chapitre précédent qu'il était possible de changer le titre de la page en utilisant le Hook useEffect. On va créer un hook personnalisé qui permettra d'intégrer cette logique simplement.

// useDocumentTitle('Voici le titre de la page')
// À chaque fois que la valeur reçue en paramètre changera le titre de la page sera modifié.

// import {useEffect, useRef} from "react";

// export function useDocumentTitle (title) {

//     // On garde en mémoire le titre original pour le réinitialiser
//     // si le composant est démonté
//     const titleRef = useRef(document.title)

//     useEffect(() => {
//         return () => {
//             document.title = titleRef.current
//         }
//     }, []);

//     useEffect(() => {
//         document.title = title ? title : titleRef.current
//     }, [title]);
// }
// useFetch()
// Très souvent lorsque l'on va créer des composants nous allons avoir besoin de récupérer les données depuis un serveur. Afin d'éviter d'avoir à réécrire la logique de récupération systématiquement nous allons nous créer un hook personnalisé qui permettra de faire appel à un serveur et qui nous indiquera l'état du chargement. La signature sera la suivante :

// const {data, loading, errors} = useFetch('http://monapi')
// Voici un exemple d'implémentation :

// import {useEffect, useState} from "react";

// /**
//  * @param {string} url
//  * @param {FetchEventInit} options
//  */
// export function useFetch (url, options = {}) {
//     const [loading, setLoading] = useState(true)
//     const [data, setData] = useState(null)
//     const [errors, setErrors] = useState(null)

//     useEffect(() => {
//         fetch(url, {
//             ...options,
//             headers: {
//                 'Accept': 'application/json; charset=UTF-8',
//                 ...options.headers
//             }
//         }).then(r => r.json()).then(data => {
//             setData(data)
//         }).catch((e) => {
//             setErrors(e)
//         }).finally(() => {
//             setLoading(false)
//         })
//     }, []);

//     return {
//         loading, data, errors
//     }
// }
