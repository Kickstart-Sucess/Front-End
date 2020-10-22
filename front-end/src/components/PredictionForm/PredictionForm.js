import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../api/axiosWithAuth";

import {
    addMetric,
    fetchCampaigns
} from "../../Redux/actions/campaignActions";

import "./PredictionForm.scss"



const PredictionForm = (props) => {

    const history = useHistory();

    const [ newMetric, setNewMetric] = useState({
        item: "",
    })

    const userID = window.localStorage.getItem("userID")

    const handleChange = (e) => {
        console.log("typing:", e.target.value);
        setNewMetric({
            ...newMetric,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addMetric(newMetric);
    }

    useEffect(() => {
        props.fetchCampaigns();
    }, []);



    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Add Prediction:</h1>
                <label> Description of Campaign:
                    <input 
                        className="metric-form"
                        rows="10"
                        col="30"
                        onChange={handleChange}
                        value={newMetric.item}
                        name="description"
                        type="textarea"
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

                <button type='submit' onClick={handleSubmit} >Add Prection</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("THIS IS STATE", state)
    return {
        data: state.campaignReducer.data  
    }
}

export default connect(mapStateToProps, {fetchCampaigns, addMetric})(
    PredictionForm
);