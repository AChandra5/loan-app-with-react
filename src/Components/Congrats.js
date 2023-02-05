import React, { useState } from "react";
import "../Styles/Congrats.css"
import Enhance from "./Enhance";
// import Button from "./Button";

function Congrats() {
    const [show, setShow] = useState(false)

    function RenderCongrats() {
        return (
            <div className="congrats-container">
                <div className="credit-container">
                    <p>Congratulations!</p>
                    <h3><b>Your Credit Line is Ready to Use</b></h3>
                </div>
                <div>
                    <p>Available amount</p>
                    <h3><b>₹
                        2,60,000</b><sub>@16% p.a</sub></h3>
                    <button onClick={() => setShow(!show)}>Withdraw now</button>
                    {/* <Button /> */}
                    {/* {show ? <Enhance />  : <Congrats />} */}
                </div>
            </div>)
    }

    return (
        show ? <Enhance /> : <RenderCongrats />
    )

}
export default Congrats