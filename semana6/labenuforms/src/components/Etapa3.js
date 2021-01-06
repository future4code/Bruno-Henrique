import React from 'react'

class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <label>Qual o motivo da não conclusão do curso de graduação?</label>
                <input />
                <label>Você fez algum curso complementar?</label>
                <select>
                    <option>Curso Técnico</option>
                    <option>Cursos de Qualificação profissional</option>
                    <option>Cursos de idiomas</option>
                    <option>Não fiz curso complementar  </option>
                </select>
            </div>
        )
    }
}

export default Etapa3;