import React from "react";
import down from "../assets/down-arrow-backup-2-svgrepo-com.svg"
import "../Styles/EMI.css"

function Emi(props) {
    return (
        <>
            <div>
                <h4>Total EMI to be paid</h4>
            </div>
            <div className="emi-display">
                <div className="emi-amount">
                    <h2>{props.amount}</h2>
                    <p>EMI due on {props.date}</p>
                </div>
                <div className="down-svg">
                    <img src={down} alt="drop-down"></img>
                </div>
            </div>
        </>
    )
}
export default Emi