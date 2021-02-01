import React from 'react'
import ComponentDetails from '../ComponentDetails/ComponentDetails'
import axios from 'axios'

class ComponentUsers extends React.Component {

    state = {
        users: [],
        userEmail: "",
        userName: "",
        details: false
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

    deleteUser = (id, name) => {
        const msgConfirm = window.confirm(`Deseja realmente exluir o usuario ${name}?`)
        if (msgConfirm) {
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

    showDetails = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                Authorization: "bruno-silva-epps"
            }
        }).then((resposta) => {
            this.setState({ userName: resposta.data.name, userEmail: resposta.data.email })
            this.setState({ details: true })
        }).catch((erro) => {
            alert('Não foi possivel encontar as informações!')
        })
    }

    render() {

        const lista = this.state.users.map((user) => {
            return (
                <div>
                    {user.name}
                    <button onClick={() => this.showDetails(user.id)}>Detalhes</button>
                    <button onClick={() => this.deleteUser(user.id, user.name)}>Excluir</button>
                </div>
            )
        })

        return (
            <div>
                {this.state.details ? (<div>
                    <ComponentDetails
                        name={this.state.userName}
                        email={this.state.userEmail}
                    />
                </div>) : <div>{lista}</div>}

                {/* {lista} */}
                {/* <ComponentDetails
                    name={this.state.userName}
                    email={this.state.userEmail}
                /> */}
            </div>
        )
    }
}

export default ComponentUsers;