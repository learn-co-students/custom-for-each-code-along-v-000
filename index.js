function forEach(iterable, callback){
  if (Array.isArray(iterable)) {
    for (var i = 0; i < iterable.length; i++){
      const element = iterable[i]
      callback(element, i, callback)
    }
  } else if (typeof iterable === "object") {
    for (const key in iterable) {
      const element = iterable[key]
      callback(element, key, callback)
    }
  }
}
