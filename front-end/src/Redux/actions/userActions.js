export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const REMOVE_USER = "REMOVE_USER";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};