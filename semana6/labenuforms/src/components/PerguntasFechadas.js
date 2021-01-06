import React from "react";

class PerguntasFechadas extends React.Component {
    render() {
        const options = this.props.opcoes
        return (
            <div>
                <p>{this.props.pergunta}</p>
                <select>
                    {options.map(optionValue => (
                        <option value={optionValue}>{optionValue}</option>
                    ))
                    }
                </select>
            </div>
        )
    }
};

export default PerguntasFechadas;