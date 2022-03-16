// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  // for (let i = 0; i <= array.length; i++) {
  //   return array[i].concat(...array); // [[0][3][2]]
  // }
  let result = array.reduce((arr, current) => {
    return arr.concat(current);
  }, []);
  return result;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  while (test(value)) {
    body(value);
    return loop(update(value), test, update, body)  
    
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (test(array[i]) === false) {
      return false;
    }
  }
return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(str) {
  // create arrays for each direction
  let ltr = [];
  let rtl = [];
  // iterate through input string
  for (let i = 0; i < str.length; i++) {
    let scriptName = characterScript(str.charCodeAt(i));
    console.log(scriptName);
    // check if the scriptName is NOT EQUAL to null
    if (scriptName !== null) {
      scriptName.direction === 'ltr' ? ltr.push(scriptName.name) : rtl.push(scriptName.name);
    }
  }
  if (ltr.length > rtl.length) {
    return 'ltr';
  } else {
    return 'rtl';
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
