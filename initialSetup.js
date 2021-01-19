// 1. import redux in file

const redux = require("redux")

// 2. Action Creators
// functions that return an object with type and action
// can also have payload argument, data, etc. but should be cinsistent throughout app 
// can make dynamic by adding a passed in argument that will become the payload

function increment(amount = 1) {
  return {
    type: "INCREMENT",
    payload: amount
  }
}

// 3. Reducer 
// function that returns new state
// passed arguments of state (can also include default state), and action
// contains a switch statement that uses the passed in action(an object returned by the action creator) to implement
// the correct reduction on the state

function reducer(state = {count: 0}, action) {
  
  switch(action.type){
    case "INCREMENT":
      return { count: state.count + action.payload}
    default:
      return state
  }
}


//  4. Store
// built in methods from redux - creates the store

const store = redux.createStore(reducer)


// 5. Dispatch
// sends the action to the reducer

store.dispatch(increment(5))