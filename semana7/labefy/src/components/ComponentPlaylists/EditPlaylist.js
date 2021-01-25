import React from 'react'
import axios from "axios";

class EditPlaylist extends React.Component {
    state = {
        inputSong: '',
        inputSinger: '',
        inputLink: ''
    }

    handleMusicName = (e) => {
        this.setState({ inputSong: e.target.value })
    }

    handleSinger = (e) => {
        this.setState({ inputSinger: e.target.value })
    }

    handleLink = (e) => {
        this.setState({ inputLink: e.target.value })
    }

    render() {
        return (
            <div>
                <p>Adicionar música</p>
                <input
                    placeholder="Nome da música"
                    value={this.state.inputSong}
                    onChange={this.handleMusicName}
                />
                <input
                    placeholder="Banda ou Cantor/Cantora"
                    value={this.state.inputSinger}
                    onChange={this.handleSinger}
                />
                <input
                    placeholder="link"
                    value={this.state.inputLink}
                    onChange={this.handleLink}
                />
                <button>Adicionar</button>
            </div>
        )
    }
};

export default EditPlaylist;