
const initialState = ['angular'];


// REDUCER --------------------------------------->
// reducer has two parameters:
// state - the state of the store, which is
// at the first time equal to an initial state
// then it will be updated
// ---
// we have to dispatch an action into the reducer
// and then it changes the state. 
function frameworkReducer(state = initialState, action) {
    // console.log(state)
    switch (action.type) {
      case "ADD_FRAMEWORK":
        return [...state, action.payload];
      case "DELETE_FRAMEWORK":
        return state;
      default:
        return state
    }
  };


  export default frameworkReducer;
  