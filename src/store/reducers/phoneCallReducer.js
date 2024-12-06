const initialState = {
  callData: [],
};

// Properly handled state
// Unnecessary use of callActice

export const handleCallAppData = (state = initialState, action) => {
  switch (action?.type) {
    case "START_PHONE_CALL":
      return {
        ...state,
        callData: [action?.payload, ...state?.callData],
      };

    case "REMOVE_CALL_LOG":
      return {
        ...state,
        callData: state?.callData?.filter(
          (call) => call?.id !== action?.payload
        ),
      };

    default:
      return state;
  }
};
