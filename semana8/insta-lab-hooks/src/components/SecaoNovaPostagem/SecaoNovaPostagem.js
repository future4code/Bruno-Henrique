import React from 'react';

const SecaoNovaPostagem = (props) => {

    return (
        <div>
            <input
                placeholder={"Nome de usuário"}
                value={props.inputUser}
                onChange={props.onChangeName}

            />
            <input
                placeholder={"Imagem do avatar"}
                value={props.inputAvatar}
                onChange={props.onChangeAvatar}

            />
            <input
                placeholder={"Link da imagem"}
                value={props.inputLink}
                onChange={props.onChangeLink}

            />
            <button onClick={props.onClickCreate}>Postar</button>
        </div>
    )
}

export default SecaoNovaPostagem;
