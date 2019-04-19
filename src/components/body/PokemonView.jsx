import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/pokemonView.scss';
import vulnerabilitiesHash from 'components/body/vulnerabilitiesHash';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



class PokemonView extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      extraInfo: null,
      currentWeaknesses: null
    }
  }



  getExtraInfo = () => {
    fetch(this.props.pokemon.species.url)
      .then(response => response.json())
        .then(data => this.setState({extraInfo : data}))
  }

  getEnglishText = (arr) => {
    let englishIndex;
    for(let i = 0; i < arr.length; i++) {
      if (arr[i].language.name === 'en') {
        englishIndex = i;
        break
      }
    }
    return englishIndex
  }

  getWeaknesses = (pokemon, hashTable) => {
    let types = pokemon.types.map( type => {
       return type.type.name
    })
    let midway =[];
    types.forEach(function(type) {
      midway.push(...hashTable[type]);
    })
    for(let i = 0; i < midway.length; i++) {
      if(types.indexOf(midway[i]) !== -1) {
        midway.splice(i, 1);
      }
    }

    let results = [];

    for (let i = 0; i < midway.length; i++) {
      if (results.indexOf(midway[i]) === -1) {
        results.push(midway[i]);
      }
    }
    
    this.setState({currentWeaknesses : results});
  }

  handleKeyPress = (e) => {
    if(e.keyCode === 39) {
      this.props.goRight();
    } else if (e.keyCode === 37) {
      this.props.goLeft();
    } else if (e.keyCode === 27) {
      this.props.exit();
    }
  }

  componentDidMount () {
    document.addEventListener("keydown", this.handleKeyPress, false)
    this.getExtraInfo();
    this.getWeaknesses(this.props.pokemon, vulnerabilitiesHash);
  }

  componentDidUpdate(prevProps) {
    if(this.props.pokemon !== prevProps.pokemon) {
      this.getExtraInfo();
      this.getWeaknesses(this.props.pokemon, vulnerabilitiesHash);
    }
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }


  render() {
    if(this.state.extraInfo !== null) {
      return (
        <div className="poke-view-wrapper">
          <div className="navigate">
            <div className="nav-part">
              <FontAwesomeIcon className='go-left' icon={faArrowLeft} onClick={this.props.goLeft}/>
              <p>#{this.props.pokemon.game_indices[0].game_index - 1} </p>
            </div>
            <div className="nav-part">
              <FontAwesomeIcon className='close-icon' onClick={this.props.exit} icon={faTimes} />  
            </div>
            <div className="nav-part">
              <p>#{this.props.pokemon.game_indices[0].game_index + 1}</p>
              <FontAwesomeIcon className='go-right' icon={faArrowRight} onClick={this.props.goRight}/>  
            </div>
          </div>
          <div className="poke-name">
            <h1 className="title">{this.props.pokemon.name}</h1>
            <h2>#{this.props.pokemon.id}</h2>
          </div>
          <div className="poke-image">
          <img src={this.props.pokemon.sprites.front_default} alt={this.props.pokemon.name} />
          </div>
          <div className="stats">
            <h3>Base Stats</h3>
            <p>HP : {this.props.pokemon.stats[5].base_stat}</p>
            <p>Attack : {this.props.pokemon.stats[3].base_stat}</p>
            <p>Defense : {this.props.pokemon.stats[4].base_stat}</p>
            <p>Special Attack : {this.props.pokemon.stats[2].base_stat}</p>
            <p>Special Defense : {this.props.pokemon.stats[1].base_stat}</p>
            <p>Speed : {this.props.pokemon.stats[0].base_stat}</p>
          </div>
          <div className="flavor-text">
            <p>{this.state.extraInfo.flavor_text_entries[this.getEnglishText(this.state.extraInfo.flavor_text_entries)].flavor_text}</p>
          </div>
          <div className="extra-info">
            <div className="info-pair">
              <h5>Height</h5>
              <h4>{(this.props.pokemon.height / 10)}m</h4>
            </div>
            <div className="info-pair">
              <h5>Weight</h5>
              <h4>{(this.props.pokemon.weight / 10)}kg</h4>
            </div>
            <div className="info-pair abilities-pair">
              <h5>Abilities</h5>
              {
                this.props.pokemon.abilities.length === 2 ? <h4>{this.props.pokemon.abilities[1].ability.name}</h4> : <h4>{this.props.pokemon.abilities[0].ability.name}</h4>
              }
            </div>
            <div className='info-pair'>
              <h5>Type</h5>
              <h4>{this.state.extraInfo.genera[2].genus}</h4>
            </div>
          </div>
          <div className="poketypes">
            <div className="typegroup">
              <h3>Types</h3>
            </div>
            <div className="types-detail">
              {
                this.props.pokemon.types.map(type => 
                <p className={type.type.name} key={type.type.name}>{type.type.name.toUpperCase()}</p>
                )
              }
            </div>
            <div className="typegroup">
              <h3>Weaknesses</h3>
            </div>
            <div className="types-detail">
              {
                this.state.currentWeaknesses.map( weakness =>
                  <p className={weakness} key={weakness}>{weakness.toUpperCase()}</p>
                )
              }
            </div>     
          </div>
        </div>    
      )
    } 
  }
}

export default CSSModules(PokemonView, styles);