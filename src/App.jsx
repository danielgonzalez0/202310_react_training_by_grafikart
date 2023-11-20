import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AhookUseState from './components/decouverte/AhookUseState';
import FormulaireEnReact from './components/decouverte/FormulaireEnReact';
import FluxDeDonnees from './components/decouverte/FluxDeDonnees';
import TpListeDeProduit from './components/decouverte/TP_liste_produit/TpListeDeProduit';
import HookUseEffect from './components/les bases/HookUseEffect';
import HookUseMemo from './components/les bases/HookUseMemo';
import HookUseRef from './components/les bases/HookUseRef';
import HookPerso from './components/les bases/HookPerso';
import Memoisation_and_useCallBack from './components/les bases/Memoisation_and_useCallBack';
import CreatePortal from './components/les bases/CreatePortal';
import Blog_app from './components/TP_blog/Blog_app';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hookUseState" element={<AhookUseState />} />
        <Route path="/formulaires" element={<FormulaireEnReact />} />
        <Route path="/fluxdonnees" element={<FluxDeDonnees />} />
        <Route path="/tplistedeproduits" element={<TpListeDeProduit />} />
        <Route path="/hookUseEffect" element={<HookUseEffect />} />
        <Route path="/hookUseMemo" element={<HookUseMemo />} />
        <Route path="/hookUseRef" element={<HookUseRef />} />
        <Route path="/hookPerso" element={<HookPerso />} />
        <Route path="/hookUseCallback" element={<Memoisation_and_useCallBack />} />
        <Route path="/createPortal" element={<CreatePortal />} />
        <Route path="/blog" element={<Blog_app />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Dans React un composant est rendu (le code de sa fonction est exécuté) à chaque fois que son état change ou lorsque le composant parent est re-rendu. Cette caractéristique peut mener à des problématiques en terme de performances si certains composants ont une logique de rendu complexe. Aussi certains composants ne changent pas de structure souvent et il est dommage de les rendre systématiquement. Pour éviter ce problème là on va pouvoir utiliser la mémoïsation au niveau du composant grâce à la fonction memo().

// Cette fonction va venir décorer le code d'un composant et fera en sorte que le composant ne soit re-rendu que lorsqu'une de ses propriétés change.

// const MonComposant = memo((props) => {
//     return <div>
//         Je suis un composant couteux
//     </div>
// }))
// De cette manière là, si notre composant est appelé à de multiples reprises avec les mêmes paramètres le résultat des appels précédents sera utilisé. Ce qui permet d'éviter d'exécuter la fonction inutilement.

// Attention au callback
// Lorsque l'on utilise un composant mémoïsé, il faudra faire attention aux paramètres qu'on lui envoie, afin de s'assurer que ses paramètres ne changent pas systématiquement.

// function Demo () {
//     const handleClick = () => console.log('ceci est un clic')

//     return <div>
//         <MonComposant onClick={handleClick} />
//     </div>
// }
// Le problème, ici, est que l'on redéclare une nouvelle fonction handleClick à chaque fois que la fonction Demo est exécutée. On perd alors tout l'intérêt d'avoir mémoïsé notre composant. Aussi il faudra s'assurer d'utiliser des versions mémoïsées des callbacks.

// function Demo () {
//     const handleClick = useCallback(() => console.log('ceci est un clic'), [])

//     return <div>
//         <MonComposant onClick={handleClick} />
//     </div>
// }
// Le Hook useCallback() est simplement un useMemo() spécifiquement conçu pour les fonctions.

// // useMemo est trop verbeux pour des callbacks
// const handleClick = useMemo(() => {
//     return () => {
//         console.log('handler')
//     }
// }, [])

// // C'est équivalent à
// const handleClick = useCallback(() => {
//     console.log('handler')
// }, [])
// La règle d'utilisation du useCallback() est la même que useMemo(). Si votre callback utilise des variables dans la portée du composant, il faudra les ajouter au tableau de dépendances.
