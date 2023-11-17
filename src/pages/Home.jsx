import React from 'react';
import Title from '../components/Title';
import { NavLink } from 'react-router-dom';

const Home = () => {
   const showTitle = true;
   const todos = [
     { title: 'Présenter react', path: '/' },
     { title: 'Présenter le JSX', path: '/' },
     { title: 'Créer des composants', path: '/' },
     { title: 'Le hook useState', path: '/hookUseState' },
     { title: 'Les formulaires en React', path: '/formulaires' },
     { title: 'Le flux de données en React', path: '/fluxdonnees' },
     { title: 'TP React: Liste de produit', path: '/tplistedeproduits' },
     { title: 'Le hook useEffect', path: '/hookUseEffect' },
     { title: 'Le hook useMemo', path: '/hookUseMemo' },
     { title: 'Le hook useRef', path: '/hookUseRef' },
     { title: 'Créer un hook personnalisé', path: '/hookPerso' },
     { title: 'Mémoisation et useCallback', path: '/hookUseCallback' },
     { title: 'Les portails dans React', path: '/createPortal' },
   ];


   return (
     <>
       {showTitle ? (
         <Title color={'red'} bgColor={'skyBlue'}>
           {' '}
           Mon composant
         </Title>
       ) : (
         <p>Démo</p>
       )}
       <input type="text" />
       <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, veritatis
         temporibus. Officiis rem blanditiis repellat.
       </p>
       <ul>
         {todos.map((todo, index) => (
           <li key={index}><NavLink to={todo.path}>{todo.title}</NavLink></li>
         ))}
       </ul>
     </>
   );
};

export default Home;