import { useEffect, useState } from 'react';

/**
 * Hook personnalisé pour gérer la navigation en fonction du fragment d'URL.
 *
 * @returns {Object} Un objet contenant l'état actuel de la page en fonction du fragment d'URL.
 * @property {string} page - La page actuelle basée sur le fragment d'URL.
 *
 * @example
 * // Dans votre composant React
 * const { page } = useHashNavigation();
 */
export function useHashNavigation() {
  const [page, setPage] = useState(location.hash);

  /**
   * Gestionnaire d'événements pour mettre à jour l'état de la page en fonction du fragment d'URL.
   *
   * @function
   * @private
   * @returns {void}
   */
  const handleHashChange = () => {
    setPage(location.hash);
  };

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return { page: page.replace('#', '').toLowerCase() || 'home' };
}
