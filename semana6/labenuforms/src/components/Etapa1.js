import React from 'react'
import PerguntasAbertas from './PerguntasAbertas'
import PerguntasFechadas from './PerguntasFechadas'


class Etapa1 extends React.Component {
    state = {
        perguntas: [
            "1. Qual o seu nome?",
            "2. Qual a sua idade?",
            "3. Qual o seu email"
        ]
    }

    render() {
        return (
            <div>
                <PerguntasAbertas perguntas={this.state.perguntas} />
                <PerguntasFechadas
                    pergunta={"4. Qual a sua escolaridade"}
                    opcoes={[
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"
                    ]}
                />
            </div>
        )
    }
}

export default Etapa1;

// <label>Escolaridade: </label>
// <select>
//     <option>Ensino medio incompleto</option>
//     <option>Ensino medio completo</option>
//     <option>Ensino superior incompleto</option>
//     <option>Ensino superior completo</option>
// </select>