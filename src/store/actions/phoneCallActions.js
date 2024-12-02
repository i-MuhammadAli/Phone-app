export const makePhoneCall = (item) => async (dispatch) => {
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

export const endPhoneCall = (onSuccess) => async (dispatch) => {
  try {
    dispatch({
      type: "END_PHONE_CALL",
    });

    if (onSuccess && typeof onSuccess === "function") {
      onSuccess();
    }
  } catch (err) {
    console.error(
      "Error ending phone call:",
      err.message || "Unknown error occurred"
    );
  }
};

export const handleDelCall = (value) => async (dispatch) => {
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
