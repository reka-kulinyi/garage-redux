import { FETCH_CARS } from "../actions/index";

export default function(state=[], action){
  switch(action.type){
    case FETCH_CARS:
      return action.payload
    default:
      return state;
  }
}
