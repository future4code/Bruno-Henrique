export default function PlanetsComponent(props) {
    const planets = ["Mercurio", "Venus", "Terra", "Marte", "Jupiter", "Saturno", "Urano", "Neptuno"]
    return (
        <select
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            required
        >
            <option value="">...</option>
            {planets.map((planet) => {
                return (
                    <option 
                        key={planet}
                        value={planet}>
                        {planet}
                    </option>
                )
            })}
        </select>
    )
}
