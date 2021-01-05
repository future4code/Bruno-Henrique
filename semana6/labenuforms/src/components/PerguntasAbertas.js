import React from 'react'

class PerguntasAbertas extends React.Component {
    render() {
        return (
            <div>
                {this.props.perguntas.map((cadaPergunta) => {
                    return (
                        <div>
                            <p>{cadaPergunta}</p>
                            <input />
                        </div>
                    );
                })}
            </div>
        )
    }
};

export default PerguntasAbertas;
