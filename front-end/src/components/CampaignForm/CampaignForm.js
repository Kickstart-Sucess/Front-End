import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../api/axiosWithAuth";

import "./CampaignForm.scss"

const CampaignForm = () => {

    const history = useHistory();

    const [ newCampaign, setNewCampaign] = useState({
        name: ""
    })

    const userID = window.localStorage.getItem("user_id")

    const handleChange = (e) => {
        setNewCampaign({
            ...newCampaign,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/campaigns', newCampaign)
        .then(res => {
            console.log("KO: CampaignForm.js: handleSubmit: res: ", res)
            setNewCampaign(res.data);
            history.push("/Dashboard")
        })
        .catch(err => {
            console.error("KO: CampaignForm.js: error: ", err)
        })
        
    }



    return (
        <div>
            <form>
                <h1>Add a Campaign:</h1>
                <label> Campaign Name:
                    <input 
                        className="input"
                        onChange={handleChange}
                        value={newCampaign.name}
                        name="name"
                        type="text"
                        placeholder="Campaign Name"
                    />
                </label>
                <button type='submit' onClick={handleSubmit} >Add Campaign</button>
            </form>
        </div>
    )
}

export default CampaignForm;