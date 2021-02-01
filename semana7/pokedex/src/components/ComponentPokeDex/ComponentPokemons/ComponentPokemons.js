export default function ComponentPokemons(props) {

    const pokemonsByRegion = props.pokemons.map((pokemon) => {
        return(
            <p key={pokemon.entry_number}>{pokemon.pokemon_species.name}</p>
        )
    })

    return (
        <div>
            {pokemonsByRegion}
        </div>
    )
};