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
        if (state.gamePosition + 1 === 6) {
          return Object.assign({}, state, { outs: state.outs + 1, gameEnd: true });
        } else {
          return Object.assign({}, state, { outs: 0, gamePosition: state.gamePosition + 1, innings: [...state.innings, 0] });
        }
      } else {
        return Object.assign({}, state, { outs: state.outs + 1 });
      }
    case RUN:
      let tempInnings = state.innings;
      let tempHome = state.homeTotal;
      let tempVisitor = state.visitorTotal;
      tempInnings[state.gamePosition] += 1;
      if ((state.gamePosition % 2) === 0) {
        tempVisitor += 1;
      } else {
        tempHome += 1;
      }
      return Object.assign({}, state, { innings: tempInnings, homeTotal: tempHome, visitorTotal: tempVisitor });
    case NEW_GAME:
      return Object.assign({}, state, {
        visitorTotal: 0,
        homeTotal: 0,
        outs: 0,
        innings: [0],
        gamePosition: 0,
        gameEnd: false
      });
    default:
      return state;
  }
}

export default reducer;