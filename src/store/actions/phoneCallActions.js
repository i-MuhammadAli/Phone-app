// Actions used in a good maaner. Proper error handling. Code clarity is very good.

export const makePhoneCall = (item) => (dispatch) => {
  try {
    dispatch({
      type: "START_PHONE_CALL",
      payload: item,
    });
  } catch (err) {
    console.error(
      "Error starting phone call:",
      err.message || "Unknown error occurred"
    );
  }
};

export const handleDelCall = (value) => (dispatch) => {
  try {
    dispatch({
      type: "REMOVE_CALL_LOG",
      payload: value,
    });
  } catch (err) {
    console.error(
      "Error deleting call log:",
      err.message || "Unknown error occurred"
    );
  }
};
