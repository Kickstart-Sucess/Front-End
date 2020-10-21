import {
    FETCH_CAMPAIGN_START,
    FETCH_CAMPAIGN_SUCCESS,
    FETCH_CAMPAIGN_FAIL,
    FETCH_SINGLE_CAMPAIGN_START,
    FETCH_SINGLE_CAMPAIGN_SUCCESS,
    FETCH_SINGLE_CAMPAIGN_FAIL,
    UPDATE_CAMPAIGN_START,
    UPDATE_CAMPAIGN_SUCCESS,
    UPDATE_CAMPAIGN_FAIL,
    ADD_CAMPAIGN_START,
    ADD_CAMPAIGN_SUCCESS,
    ADD_CAMPAIGN_FAIL,
    ADD_METRIC_START,
    ADD_METRIC_SUCCESS,
    ADD_METRIC_FAIL,
    FETCH_METRIC,
    DELETE_METRIC
} from "../actions/campaignActions"

const initialState = {
    data: [],
    isFetching: false,
    error: "",
}

export const campaignReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CAMPAIGN_START:
            return {
                ...state,
                isFetching: true,
                error: "",
            };
        case FETCH_CAMPAIGN_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false,
                error: "",
            }
        case FETCH_CAMPAIGN_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        case FETCH_SINGLE_CAMPAIGN_START:
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case FETCH_SINGLE_CAMPAIGN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
            }
        case FETCH_SINGLE_CAMPAIGN_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        case ADD_CAMPAIGN_START:
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case ADD_CAMPAIGN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
            }
        case ADD_CAMPAIGN_FAIL:
            return {
                ...state,
                error: action.payload,
            }
    default:
        return state;
    }
}