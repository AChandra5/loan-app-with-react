import React from "react";
import support from "../assets/general-graph-office-svgrepo-com.svg"
import faq from "../assets/help-faq-svgrepo-com.svg"
import policy from "../assets/open-door-svgrepo-com.svg"
import general from "../assets/general-graph-office-svgrepo-com.svg"
import "../Styles/Actions.css"

function Actions(){
    return (
        <div className="actions">
            <h5>Quick Actions</h5>
            <ul>
                <li><img src={general} alt="general changes" className="image" ></img>General changes</li>
                <li><img src={faq} alt="FAQ" className="image"></img>FAQ</li>
                <li><img src={policy} alt="general changes" className="image"></img>Terma and Conditions</li>
                <li><img src={support} alt="general changes" className="image"></img>Support</li>
            </ul>
        </div>
    )
}

export default Actions