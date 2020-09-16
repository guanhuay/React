import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('Action received', action);
  switch(action.type) {
    case FETCH_WEATHER:
      // don't mutate the array, make sure return new instance of state
      // return [action.payload.data, ...state ];
      return state.concat([action.payload.data]);
  }
  return state;
}
