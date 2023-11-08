import { useState } from "react";

/**
 * hook qui gère quand un boolean change de valeur
 * @param {boolean} initial
 * @returns {Array}
 */
 export function useToggle(initial) {
  const [state, setState] = useState(initial);
  const toggle = () => setState((v) => !v);
  return [state, toggle];
}
