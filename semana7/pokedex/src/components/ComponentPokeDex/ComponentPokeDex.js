import React from 'react'
import axios from 'axios'
import { baseUrlRegion, baseUrlAllPokemons } from "./BaseUrl";
import ComponentRegion from './ComponentRegion/ComponentRegion';
import ComponentPokemons from './ComponentPokemons/ComponentPokemons';

class ComponentPokeDex extends React.Component {

    state = {
        allRegions: [],
        allPokemons: [],
        seletedRegion: '',
        showAll: true
    }

    componentDidMount = () => {
        this.getAllRegions()
        this.getAllPokemons()
    }

    getAllRegions = async () => {
        try {
            const response = await axios.get(baseUrlRegion)
            this.setState({ allRegions: response.data.results })
        } catch (error) {
            console.log(error)
        }
    }

    getAllPokemons = async () => {
        try {
            const response = await axios.get(baseUrlAllPokemons)
            // console.log(response.data.pokemon_entries)
            this.setState({ allPokemons: response.data.pokemon_entries })
        } catch (error) {
            console.log(error)
        }
    }

    getSelectedPokemons = (e) => {
        this.setState({ seletedRegion: e.target.value })
        if(e.target.value !== 'all'){
            this.setState({showAll: !this.state.showAll})
        }
    }

    render() {
        //   console.log(this.state.allPokemons)
        return (
            <div>
                <h2>Pokedex</h2>
                <select onChange={this.getSelectedPokemons}>
                    <option value="all">All</option>
                    <ComponentRegion
                        arrayRegions={this.state.allRegions}
                    />
                </select>
                {this.state.showAll ? (
                    <ComponentPokemons
                        pokemons={this.state.allPokemons}
                    />)
                    : <ComponentPokemons
                        region={this.state.seletedRegion}
                        pokemons={this.state.allPokemons}
                    />}


            </div>
        )
    }
};

export default ComponentPokeDex;