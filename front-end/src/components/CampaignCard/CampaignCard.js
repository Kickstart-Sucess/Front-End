import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

import "./CampaignCard.scss"

import {
    fetchCampaigns,
    deleteSingleCampaign
} from "../../Redux/actions/campaignActions"
import { campaignReducer } from '../../Redux/reducers/campaignReducer';


const CampaignCard = (props) => {
    // const [card, setCard] = useState(props.campaign)

    useEffect(() => {
        props.fetchCampaigns();
    }, []);

    
    // console.log("THESE ARE PROPS FROM CAMPAIGNCARD!: ", props)

    const id = props.id;

    console.log("this is card id: ", id)

    return (
        <div className='campaign-card'>
            <div className="card-content">
                <img className="campaign-img" src={props.imageURL} alt="campagn img" />
                <div> {props.name} </div>
                <p>
                    you will be able to click it
                </p>
            </div>
            <div className="card-ud">
                <button>edit</button>
                <button
                    className="delete-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteSingleCampaign(id);
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



export default connect(mapStateToProps, {fetchCampaigns})(CampaignCard);