import React from 'react'
import { baseURL, header } from '../APISource/APISource'
import axios from 'axios'

class ShowPlaylists extends React.Component {

    state = {
        playlists: [],

    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        axios.get(`${baseURL}playlists`, header)
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
                this.getAllPlaylists()
            }).catch((error) => {
                console.log(error)
            })
    }

    handleDelete = (id, name) => {
        const msgDelete = window.confirm(`Deseja realmente excluir a playlist ${name}?`)
        if (msgDelete) {
            axios.delete(`${baseURL}playlists/${id}`, header)
                .then((res) => {
                    alert(`Playlist ${name} foi deletada`)
                })
                .catch((error) => {
                 })
        }
    }

    handleBtnEdit = (id) => {

    }

    render() {

        const ShowAllPlaylists = this.state.playlists.map((playlist) => {
            return (
                <div key={playlist.id}>
                    <p>{playlist.name}</p>
                    <button onClick={() => this.handleBtnEdit(playlist.id)}>Editar</button>
                    <button onClick={() => this.handleDelete(playlist.id, playlist.name)}>Deletar</button>
                </div>
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