import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
          const data = await response.json();
          setPokemon(data.results);
        } catch (error) {
          console.log(error);
        }
      };
    fetchData();
  }, []);

  return (
    <div className="App">
      <ul>
        {
          pokemon.map((pokemonObj, index) => {
            return (<li key= {index}>
              {pokemonObj.name}
            </li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
