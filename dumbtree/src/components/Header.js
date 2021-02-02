import React from 'react';

export default function Header() {
    const covidlink= 'https://blog.gumtree.com.au/important-covid-19-update/';
    return (

        <header>
        <div className="header-alert">
            <i className="fas fa-exclamation-circle">   keeping our community safe</i>
            <a href={covidlink}>COVID-19 Safety Precautions</a>
        </div>

        <div className="header-nav">
            <div>
                <i href="/" className="fas fa-home"></i>
            </div>
            <div className="header-auth">
                <a>Sign in</a>
                <a>Register</a>
                <div id='mydumbtree'>
                    <i class="fas fa-user-circle fa-lg"></i>
                    My Dumbtree
                </div>
            </div>

        </div>


    </header>



    )



}