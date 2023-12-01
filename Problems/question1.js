/**
 * Implement a function functionLength, to return the number of 
 * parameters a function expects. Note that this is a static value 
 * defined by the function, not the number of arguments the function 
 * is called with (which is determined by arguments.length
 * 
 *  Example:
    function foo() {}
    function bar(a) {}
    function baz(a, b) {}

    functionLength(foo); // 0
    functionLength(bar); // 1
    functionLength(baz); // 2
 */

    export default function functionLength(fn) {
        if (typeof fn !== 'function') {
            throw new Error('Please provide a valid function');
        }
        // returning the function length 
        return fn.length;
    }

function fun1() {}
function fun2(a) {}
function fun3(c, d) {}
