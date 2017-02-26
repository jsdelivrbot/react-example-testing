import { SAVE_COMMENT } from '../actions/types';

export default function(state = [], action) {

  switch (action.type) {
  case SAVE_COMMENT:

    // this is the same as [...state, action.payload]
    // state.concat([action.payload]);

    return [ ...state, action.payload ];

  }

  return state;
}
