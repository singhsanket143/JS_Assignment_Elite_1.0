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

  if(valueA === valueB)return true;
  if (typeof valueA !== typeof valueB || typeof valueA !== 'object' || valueA === null || valueB === null) return false;

    let keys1 = Object.keys(valueA);
    let keys2 = Object.keys(valueB);

  if (keys1.length !== keys2.length) {
    return false;
  }

for (let key of keys1) {
  if (!keys2.includes(key) || !deepEqual(valueA[key], valueB[key])) {
    return false;
  }
}
return true;
}
