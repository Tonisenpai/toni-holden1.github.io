////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(x, y, z) {
  let output = [];
  if (x === y) {
    return output;
  }
  if (z ===  undefined) {
    if (x < y) {
      for (let i = x; i <= y; i++) {
        output.push(i);
      }
    } else {
      for (let i = x; i >= y; i--) {
        output.push(i);
      }
    }
  } else {
    if (z < 0) {
      for (let i = x; i >= y; i += z) {
        output.push(i);
      }
    } else {
      for (var i = x; i <= y; i += z) {
        output.push(i);
      }
    }
  }
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) { // use reduce method to return the sum
  return array.reduce((count, elem) => {
    return count += elem;
  }, 0);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  // use spread operator to make a copy of the given array
  let arrCopy = [...array];
  // return copy of array using the reverse method to reverse it 
  return arrCopy.reverse();

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  // return array using the reverse method to reverse it
  return array.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;
  for (let i = array.length - 1; i >= 0; i--) {
   rest = { value: array[i], rest}; 
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(obj, output = []) {
  // base
  if (obj.rest === null) {
    output.push(obj.value);
    return output;
  }
  // recursion
  output.push(obj.value);
  return listToArray(obj.rest, output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  
    return listToArray(list)[num];
  
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  // determine if both x and y are not objects
  if (typeof x !== 'object' && typeof y !== 'object') {
    return x === y;
  }

  // determine if either x OR y is not an object
  if (typeof x !== 'object' || typeof y !== 'object') {
    return false;
  }

  // create an array of keys for x and y
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);

  // determine if the length of xKeys is equal to the length of yKeys
  if (xKeys.length !== yKeys.length) {
    return false;
  }

  // iterate through xKeys
  for (let i = 0; i < xKeys.length; i++) {
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])) {
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
