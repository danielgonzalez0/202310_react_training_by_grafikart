import { useEffect, useRef } from 'react';

/**
 * Une fonction personnalisée pour mettre à jour le titre du document en fonction d'une valeur donnée.
 *
 * @param {string} title - Le titre à afficher dans le document.
 */
export function useDocumentTitle(title) {


   const titleRef = useRef(document.title) 

  // Rétablir le titre d'origine lorsque le composant est démonté
  useEffect(() => {
    return () => {
      document.title = titleRef.current;
    };
  }, []);

  // Mettre à jour le titre du document avec le nouveau titre lorsque 'title' change
  useEffect(() => {
    document.title = title ? title : titleRef.current
  }, [title]);
}