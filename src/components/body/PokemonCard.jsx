import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './styles/pokemon-card.scss';

const PokemonCard = ({pokemon}) => (
<div className="card-wrapper">
  <div className="card-header">
    <h3>{pokemon.name}</h3>
    <h3>{pokemon.number}</h3>
  </div>
  <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
  <div className="physicals">
    <p>Weight: {Math.round(pokemon.weight * .22)} lbs</p>
    <p>Height: {Math.round(pokemon.height * 4)} in.</p>        
  </div>
  <div className="types">
    <h3>Types</h3>
    <p>
    {pokemon.types.map(type => type.name + ' ')}          
    </p>
  </div>       
</div>
)
// ){ 
//   constructor(props) {

//     super(props);

//     this.state = {
//       name: props.poke.name,
//       imageURL: null,
//       types: [],
//       height: null,
//       weight: null,
//       number: null
//     }
//   }

//   componentDidMount () {
//     let url = this.props.poke.url;
//     let types = this.state.types.slice()
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       let newTypes = this.getTypes(data.types)
//       newTypes.forEach((type) => {
//         types.push(type)
//       })
//       this.setState({
//         imageURL: data.sprites.front_default,
//         types: types,
//         height: data.height,
//         weight: data.weight,
//         number: data.order
//       })
//     })
//   }

//   getTypes = (array) => {
//     let types = [];
//     array.forEach((item) => {
//       types.push(item.type.name)
//     })
//     return types
//     }
//   render() {
//     let types = this.state.types;
//     return (
//       <div className="card-wrapper">
//         <div className="card-header">
//           <h3>{this.state.name}</h3>
//           <h3>{this.state.number}</h3>
//         </div>
//         <img src={this.state.imageURL} alt={this.state.name}/>
//         <div className="physicals">
//           <p>Weight: {Math.round(this.state.weight * .22)} lbs</p>
//           <p>Height: {Math.round(this.state.height * 4)} in.</p>        
//         </div>
//         <div className="types">
//           <h3>Types</h3>
//           <p>
//           {types.map(type => type + ' ')}          
//           </p>
//         </div>

       
//       </div>
//     )
//   }


// };

export default CSSModules(PokemonCard, styles);
