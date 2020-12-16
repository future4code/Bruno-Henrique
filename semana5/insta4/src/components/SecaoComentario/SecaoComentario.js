import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		dica: "Comente aqui!",
		textocomentario: "" 
	}

	onChangeComentario = (event) => {
		this.setState({ textocomentario: event.target.value})
		//console.log(event.target.value)
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={this.state.dica}
				value={this.state.textocomentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
