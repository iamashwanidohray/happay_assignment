import React from 'react';
import './index.css';

export default function NavBar(props) {

    return(
        <div className="topnav">
            <a href="/"><img alt="Happay" src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"/>{props.header}</a>
            <div className="topnav-right cart">
                <a><img src="/images/shopping-cart.png" alt="Shopping Cart"/></a>
            </div>
        </div>
    )
};