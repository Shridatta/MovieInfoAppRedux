import { FETCH_MOVIEINFO } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIEINFO:
      return [action.payload.data];
  }
  return state;
}
