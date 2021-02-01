import React from 'react'
import './index.css';
import data from './data';
function App() {
    return (
        <div className="grid-container">

            <header>
                <div className="header-alert">
                    <i className="fas fa-exclamation-circle">   keeping our community safe</i>
                    <a>COVID-19 Safety Precautions</a>
                </div>

                <div className="header-nav">
                    <div>
                        <i className="fas fa-home"></i>
                    </div>
                    <div>
                        <a>My Dumbtree</a>
                    </div>

                </div>


            </header>
            <main>
                <div className='main-panel'>
                    <img className="main-bg" src="./images/ddt.jpg" alt=""></img>
                    <img className="main-logo" src="./images/gt.png" alt=""></img>

                    <div className='search-bar-wrapper'>
                        <div className='search-form-wrapper'>
    
                            <form className='search-form'action="">
    
                                <ul className='search-bar-list'>
                                    <li className='search-bar-dropdown search-bar-item'>

                                        <div className='sbdb-wrapper'>
                                            <i className="fas fa-bars"></i>
                                            All Categories   
                                            <i className="sbd-icon fas fa-chevron-down"></i>
    
                                            <div className='search-bar-dropdown-content'>
                                                <div id="sbdc-head" value="All categories">
                                                    <i className="fas fa-bars sbdc-icon"></i>
                                                    All categories
                                                </div>
                                                <div value="Electronics">
                                                    <i className="fas fa-laptop sbdc-icon"></i>
                                                    Electronics
                                                </div>
                                                <div value="Vehicles">
                                                    <i className="fas fa-car sbdc-icon"></i>
                                                    Vehicles
                                                </div>
                                                <div value="Miscellaneous">
                                                    <i className="fas fa-shopping-cart sbdc-icon"></i>
                                                    Miscellaneous
                                                </div>
                                            </div>

                                        </div>



                                    </li>

                                    <li className='search-bar-keyword'>
                                        <div className='search-bar-wrapper'>

                                            <input placeholder="I'm looking for..." className='search-input' type="text"></input> 

                                        </div>
                                    </li>
                                    <li className='search-bar-location'>
                                        <div className='sbl-wrapper'>
                                            <i className="fas fa-map-marker-alt"></i>
                                            Perth Region, WA
                                        </div>
                                    </li>
                                    <li className='search-bar-distance'>
                                        <div className='sbd-wrapper'>
                                            +0km
                                            <i className="sbd-icon fas fa-chevron-down"></i>
                                        </div>
                                        
                                    </li>
                                    <li className='search-bar-button'>
                                        <div className='sbb-wrapper'>
                                            <i className="fas fa-search fa-2x"></i>
                                        </div>
                                                                      
                                    </li>
                                </ul>
    
                            </form>


                        </div>
                    </div>

                </div>




                <div className='main-items'>
                    <div className='item-tabs'>
                        <ul>
                            <li>
                                <a >HomePage Gallery</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a>Recently Viewed</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a>Watchlist</a>
                            </li>
                        </ul>

                    </div>

                    <div className='main_content-container'>

                        <div className='main-content'>

                            {data.listings.map(
                                (listing) => (
                                    <div className='content-items'>
                                    <div className='item-card'>
                                        <div className='card-thumb'>
                                            <a className='thumb-link'>
                                                <img className='thumb' src={listing.image} alt=""></img>
                                            </a>
    
                                        </div>
                                        <div className='card-detail'>
    
                                            <h3 className='detail-title'>
                                                {listing.description}
                                            </h3>
    
                                            <div className='detail-price'>
                                                <span className='price-value'>
                                                    
                                                    <span className='price-currency'>$</span>
                                                    
                                                    {listing.price}
                                                </span>
                                            </div>
    
                                            <div className='detail-location'>
                                                {listing.location}
                                            </div>
                                            
                                            <div className='detail-addWatchlist'>
                                                <i className="far fa-heart fa-lg"></i>
                                            </div>
                                        </div>
    
                                    </div>
                                </div>
                                )
                            )}

                        </div>
                    </div>
                </div>
            </main>

            <footer>
                All right reserved
            </footer>
    </div>

    );
}
export default App;