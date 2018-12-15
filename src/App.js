import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const url = "http://beta-api-kuroganehammer.azurewebsites.net/api/"

export function getCharacterIcon(cid){
  switch(cid){
    case 1:
        return("images/bayonetta.png");
    case 2:
        return("images/bowser.png");
    case 3:
        return("images/bowserJr.png");
    case 4:
        return("images/captFalcon.png");
    case 5:
        return("images/charizard.png");
    case 6:
        return("images/cloud.png");
    case 7:
        return("images/corrin.png");
    case 8:
        return("images/darkPitt.png");
    case 9:
        return("images/diddykong.png");
    case 10:
        return("images/donkeyKong.png");
    case 12:
        return("images/drMario.png");
    case 13:
        return("images/duckHunt.png");
    case 14:
        return("images/falco.png");
    case 15:
        return("images/fox.png");
    case 16:
        return("images/ganondorf.png");
    case 17:
        return("images/greninja.png");
    case 18:
        return("images/jigglypuff.png");
    case 19:
        return("images/kindDeDeDe.png");
    case 20:
        return("images/kirby.png");
    case 21:
        return("images/link.png");
    case 22:
        return("images/littleMac.png");
    case 23:
        return("images/lucario.png");
    case 24:
        return("images/lucas.png");
    case 25:
        return("images/lucina.png");
    case 26:
        return("images/luigi.png");
    case 27:
        return("images/mario.png");
    case 28:
        return("images/marth.png");
    case 29:
        return("images/megaman.png");
    case 30:
        return("images/metaKnight.png");
    case 31:
        return("images/mewtwo.png");
    case 32:
        return("images/mii.png");
    case 33:
        return("images/mii.png");
    case 34:
        return("images/mii.png");
    case 35:
        return("images/gameNWatch.png");
    case 36:
        return("images/ness.png");
    case 37:
        return("images/olimar.png");
    case 38:
        return("images/pacman.png");
    case 39:
        return("images/palutena.png");
    case 40:
        return("images/peach.png");
    case 41:
        return("images/pikachu.png");
    case 42:
        return("images/pitt.png");
    case 43:
        return("images/rob.png");
    case 44:
        return("images/robin.png");
    case 45:
        return("images/rosalina.png");
    case 46:
        return("images/roy.png");
    case 47:
        return("images/ryu.png");
    case 48:
        return("images/samus.png");
    case 49:
        return("images/shiek.png");
    case 50:
        return("images/shulk.png");
    case 51:
        return("images/sonic.png");
    case 52:
        return("images/toonLink.png");
    case 53:
        return("images/villager.png");
    case 55:
        return("images/wario.png");
    case 55:
        return("images/wiiFit.png");
    case 56:
        return("images/yoshi.png");
    case 57:
        return("images/zelda.png");
    case 58:
        return("images/zeroSuitSamus.png");
  }
}

export class CharacterSelectionGrid extends Component {
  constructor(props){
    super(props);
    this.state = {characters: []}
    this.getCharacterData = props.getCharacterData.bind(this)
  }
  componentDidMount(){
    axios.get(url + "characters")
    .then(res => {
      const characterResponse = res.data;
      var characters = [];
      for(var characterIndex in characterResponse){
        characters.push({ name: characterResponse[characterIndex].Name, cid: characterResponse[characterIndex].OwnerId});
      }
      console.log(JSON.stringify(characters))
      this.setState({ characters: characters });
    })
  }
  render(){
    return(
      <div className="grid-container">
      {
        this.state.characters.map((character) =>
          <div className={ "grid-item" + " characters "}>
            <img src={getCharacterIcon(character.cid)} onClick={() => this.getCharacterData(character.cid)}/>
          </div>
        )
      }
      </div>
    )
  }
}

class App extends Component {
  getCharacterData = (cid) => {
    axios.get(url + "characters/" + cid)
    .then(res => {
      const character = res.data;
      console.log("Index: " + cid + ", Selected: " + character.Name)
    })
  }
  render() {
    return (
      <div className="App">
        <CharacterSelectionGrid getCharacterData={this.getCharacterData}/>
      </div>
    );
  }
}

export default App;
