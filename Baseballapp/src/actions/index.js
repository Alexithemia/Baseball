export const OUT = 'OUT';
export const RUN = 'RUN';
export const NEW_GAME = 'NEW_GAME';
export const OUT_SERVER = 'OUT_SERVER';
export const RUN_SERVER = 'RUN_SERVER';
export const NEW_GAME_SERVER = 'NEW_GAME_SERVER';
export const UPLOAD_GAME = 'UPLOAD_GAME';

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

export const outServer = () => {
  return (dispatch) => {
    return fetch('/api/out')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .then((resp) => {
        return dispatch({
          type: OUT_SERVER,
          payload: resp
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const runServer = () => {
  return (dispatch) => {
    return fetch('/api/run')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .then((resp) => {
        return dispatch({
          type: RUN_SERVER,
          payload: resp
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const newGameServer = () => {
  return (dispatch) => {
    return fetch('/api/newgame')
      .then(() => {
        return dispatch({
          type: NEW_GAME,
          payload: null
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const uploadGame = (props) => {
  return (dispatch) => {
    return fetch('/api/uploadgame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props)
    })
      .then(() => {
        return dispatch({
          type: UPLOAD_GAME,
          payload: null
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}