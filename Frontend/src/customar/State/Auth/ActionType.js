export const REGISTER_REQUEST = " REGISTER_REQUEST";
export const REGISTER_SUCCESS = " REGISTER_SUCCESS";
export const REGISTER_FAILURE = " REGISTER_FAILURE";

export const LOGIN_REQUEST = " LOGIN_REQUEST";
export const LOGIN_SUCCESS = " LOGIN_SUCCESS";
export const LOGIN_FAILURE = " LOGIN_FAILURE";

export const GET_USER_REQUEST = "GET_USER_REQUEST ";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS ";
export const GET_USER_FAILURE = "GET_USER_FAILURE ";

export const register = (userData) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (res.ok) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data.token,
      });
    } else {
      dispatch({
        type: REGISTER_FAILURE,
        payload: data.msg,
      });
    }
  } catch (err) {
    console.error("Error:", err);
    dispatch({
      type: REGISTER_FAILURE,
      payload: "Server Error",
    });
  }
};

// Login Action
export const login = (userData) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (res.ok) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.token,
      });
    } else {
      dispatch({
        type: LOGIN_FAILURE,
        payload: data.msg,
      });
    }
  } catch (err) {
    console.error("Error:", err);
    dispatch({
      type: LOGIN_FAILURE,
      payload: "Server Error",
    });
  }
};

export const LOGOUT = "LOGOUT";
