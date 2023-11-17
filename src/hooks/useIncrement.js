import { useCallback, useState } from 'react';

/**
 * Une fonction personnalisée pour gérer l'incrémentation et la décrémentation d'une valeur.
 *
 * @param {Object} options - Les options de configuration de la fonction.
 * @param {number} [options.base=0] - La valeur de départ pour l'incrémentation.
 * @param {number} [options.max=Infinity] - La valeur maximale à laquelle on peut incrémenter.
 * @param {number} [options.min=-Infinity] - La valeur minimale à laquelle on peut décrémenter.
 *
 * @returns {Object} Un objet contenant les méthodes et les données suivantes :
 * - {number} count - La valeur actuelle après incrémentation ou décrémentation.
 * - {function} increment - Une fonction pour augmenter la valeur de 1, sous réserve de la limite maximale.
 * - {function} decrement - Une fonction pour diminuer la valeur de 1, sous réserve de la limite minimale.
 */
export function useIncrement({base = 0, max = Infinity, min = -Infinity}) {
  const [state, setState] = useState(base);
  return {
    count: state,
    increment: useCallback(() => setState((v) => (v < max ? v + 1 : v)),[max]),
    decrement: useCallback(() => setState((v) => (v > min ? v - 1 : v)), [min]),
  };
}
