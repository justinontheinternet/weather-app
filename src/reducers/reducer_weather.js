import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_WEATHER:
    // ES6 solution is the same as using the concat method below
    // However, note that in the ES6 solution, the new entry will appear first
    // return state.concat([action.payload.data]);
    return [ action.payload.data, ...state ];
  }

  return state;
}