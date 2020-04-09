import React from 'react';
import axios from 'axios';
import Characters from './components/Characters'
import './App.css';

const SimpCharacters = {
  "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
  "character": "Nelson Muntz",
  "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  "characterDirection" : "Left"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: SimpCharacters
      };
      this.getCharacters = this.getCharacters.bind(this)
      }
      
      getCharacters() {
        axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
          .then(response => response.data)
          .then(data => {
            this.setState({
              character: data[0],
            });
        });
      }

  render() {
    const {character} = this.state
    return (
      <div className="App">
        <Characters character={character} />
        <button type="button" onClick={this.getCharacters}>Change Character & Quote</button>
      </div>
  );}
}

export default App;
