import { OUT, RUN, NEW_GAME } from '../actions';

const initialState = {
  visitorTotal: 0,
  homeTotal: 0,
  outs: 0,
  innings: [0],
  gamePosition: 0,
  gameEnd: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OUT:
      if (state.outs + 1 === 3) {
        return Object.assign({}, state, { outs: 0, gamePosition: state.gamePosition + 1, innings: [...state.innings, 0] });
      } else {
        return Object.assign({}, state, { outs: state.outs + 1 });
      }
    // case RUN:
    //   if (state.out + 1 === 3) {
    //     return Object.assign({}, state, { outs: 0, gamePosition: state.gamePosition + 1 });
    //   } else {
    //     return Object.assign({}, state, { outs: state.outs + 1 });
    //   }
    // case NEW_GAME:
    //   if (state.out + 1 === 3) {
    //     return Object.assign({}, state, { outs: 0, gamePosition: state.gamePosition + 1 });
    //   } else {
    //     return Object.assign({}, state, { outs: state.outs + 1 });
    //   }
    default:
      return state;
  }
}

export default reducer;