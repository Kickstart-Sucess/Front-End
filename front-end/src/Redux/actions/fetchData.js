import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const fetchData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA_START });
        axios
        .get("")
        .then((res) => {
            console.log("ko: actions/index.js: fetchData: axios.then: res: ", res);
            dispatch({
              type: FETCH_DATA_SUCCESS,
              payload: { quote: res.data.quote }
            });
          })
          .catch((err) => {
            console.error("error recieving comic from api", err.message);
            dispatch({
              type: FETCH_DATA_FAIL,
              payload: `error receiving comic from api: ${err.message}`
            });
          });
}