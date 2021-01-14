import React from 'react'
import axios from 'axios'
import { baseUrlRegion, baseUrlAllPokemons } from "./BaseUrl";

class ComponentPokeDex extends React.Component {

    state = {
        regions: [],
        pokemons: [],
    }

    componentDidMount = () => {
        this.getAllRegions()
    }

    getAllRegions = async () => {
        try {
            const response = await axios.get(baseUrlRegion)
            this.setState({ regions: response.data.results })
        } catch (error) {
            console.log(error)
        }
    }

    getAllPokemons = async () => {
        try {
            const response = await axios.get(baseUrlAllPokemons)
            this.setState({ pokemons: response.data.pokemon_entries })
        } catch (error) {
            console.log(error)
        }
    }

    getSelectedPokemons = (e) => {
        
    }

    render() {
        // console.log(this.state.pokemons)
        const listOfRegions = this.state.regions.map((region) => {
            return (
                <option key={region.url} value={region.name}>{region.name}</option>
            )
        })

        return (
            <div>
                <h2>Pokedex</h2>
                <select onChange={this.getSelectedPokemons}>
                    <option>...</option>
                    {listOfRegions}
                </select>
            </div>
        )
    }
};

export default ComponentPokeDex;