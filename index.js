function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    for (let i = 0, l = iterable.length; i < l; i++) {
      callback(iterable[i], i, iterable);
    }
  } else if (typeof iterable === 'object') {
    for (const key in iterable) {
      callback(iterable[key], key, iterable);
    }
  }
}
