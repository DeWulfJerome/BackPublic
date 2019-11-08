const authReducer = (
  state = {
    auth: {
      token: '',
    },
  },
  action,
) => {
  switch (action.type) {
    case 'SET_JWT_TOKEN': {
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.token,
        },
      };
    }
  }

  return state;
};

export default authReducer;
