function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    // iterable.forEach(callback);
    for (var i = 0; i < iterable.length; i++) {
      callback(iterable[i], i, iterable);
    }
  } else if (typeof iterable === "object") {
    for (var key in iterable) {
      if (iterable.hasOwnProperty(key)) {
        callback(iterable[key], key, iterable);
      }
    }
  }
}
