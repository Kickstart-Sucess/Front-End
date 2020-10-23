import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from "react-redux";

import "./CampaignCard.scss"

import {
    fetchCampaigns,
    deleteSingleCampaign
} from "../../Redux/actions/campaignActions"
import PrivateRoute from '../api/privateRoute';


const CampaignCard = (props) => {
    const [cards, setCards] = useState(props.data)

    useEffect(() => {
        props.fetchCampaigns();
    }, []);


    // setTeamPlayers(prevTeamPlayers =>prevTeamPlayers.filter(teamPlayer => teamPlayer.idTeam !== id)

    
    console.log("THESE ARE PROPS FROM CAMPAIGNCARD!: ", cards)

    const id = props.id;

    console.log("this is card id: ", id)

    const params = useParams();


    useEffect(() => {
        props.fetchCampaigns(params.name);
    }, [params.name]);

    return (
        <div className='campaign-card'>
            <div className="card-content">
            <Link to={`/campaign/${props.id}`}>
                <div className="campaign-holder">
                <img className="campaign-img" src={props.imageURL} alt="campagn img" />
                </div>
            </Link>
                <p className="campaign-name"> {props.name} </p>
            </div>
            <div className="card-ud">
                <button>edit</button>
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