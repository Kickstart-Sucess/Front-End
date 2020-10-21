import { axiosWithAuth } from "../../components/api/axiosWithAuth"

export const ADD_USER = "ADD_USER";
export const FETCH_SINGLE_USER = "FETCH_SINGLE_USER"

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const fetchUserId = (userID) => (dispatch) => {
  console.log("ko: userActions:")
  

}
