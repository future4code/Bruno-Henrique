import React from 'react'
import ComponentDetails from '../ComponentDetails/ComponentDetails'
import axios from 'axios'

class ComponentUsers extends React.Component {

    state = {
        users: [],
    }

    componentDidMount = () => {
        this.getUsers();
    }

    getUsers = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "bruno-silva-epps"
            }
        }).then((resposta) => {
            this.setState({ users: resposta.data });
            this.getUsers()
        }).catch((erro) => {
            console.log(erro.message)
        })
    }

    deleteUser = (id, name) => {
        const msg = window.confirm(`Deseja realmente exluir o usuario ${name}?`)
        if (msg) {
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
    }

    render() {

        const lista = this.state.users.map((user) => {
            return (
                <div>
                    {user.name}
                    <ComponentDetails />
                    <button onClick={() => this.deleteUser(user.id, user.name)}>Excluir</button>
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