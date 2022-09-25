import React, { Component } from 'react';
import Card from './Card.js';

const API_URL = "https://www.deckofcardsapi.com/api/deck/new/shuffle";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Deck will be the first response from our request and will contain the deck id
            deck: null
        } 
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <div>
                <h1>Card Dealer</h1>
            </div>
        )
    }
}

export default Deck;