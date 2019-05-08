export const OUT = 'OUT';
export const RUN = 'RUN';
export const NEW_GAME = 'NEW_GAME';

export const out = () => {
  return (dispatch) => {
    return dispatch({
      type: OUT,
      payload: null
    })
  }
}

export const run = () => {
  return (dispatch) => {
    return dispatch({
      type: RUN,
      payload: null
    })
  }
}
export const newGame = () => {
  return (dispatch) => {
    return dispatch({
      type: NEW_GAME,
      payload: null
    })
  }
}