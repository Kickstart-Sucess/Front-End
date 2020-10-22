import React, { useEffect, useState } from 'react'
import PrivateRoute from "../api/privateRoute"
import CampaignCard from "../CampaignCard/CampaignCard"
import CampaignForm from "../CampaignForm/CampaignForm"
import { BrowserRouter as Router, Switch, Link, useParams, useHistory } from "react-router-dom"

import { connect } from "react-redux";
import { fetchCampaigns } from "../../Redux/actions/campaignActions"

import "./Dashboard.scss"




const Dashboard = (props) => {
    const [campaignCard, setCampaignCard] = useState(props.campaigns)
    console.log("ko: Dashboard.js: dashboard: campaigncard: ", campaignCard)


    const params = useParams();
    const { push } = useHistory();

    useEffect(() => {
        props.fetchCampaigns(params.name);
    }, [params.name]);


    return(

        <div className="Dashboard">
            <h1>KICKSTARTER-SUCCESS DASHBOARD</h1>
            <p>You will be able to see your campaigns here.</p> 
        <Router>

            <Switch>
                <PrivateRoute exact path="/Dashboard">
                    <div className="campaign-dashboard">
                        <Link to="/add" >
                            <button className="new-btn">
                                Create a new campaign
                            </button>
                        </Link>
                        <div className="campaign-list">
                            {props.campaigns.map((campaign)=>{
                                return (
                                    <Link key={campaign.id} to={`/campaign/${campaign.name}`}>
                                        <CampaignCard
                                        name={campaign.name}
                                        imageURL={campaign.imageURL}
                                        id = {campaign.id}
                                        key={campaign.id}
                                        />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </PrivateRoute>
                <PrivateRoute exact path="/add">
                    <CampaignForm
                        userID={props.campaigns.user_id}
                    />
                    </PrivateRoute>
            </Switch>
        </Router>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        campaigns: state.campaignReducer.data  
    }
}

export default connect(mapStateToProps, {fetchCampaigns})(
Dashboard);