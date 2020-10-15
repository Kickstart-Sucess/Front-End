import React from 'react'
import CampaignCard from "../CampaignCard/CampaignCard"

import "./Dashboard.scss"




const Dashboard = () => {
    return(
        <div className="Dashboard">
            <h1>KICKSTARTER-SUCCESS DASHBOARD</h1>
            <p>You will be able to see your campaigns here.</p> 
            <div>
                <button className="new-btn">
                        Create a new campaign
                </button>
            </div>
            <CampaignCard />

        </div>
    )
}

export default Dashboard;