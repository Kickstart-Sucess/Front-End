import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from "react-redux";

import "./CampaignCard.scss"

import {
    fetchCampaigns,
    fetchSingleCampaign,
    deleteSingleCampaign
} from "../../Redux/actions/campaignActions"
import PrivateRoute from '../api/privateRoute';


const CampaignCard = (props) => {
    const [cards, setCards] = useState(props.data)
    const [editing, setEditing] = useState(false);
    const [ editCampaign, setEditCampaign ] = useState({
        name: "",
        user_id: 2,
        imageURL: "props.imageURL",
        description: "props.description"
    })
    
    console.log("THESE ARE PROPS FROM CAMPAIGNCARD!: ", cards)

    const params = useParams();
    // const campaignID = props.match.params.id
    // console.log("these is an id: ", campaignID)

    

    const editTheCampaign = campaign => {
        setEditing(true);
        setEditCampaign(campaign)
    }

    const saveEdit = e => {
        e.preventDefault();
        props.updateSingleCampaign(cards.id, editCampaign);
    }

    const updateTheCampaign = (e) => {
        console.log("typing: ", e.target.value);
        setEditCampaign({
            ...editCampaign,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        props.fetchCampaigns();
        fetchSingleCampaign(cards.id, editCampaign);
        props.fetchCampaigns(params.id);
    }, [params.id]);

    return (
        <div className='campaign-card'>
            <div className="card-content">
            <Link to={`/campaign/${props.id}`}>
                <div className="campaign-holder">
                <img className="campaign-img" src={props.imageURL} alt="campagn img" />
                </div>
            </Link>
                <p className="campaign-name" onClick={() => editTheCampaign(props.name)}> {props.name} </p>
            </div>
            <div className="card-ud">
                
                <button
                    className="delete-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        props.deleteSingleCampaign(props.id);
                        window.location.reload();
                    }}
                 >
                    Delete
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.campaignReducer.data
    }
}



export default connect(mapStateToProps, {fetchCampaigns, deleteSingleCampaign})(CampaignCard);