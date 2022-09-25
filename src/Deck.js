import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card.js';

const API_BASE_URL = "https://www.deckofcardsapi.com/api/deck";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Deck will be the first response from our request and will contain the deck id
            deck: null,
            drawn: []
        }
        this.getCard = this.getCard.bind(this); 
    }

    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);

        this.setState(
            { deck: deck.data }
        );
    }

    async getCard() {
        // Make a request using deck id
        let id = this.state.deck.deck_id;
        let cardUrl = `${API_BASE_URL}/${id}/draw/`;

        let cardRes = await axios.get(cardUrl);

        // set state using new card info from the API
        // by adding new information into state.drawn array
        let card = cardRes.data.cards[0];

        this.setState(
            st => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.suit} ${card.value}`
                    }
                ]
            })
        );
    }

    render() {
        return(
            <div>
                <h1>Card Dealer</h1>
                <button onClick={this.getCard}>Get Card!</button>
            </div>
        )
    }
}

export default Deck;