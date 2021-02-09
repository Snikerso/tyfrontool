function AuthReducer(state, action) {
  let newState = { ...state };
  switch (action.type) {
    case 'LOGIN':
      if (localStorage.getItem('token')) {
        newState.isAuth = true;
        newState.username = action.payload.data.username;
      }
      return newState;

    case 'LOGOUT':
      newState.isAuth = false;
      return newState;

    case 'REGISTER':
      newState.isAuth = true;
      return newState;

    case 'CHANGE':
      localStorage.setItem('isKids', !state.isKids);
      newState.isKids = !state.isKids;
      return newState;

    default:
      throw new Error();
  }
}

export default AuthReducer;
