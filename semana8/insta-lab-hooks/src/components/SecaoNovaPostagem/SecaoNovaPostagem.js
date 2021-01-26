import React, { useState } from 'react';

function SecaoNovaPostagem(props) {

    const [inputUserName, setInputUserName] = useState('')
    const [inputUserAvatar, setInputUserAvatar] = useState('')
    const [inputLink, setInputLink] = useState('')

    const handleInputUserName = (e) => {
        setInputUserName(e.target.value)
    }

    const handleInputUserAvatar = (e) => {
        setInputUserAvatar(e.target.value)
    }

    const handleInputLink = (e) => {
        setInputLink(e.target.value)
    }

    return (
        <div>
            <input
                placeholder={"Nome de usuário"}
                value={inputUserName}
                onChange={handleInputUserName}

            />
            <input
                placeholder={"Imagem do avatar"}
                value={inputUserAvatar}
                onChange={handleInputUserAvatar}

            />
            <input
                placeholder={"Link da imagem"}
                value={inputLink}
                onChange={handleInputLink}

            />
            <button onClick={() => props.onClickCreate(inputUserName, inputUserAvatar, inputLink)}>Postar</button>
        </div>
    )
}

export default SecaoNovaPostagem;
