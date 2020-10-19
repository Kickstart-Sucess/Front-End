import React from 'react'
import PrivateRoute from "../api/privateRoute"
import CampaignCard from "../CampaignCard/CampaignCard"
import CampaignForm from "../CampaignForm/CampaignForm"
import { BrowserRouter as Router, Switch, Link } from "react-router-dom"

import "./Dashboard.scss"




const Dashboard = () => {
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
                <PrivateRoute exact path="/Dashboard" component={CampaignCard}/>
                <PrivateRoute exact path="/add" component={CampaignForm}/>
            </Switch>
        </Router>
        </div>
    )
}

export default Dashboard;