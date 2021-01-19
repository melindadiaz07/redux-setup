// 1. import redux in file

const redux = require("redux")

// 2. Action Creators
// functions that return an object with type and action
// can also have payload argument, data, etc. but should be cinsistent throughout app 

function increment() {
  return {
    type: "INCREMENT"
  }
}

// 3. Reducer