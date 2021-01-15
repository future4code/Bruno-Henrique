import React from 'react'
import axios from 'axios'
import {baseURL, header} from '../APISource/APISource'

class CreatePlaylist extends React.Component {

    state = {
        inputName: '',
    }

    createPlaylistName = () => {
        const body = {
            name: this.state.inputName
        }
        axios.post(`${baseURL}playlists`, body, header)
        .then((res) => {
            console.log(res.data)
            this.setState({inputName: ''})
        })
        .catch((error) => {
            alert('Não foi possivel criar uma playlista com esse nome :(')
            console.log(error)
        })
    }

    handleInputName = (e) => {
        this.setState({inputName: e.target.value})
    }

    handleBtnCreate = () => {
        this.createPlaylistName()
    }

    render() {
        return (
            <div>
                <p>Nome da playlist</p>
                <input
                    value={this.state.inputName} 
                    onChange={this.handleInputName}
                />
                <button onClick={this.handleBtnCreate}>Criar</button>
            </div>
        )
    }
};

export default CreatePlaylist;