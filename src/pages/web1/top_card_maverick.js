import React, { useState, useEffect } from 'react';

const Game = () => {
  const [playerDeckId, setPlayerDeckId] = useState('');
  const [dealerDeckId, setDealerDeckId] = useState('');
  const [playerCard, setPlayerCard] = useState(null);
  const [dealerCard, setDealerCard] = useState(null);
  const [wins, setWins] = useState(0);
  const [customDeck, setCustomDeck] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const initializeDecks = async () => {
      // Create player deck (2-10)
      const playerDeckResponse = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?cards=2S,3S,4S,5S,6S,7S,8S,9S,10S,2D,3D,4D,5D,6D,7D,8D,9D,10D,2C,3C,4C,5C,6C,7C,8C,9C,10C,2H,3H,4H,5H,6H,7H,8H,9H,10H');
      const playerDeckData = await playerDeckResponse.json();
      setPlayerDeckId(playerDeckData.deck_id);
      
      // Create dealer deck (Jack, Queen, King, Ace)
      const dealerDeckResponse = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?cards=JS,QS,KS,JD,QD,KD,AD,JC,QC,KC,AC,JH,QH,KH,AH');
      const dealerDeckData = await dealerDeckResponse.json();
      setDealerDeckId(dealerDeckData.deck_id);
    };
    
    initializeDecks();
  }, []);

  const drawCards = async () => {
    if (!playerDeckId || !dealerDeckId) return;

    const playerResponse = await fetch(`https://deckofcardsapi.com/api/deck/${playerDeckId}/draw/?count=1`);
    const dealerResponse = await fetch(`https://deckofcardsapi.com/api/deck/${dealerDeckId}/draw/?count=1`);

    const playerData = await playerResponse.json();
    const dealerData = await dealerResponse.json();

    setPlayerCard(playerData.cards[0]);
    setDealerCard(dealerData.cards[0]);

    // Determine winner
    const playerValue = getCardValue(playerData.cards[0]);
    const dealerValue = getCardValue(dealerData.cards[0]);
    const playerSuitWeight = getSuitWeight(playerData.cards[0].suit);
    const dealerSuitWeight = getSuitWeight(dealerData.cards[0].suit);

    if (playerValue > dealerValue || (playerValue === dealerValue && playerSuitWeight > dealerSuitWeight)) {
      setWins(wins + 1);
      setNotification(''); // Clear notification if the player wins
    } else {
      // Reset win count on failure
      setWins(0);
      setNotification('You lost! Your win count has been reset to 0.');
    }

    // Shuffle decks after drawing
    await fetch(`https://deckofcardsapi.com/api/deck/${playerDeckId}/shuffle/`);
    await fetch(`https://deckofcardsapi.com/api/deck/${dealerDeckId}/shuffle/`);
  };

  const modifyDeck = async () => {
    if (!playerDeckId || !customDeck) return;
    const response = await fetch(`${customDeck}`);
    const data = await response.json();
    setPlayerDeckId(data.deck_id); // Update player deck with new ID
    setNotification('Deck modification successful!'); // Notify the user of successful modification
  };

  const getCardValue = (card) => {
    const valueOrder = {
      '2': 2, '3': 3, '4': 4, '5': 5, '6': 6,
      '7': 7, '8': 8, '9': 9, '10': 10,
      'JACK': 11, 'QUEEN': 12, 'KING': 13, 'ACE': 14
    };
    return valueOrder[card.value];
  };

  const getSuitWeight = (suit) => {
    switch (suit) {
      case 'SPADES': return 4;
      case 'HEARTS': return 3;
      case 'DIAMONDS': return 1;
      case 'CLUBS': return 2;
      default: return 0;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Top Card Maverick</h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2>Instructions:</h2>
        <p>Draw a card to compete against the dealer. Higher card value wins!</p>
        <p>Face cards correspond to the following values:</p>
        <h4>Jack = 11</h4>
        <h4>Queen = 12</h4>
        <h4>King = 13</h4>
        <h4>Ace = 14</h4>
        <p>Card suits are ranked as follows:</p>
        <h4>Spades &gt; Hearts &gt; Clubs &gt; Diamonds</h4>
        <p>Ties favor the dealer. If both draw the same card, the dealer wins.</p>
        <p>You need 20 wins in a row to win the game!</p>
      </div>

      <h2 style={{ textAlign: 'center' }}>Wins: {wins} / 20</h2>
      {notification && <div style={{ color: '#FFA500' }}>{notification}</div>} {/* Orange-yellow color for notifications */}

      <button onClick={drawCards} style={{ marginTop: '20px', marginBottom: '20px' }}>Draw Cards</button>
      {playerCard && (
        <div style={{ color: '#4CAF50' }}> {/* Light green color for player's card */}
          Your Card: {playerCard.value} of {playerCard.suit}
        </div>
      )}
      {dealerCard && (
        <div style={{ color: '#F44336' }}> {/* Light red color for dealer's card */}
          Dealer's Card: {dealerCard.value} of {dealerCard.suit}
        </div>
      )}
      
      <input
        type="text"
        value={customDeck}
        onChange={(e) => setCustomDeck(e.target.value)}
        placeholder="Enter Custom API call"
        style={{ margin: '10px 0', padding: '10px', width: '300px', marginTop: '30px' }}
      />
      <button onClick={modifyDeck}>Modify Player Deck</button>
      
      {wins >= 20 && <h2>You Won! The flag is the API call you used! Make sure it guarantees a win!</h2>}
    </div>
  );
};

export default Game;
