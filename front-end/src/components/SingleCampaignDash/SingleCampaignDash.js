import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../api/axiosWithAuth";

import {
    addMetric,
    fetchCampaigns,
    fetchSingleCampaign,
    deleteSingleCampaign
} from "../../Redux/actions/campaignActions";

import "./SingleCampaignDash.scss"

// initialState



const PredictionForm = (props) => {

    const [ metric, setMetric ] = useState({
        description: ""
    })

    const [ prediction, setPrediction ] = useState(props.metricSuccess)
    console.log("these are props: ", prediction)

    const { push } = useHistory();
    const params = useParams();

    // const userID = () => {
    //     return window.localStorage.getItem("userID")
    // }
    console.log("hello: ")

    const handleChanges = (e) => {
        console.log("typing:", e.target.value);
        setMetric({
            ...metric,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addMetric(metric);
        setMetric({
            description: ""
        })
    }

    useEffect(() => {
        setPrediction(props.metricSuccess)
        props.fetchCampaigns()
    }, [props.metricSuccess])



    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Add Prediction:</h1>
                <label> Description of Campaign:
                    <input 
                        className="metric-form"
                        onChange={handleChanges}
                        value={metric.description}
                        name="description"
                        type="text"
                        placeholder="Ex: The quick brown fox jumps over the lazy dog."
                    />
                </label>
                {/* <label> User ID:
                    <input
                        className="input"
                        value={newCampaign.user_id}
                        type="text"
                        name="user_id"
                    />

                </label> */}

                <button type='submit'>Add Prection</button>
            </form>
            <div className="metric-display">
               <h1> The chance of success is as follows: </h1>
                <div>{prediction}</div>
                


            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("THIS IS STATE", state)
    return {
        data: state.campaignReducer.data,
        metricSuccess: state.campaignReducer.metricSuccess
    }
}

export default connect(mapStateToProps, {
    fetchCampaigns, 
    fetchSingleCampaign, 
    addMetric, 
    deleteSingleCampaign})(
    PredictionForm
);