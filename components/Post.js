import React from "react"

export default function Post(props) {
    return (
        <div className="post">
            <img className="post--image" src={props.imageUrl} />
            <div className="post--info">
                <div className="post--location">
                    <img src="../images/locationPin.png" />
                    <span>{props.location}</span>                
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <div className="post--dates">{props.startDate} - {props.endDate}</div>
                <p className="post--description">{props.description}</p>
            </div>
        </div>
    )
}

