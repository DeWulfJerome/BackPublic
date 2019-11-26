const feedReducer = (
  state = {
    adviezen: [],
  },
  action,
) => {
  switch (action.type) {
    case 'SET_ADVIEZEN': {
      return {
        ...state,
        adviezen: action.payload,
      };
    }
  }

  return state;
};

export default feedReducer;
