const initialState = {
  callData: [],
  callActive: false,
};

export const handleCallAppData = (state = initialState, action) => {
  switch (action?.type) {
    case "START_PHONE_CALL":
      return {
        ...state,
        callData: [action.payload, ...state.callData],
        callActive: true,
      };

    case "END_PHONE_CALL":
      return {
        ...state,
        callActive: false,
      };

    case "REMOVE_CALL_LOG":
      return {
        ...state,
        callData: state.callData.filter((call) => call?.id !== action?.payload),
      };

    default:
      return state;
  }
};
