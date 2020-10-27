import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../api/axiosWithAuth";

import {
    addMetric,
    fetchCampaigns,
    fetchSingleCampaign,
    updateSingleCampaign,
} from "../../Redux/actions/campaignActions";

import "./SingleCampaignDash.scss"


const PredictionForm = (props) => {

    const [ metric, setMetric ] = useState({
        description: ""
    })
    const [ campaign, setCampaign ] = useState({
        name:"",
        user_id: 2,
        imageURL: "",
        description: "",
        prediction: 1
    })

    const [ prediction, setPrediction ] = useState(props.metricSuccess)
    // const [campaignList, setCampaignList] = useState(props.data)
    // const [ aCampaign, setACampaign] = useState(props.singleCampaign)

    

    


    // const saveEdit = e => {
    //     e.preventDefault();
    //     props.updateSingleCampaign(campaignID, editCampaign);
    // }
    

    const { push } = useHistory();
    const params = useParams();
    const id = props.match.params.id
        console.log("these is an id: ", id)
    // const userID = () => {
    //     return window.localStorage.getItem("userID")
    // }
    // console.log("hello: ", )

    const handleChanges = (e) => {
        console.log("typing:", e.target.value);
        setMetric({
            ...metric,
            [e.target.name]: e.target.value
        })
    };

    const updateTheCampaign = (e) => {
        console.log("typing: ", e.target.value);
        setCampaign({
            ...campaign,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        props.updateSingleCampaign(id, campaign)
        props.fetchCampaigns()
        console.log("submitting", props.updatesingleCampaign)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addMetric(metric);
        setMetric({
            description: ""
        })
    }

    useEffect(() => {
        setPrediction(props.metricSuccess)
        props.fetchSingleCampaign(id)
        props.fetchCampaigns()
    }, [props.metricSuccess])



    return (
        <div>
            <form onSubmit={(e) => handleUpdate(e)}>
            <h1>Campaign Information: </h1>
            <label>Campaign Name</label>
            <input 
                type='text'
                name='name'
                placeholder={props.singleName}
                onChange={updateTheCampaign} 
                value={campaign.name}
            />
            <img className="edit-img" src={props.singleImg} />
            <label>Image URL</label>
            <input 
                name="img"
                type="url"
                placeholder={props.singleImg}
                onChange={updateTheCampaign}
                // value={campaign.imageURL}
            />
           <button>Update Campaign</button>
           </form>

            <form onSubmit={(e) => handleSubmit(e)}>
                <h2>Add Prediction:</h2>
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

                <button type='submit'>Add Prediction</button>
            </form>
            <div className="metric-display">
               <h1> Based on your descrption your chances of a successful campaign are:</h1>
            <div className="campaign-desc">{props.singleCampaign.description}</div>
                <div>{prediction}</div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("THIS IS STATE", state)
    return {
        ...state,
        data: state.campaignReducer.data,
        metricSuccess: state.campaignReducer.metricSuccess,
        singleCampaign: state.campaignReducer.data,
        singleName: state.campaignReducer.singleName,
        singleImg: state.campaignReducer.singleImg,
        singleDesc: state.campaignReducer.singleDesc,
    }
}

export default connect(mapStateToProps, {
    fetchCampaigns,
    updateSingleCampaign, 
    fetchSingleCampaign, 
    addMetric})(
    PredictionForm
);