function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    for (var i = 0; i < iterable.length; i++) {
      var element = iterable[i]
      callback(element, i, iterable)
    }
  } else if (typeof iterable === 'object') {
    for (const key in iterable) {
      const value = iterable[key]
      callback(value, key, iterable)
    }
  }
}