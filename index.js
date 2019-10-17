function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    //simulates Array.prototype.forEach which works only on arrays
    //this forEach passes element, i, and the array to the callback
    for (let i = 0, l = iterable.length; i < l; i++) {
      const element = iterable[i];
      callback(element, i, iterable);
    }
  } else  if (typeof iterable === 'object') {
    //iterable is an object so we want to iterate through the keys
    for ( const key in iterable) {
      const value = iterable[key]
      callback(value, key, iterable)
    }

  }
}