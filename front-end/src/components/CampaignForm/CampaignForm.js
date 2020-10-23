import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../api/axiosWithAuth";

import {
    addCampaign,
    fetchCampaigns
} from "../../Redux/actions/campaignActions";

import "./CampaignForm.scss"



const CampaignForm = (props) => {
    console.log("ko: campaignForm.js: CampaignForm: props: ", props)
    const history = useHistory();

    const [ newCampaign, setNewCampaign] = useState({
        name: "",
        user_id: 2,
        imageURL: "",
        description: ""
    })

    const userID = window.localStorage.getItem("userID")


    const handleChange = (e) => {
        console.log("typing:", e.target.value);
        setNewCampaign({
            ...newCampaign,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addCampaign(newCampaign);
        history.push("/Dashboard"); 
    }

    useEffect(() => {
        props.fetchCampaigns();
    }, []);



    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Add a Campaign:</h1>
                <label htmlFor="name"> Campaign Name:
                    <input 
                        className="input"
                        onChange={handleChange}
                        value={newCampaign.name}
                        maxlength="25"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Campaign Name"
                    />
                </label>
                <label htmlFor="name"> Campaign Description:
                    <input 
                        className="input"
                        onChange={handleChange}
                        value={newCampaign.description}
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Enter the description of your Campaign"
                    />
                </label>
                <label> User ID:
                    <input
                        className="input"
                        // onChange={handleChange}
                        value={newCampaign.user_id}
                        type="text"
                        name="user_id"
                        disabled
                    />
                </label>
                <label> Image URL:
                    <input
                        className="input"
                        onChange={handleChange}
                        value={newCampaign.imageURL}
                        type="url"
                        name="imageURL"
                        placeholder="http://image.url"
                    />
                </label>

                <button type='submit' onClick={handleSubmit} >Add Campaign</button>
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

export default connect(mapStateToProps, { addCampaign, fetchCampaigns})(
    CampaignForm
    );