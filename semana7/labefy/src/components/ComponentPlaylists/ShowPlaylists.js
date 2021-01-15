import React from 'react'
import { baseURL, header } from '../APISource/APISource'
import axios from 'axios'

class ShowPlaylists extends React.Component {

    state = {
        playlists: []
    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        axios.get(`${baseURL}playlists`, header)
            .then((res) => {
                this.setState({playlists: res.data.result.list})
                this.getAllPlaylists()
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {

        const ShowAllPlaylists = this.state.playlists.map((playlist) => {
            return (
                <p key={playlist.id}>{playlist.name}</p>
            )
        })

        return (
            <div>
                {ShowAllPlaylists}
            </div>
        )
    }
};

export default ShowPlaylists;