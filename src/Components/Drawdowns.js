import React from "react";
import "../Styles/Drawdowns.css"
import right from "../assets/right-arrow-backup-2-svgrepo-com.svg"


function Drawdowns(props) {
    return (
        <>
            <div className="draw-downs">
                <h4>Your Drawdowns</h4>
                {/* <p>View and manage your drawdowns</p> */}
            </div>
            <div className="draw-outer">
                <div className="draw-display">
                    <div className="emi-amount">
                        <h2>{props.amount}</h2>
                        <p>House rent for {props.month}</p>
                    </div>
                    <div className="down-svg">
                        <p className="track">on track</p>
                        <p>2 months left</p>
                    </div>
                </div>
                <hr></hr>
                <div className="principal-div">
<p className="principal">Principal repaid 10983 of 23789</p>
<img src={right} alt="right-drop-down"></img>
</div>
            </div>
            
        </>
    )
}
export default Drawdowns


