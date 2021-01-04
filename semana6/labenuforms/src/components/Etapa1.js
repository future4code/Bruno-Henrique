import React from 'react'

class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <label>Nome: </label>
                <input />
                <label>Idade: </label>
                <input />
                <label>Email: </label>
                <input />
                <label>Escolaridade: </label>
                <select>
                    <option>Ensino medio incompleto</option>
                    <option>Ensino medio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
            </div>
        )
    }
}

export default Etapa1;