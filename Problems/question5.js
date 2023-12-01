/**
 * 
Implement a function deepEqual that performs a deep comparison between two 
values. It returns true if two input values are deemed equal, and returns 
false if not.

You can assume there are only JSON-serializable values (numbers, strings, 
boolean, null, objects, arrays).
There wouldn't be cyclic objects, i.e. objects with circular references.
Examples
    deepEqual('foo', 'foo'); // true
    deepEqual({ id: 1 }, { id: 1 }); // true
    deepEqual([1, 2, 3], [1, 2, 3]); // true
    deepEqual([{ id: '1' }], [{ id: '2' }]); // false
 */

/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
export default function deepEqual(valueA, valueB) {
  if (valueA === valueB) {
    return true;
 }

  // Check if values are not objects or null
  if (typeof valueA !== 'object' || typeof valueB !== 'object' || valueA === null || valueB === null) {
    return false;
  }

  // Check if one value is an array and the other is not
  if (Array.isArray(valueA) !== Array.isArray(valueB)) {
    return false;
  }

  // If values are arrays
  if (Array.isArray(valueA)) {
    // Check if arrays have different lengths
    if (valueA.length !== valueB.length) {
      return false;
    }
    // Recursively compare each element of the arrays
    for (let i = 0; i < valueA.length; i++) {
      if (!deepEqual(valueA[i], valueB[i])) {
        return false;
      }
    }
    return true;
  }

  // If values are objects
  const keysA = Object.keys(valueA);
  const keysB = Object.keys(valueB);

  // Check if objects have different numbers of keys
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Recursively compare each key-value pair in the objects
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(valueA[key], valueB[key])) {
      return false;
    }
  }

  // If all checks pass, values are deeply equal
  return true;
}