// state argument is not application state, only the state
// that this function responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload; // always want to return fresh object
  }
  return state;
}
