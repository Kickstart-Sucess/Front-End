import React from 'react'
import { Link } from 'react-router-dom'

import "./CampaignCard.scss"


const CampaignCard = () => {
    return (
        <div className='campaign-card'>
            <div className="card-content">
                <div className="image-holder">
                    image
                </div>
                <p>
                    this is a campaign card
                </p>
                <p>
                    you will be able to click it
                </p>
            </div>
            <div className="card-ud">
                <Link>Edit</Link>
                <Link>Delete</Link>
            </div>
        </div>
    )
}

export default CampaignCard;