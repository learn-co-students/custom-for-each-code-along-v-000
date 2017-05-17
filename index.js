function forEach(iterable, callback) { //function to iterate over and to iterate with
  if (Array.isArray(iterable)) {//.isArray() allows js to differentiate array & object
    for (let i = 0, l = iterable.length; i < l; i++) {//do this is iterable is array
      const element = iterable[i];
      callback(element, i, iterable);//callback implements what arguments to care of, we pass everything relevant
    }
  }
  else if (typeof iterable === 'object') {
    for (const key in iterable) {//do this if iterable is object
      const value = iterable[key];
      callback(value, key, iterable);
    }
  }
}
