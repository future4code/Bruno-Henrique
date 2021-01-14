
export default function ComponentRegion(props) {
    return (
        props.arrayRegions.map((region) => {
            return(
                <option key={region.url} value={region.name}>{region.name}</option>
            )
        })
    )
};