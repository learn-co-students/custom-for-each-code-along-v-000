function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    for (let i = 0, l = iterable.length; i < l; i++) {
      const element = iterable[i];
      callback(element, i, iterable);
    }
  } else if (typeof iterable === 'object') {
    for (const key in iterable) {
      const value = iterable[key];
      callback(value, key, iterable);
    }
  }
}

// How to use this glorious piece of code:

// To try it out, just remove the blockquote and copy all of this into node.js
/*

  // To use this function, you must define a callback function which works for the iterable you are working on.
  // Here is some example data:

    const dogs = [
      { name: "Fido", age: 2 },
      { name: "Odie", age: 8 },
      { name: "Ralph", age: 4 }
    ];

  // Let say we want to go through each of these and print out that "Fido is a 2 years old." etc., then we can make a callback:

    function tellAge(value, key, iterable){
      console.log(`${value.name} is ${value.age} years old.`);
    }
   
  // And then we can run the forEach function on it like so:

    forEach(dogs, tellAge)

  // As you can see, iterable refers to the array dogs, key refers to which iteration javascript has gone through, and value refers to the value of iterable[key].

  // This is the output:

    // Fido is 2 years old.                      
    // Odie is 8 years old.                      
    // Ralph is 4 years old. 

*/
