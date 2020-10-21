import React, { useEffect, useState } from 'react'
import PrivateRoute from "../api/privateRoute"
import CampaignCard from "../CampaignCard/CampaignCard"
import CampaignForm from "../CampaignForm/CampaignForm"
import { BrowserRouter as Router, Switch, Link } from "react-router-dom"

import { connect } from "react-redux";
import { fetchCampaigns } from "../../Redux/actions/campaignActions"

import "./Dashboard.scss"




const Dashboard = (props) => {
    const [campaignCard, setCampaignCard] = useState(props.campaigns)
    console.log("ko: Dashboard.js: dashboard: campaigncard: ", props)

    useEffect(() => {
        props.fetchCampaigns();
    }, []);


    return(

        <div className="Dashboard">
            <h1>KICKSTARTER-SUCCESS DASHBOARD</h1>
            <p>You will be able to see your campaigns here.</p> 
        <Router>
            <Link to="/add" >
                <button className="new-btn">
                    Create a new campaign
                </button>
            </Link>
            <Switch>
                <PrivateRoute exact path="/Dashboard">
                    <div className="campaign-list">
                        {props.campaigns.map((campaign)=>{
                            return (
                                <CampaignCard
                                  name={campaign.name}
                                  key={campaign.id}
                                />
                            )
                        })}
                    </div>
                </PrivateRoute>
                <PrivateRoute exact path="/add" component={CampaignForm}/>
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