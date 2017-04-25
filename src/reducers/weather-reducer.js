import { FETCH_WEATHER } from '../actions/index';



export default function (state = [], action) {

  switch (action.type) {
    case FETCH_WEATHER:
    // return state.concat([ action.payload.data ]); same as below new ES6
    return [ action.payload.data, ...state ];
  }
  // console.warn('action received:', action);
  return state;
}