import {Bookmark} from "lucide-react";

function Card(props){
    return (
        <div className="card">
            <div className="top">
                <img src={props.brandLogo} alt={props.brandName + " logo"}></img>
                <button>Save <Bookmark size={12} /></button>
            </div>
            <div className="middle">
                <h3>{props.brandName} <span>{props.postedDate}</span></h3>
                <h2>{props.role}</h2>
                <div className="tag">
                    <h3>{props.jobType}</h3>
                    <h3>{props.level}</h3>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>${props.payPerHour}/hr</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card;