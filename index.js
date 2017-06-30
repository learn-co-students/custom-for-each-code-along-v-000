function forEach(iterable, callback){
  if (Array.isArray(iterable)) {
    for (let i = 0; i < iterable.length; i++) {
      const element = iterable[i];
      callback(element, i, iterable);
    }
  } else if (typeof iterable === 'object') {
    for (const key in iterable) {
      if (iterable.hasOwnProperty(key)) {
        const value = iterable[key];
        callback(value, key, iterable);
      }
    }
  }
}
