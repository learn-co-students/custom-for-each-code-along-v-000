function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    for (let i = 0; i < iterable.length; i++) {
      const element = iterable[i];
      callback(element, i, iterable);
    }
  }
}
