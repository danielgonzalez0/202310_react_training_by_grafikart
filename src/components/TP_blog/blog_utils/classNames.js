
/**
 * Ajoute la classe 'active' à une classe existante en fonction d'une condition.
 *
 * @param {boolean} condition - La condition pour déterminer si la classe 'active' doit être ajoutée.
 * @param {string} className - La classe existante à laquelle ajouter 'active' si la condition est vraie.
 * @returns {string} La chaîne de classe résultante, comprenant éventuellement 'active'.
 */export function activeClassIf(condition, className) {
  if (!condition) return className;
  if (!className) return 'active';
  return `${className} active`;
}
