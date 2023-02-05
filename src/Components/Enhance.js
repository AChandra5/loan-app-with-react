import React, { useState } from "react";
import "../Styles/Enhance.css"
import Congrats from "./Congrats";

function Enhance() {
    // debugger
    const [congrats, setCongrats] = useState(false)

    function RenderEnhance() {
        return(
        <div className="congrats-container">
            <div className="amount-container">
                <div>
                    <p>Available amount</p>
                    <h3><b>₹0</b></h3>
                </div>
                <div>
                    <p>Used Amount</p>
                    <h3><b>₹40,000</b></h3>
                </div>
            </div>
            <div className="repay-request">
                <p>To make another transaction, please repay the amount or enhance your credit limit</p>
            </div>
            <div className="enhance-now">
                <h4 className="enhance-text">Enhance Your Credit Limit to ₹3,00,000</h4>
                <button onClick={() => { setCongrats(!congrats) }}>Enhance Now</button>
            </div>
        </div>
        )
    }
    return (
        congrats? <Congrats /> : <RenderEnhance />
    )

}
export default Enhance