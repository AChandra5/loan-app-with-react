import React from "react";
import rentIcon from "../assets/Group 1000002492.svg"
import withdrawIcon from "../assets/Group 1000002475.svg"
import "../Styles/CreditLine.css"

function CreditLine() {
    return (
        <>        <h4>Use your credit line for</h4>

            <div className="credit-line">
                <div className="house-rent img-block">
                    <img src={rentIcon} alt="rent-icon"></img>
                    <p>House Rent</p>
                </div>
                <div className="withdraw img-block">
                    <img src={withdrawIcon} alt="withdraw"></img>
                    <p>Withdraw to Bank Account</p>

                </div>
                <div className="office-rent img-block">
                    <img src={withdrawIcon} alt="office-rent"></img>
                    <p>Office Rent</p>

                </div>
            </div>
        </>

    )


}
export default CreditLine