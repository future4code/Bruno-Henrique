import React from 'react'
import axios from 'axios'

class ComponentUsers extends React.Component {

    state = {
        users: [],
    }

    componentDidMount = () => {
        this.getUsers();
    }

    componentDidUpdate = () => {
        this.getUsers();
    }

    getUsers = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "bruno-silva-epps"
            }
        }).then((resposta) => {
            this.setState({ users: resposta.data });
        }).catch((erro) => {
            console.log(erro.message)
        })
    }

    deleteUser = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                Authorization: "bruno-silva-epps"
            }
        }).then((reposta) => {
            alert("Usuario excluido!")
        }).catch((erro) => {
            alert("Não foi possivel excluir o usuario!")
            console.log(erro.message)
        })
    }


    render() {

        const lista = this.state.users.map((user) => {
            return (
                <div>
                    {user.name}
                    <button onClick={() => this.deleteUser(user.id)}>Excluir</button>
                </div>
            )
        })

        return (
            <div>
                {lista}
            </div>
        )
    }
}

export default ComponentUsers;