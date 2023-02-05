import React from 'react'
import help from '../assets/help.svg'
import close from '../assets/close-x-svgrepo-com.svg'
import home from "../assets/home-svgrepo-com.svg"
import "../Styles/Top_Home.css"



function HomeTop(props) {
    return (
        <>
            <div className='top'>
                <div className='left'>
                    <img src={home} alt="help" ></img>
                    <h2 color='white'>HOUSING</h2>
                </div>
                <div className='right'>
                    <img src={help} alt="help" ></img>
                    <img src={close} alt="help"  ></img>
                </div>
            </div>
            <h3>Hi {props.name}!</h3>
        </>
    )
}

export default HomeTop