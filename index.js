// const dogs = [
//   { name: "Fido", age: 2 },
//   { name: "Odie", age: 8 },
//   { name: "Ralph", age: 4 }
// ];
//
// for (let i = 0, l = dogs.length; i < l; i++) {
//   console.log(dogs[i])
// }

// const dog = { name: "Fido", age: 2 };
//
// for (let key in dog) {
//   console.log(dog[key]);
// }

function mechanicGuy(toolKit, helperGuy) {
  if (Array.isArray(toolKit)) {
    for (let i = 0; i < toolKit.length; i++) {
      const tool = toolKit[i];
      helperGuy(tool, i, toolKit); // the mechanic is passes along everything relevant
    }
  } else if (typeof toolKit === 'object') {
    for (let toolSet in toolKit) {
      const toolName = toolKit[toolSet];
      helperGuy(toolName, toolSet, toolKit);
    }
  }
}


function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    for (let i = 0; i < iterable.length; i++) {
      const element = iterable[i];
      callback(element, i, iterable);
    }
  } else if (typeof iterable === 'object') {
    for (let key in iterable) {
      const value = iterable[key];
      callback(value, key, iterable);
    }
  }
}
