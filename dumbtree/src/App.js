import React from 'react'
import './index.css';
import data from './data';
import { BrowserRouter, Route } from 'react-router-dom';
import ListingScreen from './screens/ListingScreen';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';



function App() {
    
    return (
        <BrowserRouter>
        <div className="grid-container">

            <Header />

            <main>
                <Route path="/listing/:id" component={ListingScreen} />
                <Route path="/" component={HomeScreen} exact />
            </main>

            <footer>
                All right reserved
            </footer>
    </div>
    </BrowserRouter>                                
    );
}
export default App;