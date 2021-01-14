import React from 'react'
import axios from 'axios'

class ComponentPokeDex extends React.Component {

    state = {
        regions: [],
        pokemons: []
    }

    componentDidMount = () => {
        this.getAllRegions()
    }

    getAllRegions = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/region/')
            // console.log(response.data.results)

            this.setState({ regions: response.data.results })
        } catch (error) {
            console.log(error)
        }
    }

    getStartedPokemons = async (e) => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            // console.log(response.data.results)
            this.setState({ pokemons: response.data.results })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        // console.log(this.state.pokemons)
        const listOfRegions = this.state.regions.map((region) => {
            return (
                <option key={region.url} value={region.name}>{region.name}</option>
            )
        })

        const listOfPokemons = this.state.pokemons.filter((pokemon) => {
            
            if (pokemon.name === "bulbasaur" || pokemon.name === "charmander" || pokemon.name === "squirtle") {
                return true
            }
        }).map((pokemon) => {
            return(
                <p>{pokemon.name}</p>
            )
        })
        return (
            <div>
                <h2>Pokedex</h2>
                <select onChange={this.getStartedPokemons}>
                    <option>...</option>
                    {listOfRegions}
                </select>
                {listOfPokemons}
            </div>
        )
    }
};

export default ComponentPokeDex;