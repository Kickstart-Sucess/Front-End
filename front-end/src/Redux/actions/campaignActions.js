import { axiosWithAuth } from "../../components/api/axiosWithAuth"
import axios from "axios"

export const FETCH_CAMPAIGN_START = "FETCH_CAMPAIGN_START"
export const FETCH_CAMPAIGN_SUCCESS = "FETCH_CAMPAIGN_SUCCESS"
export const FETCH_CAMPAIGN_FAIL = "FETCH_CAMPAIGN_FAIL"

export const FETCH_SINGLE_CAMPAIGN_START = "FETCH_SINGLE_CAMPAIGN_START"
export const FETCH_SINGLE_CAMPAIGN_SUCCESS = "FETCH_SINGLE_CAMPAIGN_SUCCESS"
export const FETCH_SINGLE_CAMPAIGN_FAIL = "FETCH_SINGLE_CAMPAIGN_FAIL"

export const UPDATE_CAMPAIGN_START = "FETCH_CAMPAIGN_START"
export const UPDATE_CAMPAIGN_SUCCESS = "FETCH_CAMPAIGN_SUCCESS"
export const UPDATE_CAMPAIGN_FAIL = "FETCH_CAMPAIGN_FAIL"

// export const UPDATE_METRIC_START = "FETCH_CAMPAIGN_START"
// export const UPDATE_METRIC_SUCCESS = "FETCH_CAMPAIGN_SUCCESS"
// export const UPDATE_METRIC_FAIL = "FETCH_CAMPAIGN_FAIL"

export const ADD_CAMPAIGN_START = "ADD_CAMPAIGN_START"
export const ADD_CAMPAIGN_SUCCESS = "ADD_CAMPAIGN_SUCCESS"
export const ADD_CAMPAIGN_FAIL = "ADD_CAMPAIGN_FAIL"

export const DELETE_CAMPAIGN = "DELETE_CAMPAIGN"
export const DELETE_CAMPAIGN_SUCCESS = "DELETE_CAMPAIGN_SUCCESS"

export const ADD_METRIC_START = "ADD_METRIC_START"
export const ADD_METRIC_SUCCESS = "ADD_METRIC_SUCCESS"
export const ADD_METRIC_FAIL = "ADD_METRIC_FAIL"

export const FETCH_METRIC = "FETCH_METRIC"
export const DELETE_METRIC = "DELETE_METRIC"

export const FETCH_SINGLE_USER = "FETCH_SINGLE_USER"


export const fetchCampaigns = () => (dispatch) => {
    dispatch({ type: FETCH_CAMPAIGN_START});
    axiosWithAuth()
        .get("/api/campaigns")
        .then((res) => {
            console.log("THIS IS WHAT IS RETURN IN CAMPAIGNS: ", res.data)
            dispatch({ type:FETCH_CAMPAIGN_SUCCESS, payload: res.data })
        })
        .catch((err) =>
            dispatch({ type: FETCH_CAMPAIGN_FAIL, payload: err.message})
        )
};

export const addCampaign = (newCampaign) => (dispatch) => {
    console.log("ko: campaignActions.js:  newCampaign: ")
    dispatch({ type: ADD_CAMPAIGN_START})
    axiosWithAuth()
        .post('/api/campaigns', newCampaign)
        .then((res) => {
            console.log("ko: campaignActions.js:  newCampaign Sent: ", res.data);
            dispatch({ type: ADD_CAMPAIGN_SUCCESS, payload: res.data });
            window.location.reload();
        })
        .catch((err) => {
            console.log("ko: campaignActions.js:  newCampaign: error: ", err.message)
            dispatch({ type: ADD_CAMPAIGN_FAIL, payload: err.message })
        })
}

export const fetchSingleCampaign = (id) => (dispatch) => {
    dispatch({ type: FETCH_SINGLE_CAMPAIGN_START })
    axiosWithAuth()
        .get(`/api/campaigns/${id}`)
        .then((res) => {
            dispatch({ type: FETCH_SINGLE_CAMPAIGN_SUCCESS, payload: res.data })
        })
        .catch((err) => dispatch({ type: FETCH_SINGLE_CAMPAIGN_FAIL, payload: err.message }))
}

export const updateSingleCampaign = (id, campaign) => (dispatch) => {
    console.log("ko: campaignActions.js: updateCampaign: ", id, campaign)

    dispatch({ type: UPDATE_CAMPAIGN_START })
    axiosWithAuth()
        .put(`/api/campaigns/${id}`, id, campaign)
        .then((res) => {
            axiosWithAuth()
                .get(`/api/campaigns`)
                .then((response) => {
                    dispatch({ type: UPDATE_CAMPAIGN_SUCCESS, payload: response.data })
                })
                .catch((err) => {
                    console.log(err)
                })
        })
        .catch((err) =>
            dispatch({ type: UPDATE_CAMPAIGN_FAIL, payload: err.message})
        )
}

export const deleteSingleCampaign = (id) => (dispatch) =>{
    dispatch({ type: DELETE_CAMPAIGN })
        axiosWithAuth()
            .delete(`/api/campaigns/${id}`)
            .then((res) => {
                console.log("ko: campaignActions: deleteSingleCampaign: ", res.data)
                dispatch({ type: DELETE_CAMPAIGN_SUCCESS, payload: res.data})
            })
            .catch((err) => console.log("ko: campaignActions: deleteSingleCampaign: error: ", err.message))
}

export const addMetric = (id, metric) => (dispatch) => {
    dispatch({ type: ADD_METRIC_START})
    axiosWithAuth()
        .post(`/api/campaigns/${id}/metrics`, metric)
        .then((res) => {
            console.log("ko: campaignActions.js:  newMetric Sent: ", res.data);
            dispatch({ type: ADD_METRIC_SUCCESS, payload: res.data });
            // window.location.reload();
        })
        .catch((err) => {
            console.log("ko: campaignActions.js:  newMetric: error: ", err.message)
            dispatch({ type: ADD_METRIC_FAIL, payload: err.message })
        })
    
}





