import React from 'react'
import {Bookmark} from 'lucide-react'
const Card = (props) => {
    const {company, posted, role ,type, level, rate, location,brandLogo}=props;
  return (
    <div className='card'>
        <div>
            <div className="top">
                <img src={brandLogo} alt="" />
                <button>Save < Bookmark size={12}/></button>
            </div>
        <div className="center">
                <h3>{company},<span> {posted}</span></h3>
                <h2>{role}</h2>
                <div className='tag'>
                    <h4>{type}</h4>
                    <h4>{level}</h4>
                </div>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h3>{rate}</h3>
                <p>{location}</p>
            </div>
                <button>Apply Now</button>
        </div>

    </div>
  )
}

export default Card
